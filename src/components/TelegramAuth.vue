<template>
  <div>
    <pre>{{ initData }}</pre>
  </div>
</template>

<script>
  import { axios } from "@/axios"

  export default {
    data() {
      return {
        initData: "",
      }
    },
    mounted() {
      this.loadTelegramWebAppScript()
    },
    methods: {
      loadTelegramWebAppScript() {
        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-web-app.js"
        script.async = true
        script.onload = this.initializeTWA
        document.head.appendChild(script)
      },
      initializeTWA() {
        if (window.Telegram && window.Telegram.WebApp) {
          const twa = window.Telegram.WebApp
          twa.ready()

          const initData = twa.initData || twa.initDataUnsafe
          this.initData = JSON.stringify({ initData }, null, 2)

          this.authenticateWithTelegram(initData)
        } else {
          console.error("Telegram Web App SDK is not available.")
        }
      },
      async authenticateWithTelegram(initData) {
        try {
          const response = await axios.post("/auth/telegram", { initData })
          localStorage.setItem("token", response.data.accessToken)
          this.$router.push("/secure")
        } catch (error) {
          console.error("Authentication failed:", error)
        }
      },
    },
  }
</script>

<style scoped>
  pre {
    white-space: pre-wrap;
  }
</style>
