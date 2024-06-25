<template>
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

    data: () => ({
      placeholder:
        "query_id=AAFrufpFAAAAAGu5-kV1B6rX&user=%7B%22id%22%3A1174059371%2C%22first_name%22%3A%22Maria_Yminova%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22maria_yminova%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719334980&hash=71752c4b6cddf9eca61766fdc2e206e6ba4d7d2feae5eebcbd1f4de9bd0b073f",
    }),

    created() {
      this.checkAuth()
      this.fetchUserData()
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
    },
  }
</script>

<style lang="scss">
  .container {
    max-width: 720px;
    max-height: 1000px;
    background-image: url(/src/img/img-bg-main.jpg);
    padding: 20px 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: relative;
  }
</style>
