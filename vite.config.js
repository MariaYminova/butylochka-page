import { fileURLToPath, URL } from "node:url"
import config from "./src/api/config"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const isDev = process.env.NODE_ENV === "development"

const proxySchema = () => {
  const schema = {}

  Object.keys(config).forEach((urlType) => {
    const { origin } = new URL(config[urlType])

    const key = "/" + urlType

    const value = {
      target: origin,
      secure: false,
      changeOrigin: true,
      cookieDomainRewrite: "localhost",
      headers: {
        origin,
      },
    }

    schema[key] = value
  })

  return schema
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/butylochka-page/",

  define: {
    IS_DEV: isDev,
  },

  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    proxy: {
      ...proxySchema(),
    },
  },
})
