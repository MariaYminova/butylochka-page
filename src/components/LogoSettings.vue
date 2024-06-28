<template>
  <div class="logo-settings">
    <img
      class="logo-settings__logo"
      src="@/img/img-logo-spin-bottle.png"
      alt=""
    />
    <img
      class="logo-settings__bottle"
      src="@/icons/icon-bg-bottle.svg"
      alt=""
    />
  </div>
</template>

<script>
  export default {
    name: "LogoSettings",
  }
</script>

<style lang="scss">
  .logo-settings {
    display: flex;
    justify-content: space-between;

    &__logo {
      width: 130px;
      height: 90px;
    }

    &__bottle {
      width: 110px;
      height: 95px;
    }
  }
</style>
