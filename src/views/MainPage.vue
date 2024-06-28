<template>
  <main class="main-page">
    <RouterLink to="/table-game"
      ><img
        class="main-page__logo"
        src="@/icons/icon-logo-hart-game.svg"
        alt=""
    /></RouterLink>
  </main>
</template>

<script>
  export default {
    name: "MainPage",
  }
</script>

<style lang="scss">
  .main-page {
    display: flex;
    justify-content: center;

    &__logo {
      width: 340px;
      height: 190px;
      margin-top: -40px;
    }
  }
</style>
