import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import axiosCollection from "@/api/axios"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.config.globalProperties.$axios = axiosCollection

app.use(createPinia())
app.use(router)

app.mount("#app")
