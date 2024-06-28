<template>
  <div id="black-overlay" class="black-overlay"></div>
  <div class="container">
    <!-- <AudioGame /> -->
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader.vue"
  import TheFooter from "@/components/TheFooter.vue"
  import AudioGame from "@/components/AudioGame.vue"

  export default {
    components: {
      TheHeader,
      TheFooter,
      AudioGame,
    },
    data() {
      return {
        placeholder:
          "query_id=AAFrufpFAAAAAGu5-kXHuqfN&user=%7B%22id%22%3A1174059371%2C%22first_name%22%3A%22Maria_Yminova%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22maria_yminova%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719399188&hash=8a5d699964266954d7458f1b5784e83231efaadc8425293dc26e71b5bb065c30",
      }
    },
    mounted() {
      this.showOverlayOnSpecificPages()
    },
    watch: {
      $route() {
        this.showOverlayOnSpecificPages()
      },
    },
    methods: {
      checkAuth() {
        if (!localStorage.refreshToken) {
          this.twaAuth()
        }
      },
      async twaAuth() {
        const twa = window.Telegram.WebApp
        const { initData } = twa

        const key =
          (IS_DEV || !initData) && this.placeholder
            ? this.placeholder
            : initData

        try {
          const { data } = await this.$axios.login.post("/twa", {
            initData: key,
          })

          console.log(data)

          localStorage.setItem("accessToken", data.accessToken)
          localStorage.setItem("refreshToken", data.refreshToken)
        } catch (e) {}
      },
      async fetchUserData() {
        try {
          console.dir(this.$axios.user.get)
          const response = await this.$axios.user.get("/me")
          console.log("User data:", response)
        } catch (error) {
          console.log(error)
        }
      },
      showOverlayOnSpecificPages() {
        const pagesWithOverlay = [
          "/account-page",
          "/reward-page",
          "/shop-page",
          "/viewing-profile",
        ]
        const currentPage = this.$route.path

        const overlay = document.getElementById("black-overlay")
        if (pagesWithOverlay.includes(currentPage)) {
          if (overlay) {
            overlay.style.display = "block"
          }
        } else {
          if (overlay) {
            overlay.style.display = "none"
          }
        }
      },
    },
  }
</script>

<style lang="scss">
  .black-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    display: none;
  }

  .container {
    max-width: 720px;
    padding: 10px 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: relative;
  }
</style>
