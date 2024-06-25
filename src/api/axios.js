import axios from "axios"
import config from "./config"

const AUTH_URL = config.login

function createAxios({ url }) {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
  })

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`
    return config
  })

  instance.interceptors.response.use(
    (config) => {
      return config
    },
    async (error) => {
      
      // Тут error - any, на всякий случай можно проверять что он содержит нужные поля
      const originalRequest = error.config
      if (
        error.response.status == 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true
        try {
          const response = await axios.post(
            `${AUTH_URL}/refresh-token`,
            {
              token: localStorage.getItem("refreshToken"),
            },
            {
              withCredentials: true,
            }
          )
          // Тут тоже можно проверять что всё пришло
          localStorage.setItem("accessToken", response.data.accessToken)
          localStorage.setItem("refreshToken", response.data.refreshToken)
          return instance.request(originalRequest)
        } catch (error) {
          console.error("No auth!", error)
        }
      }
      throw error
    }
  )

  return instance
}

function genAxiosInstances() {
  const schema = {}
  
  Object.keys(config).forEach((urlType) => {
    const { pathname } = new URL(config[urlType])
    const devPath = location.origin + pathname

    schema[urlType] = createAxios({
      url: IS_DEV ? devPath : config[urlType],
    })
  })

  return schema
}

const axiosCollection = genAxiosInstances()

export default axiosCollection
