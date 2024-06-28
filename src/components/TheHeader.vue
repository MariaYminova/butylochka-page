<template>
  <header class="the-header">
    <button
      @click="toggleSound"
      v-if="settingsStore.sound"
      class="the-header__btn-sound"
    >
      <img src="@/icons/icon-btn-sound-on.svg" />
    </button>
    <button @click="toggleSound" v-else class="the-header__btn-sound">
      <img src="@/icons/icon-btn-sound-off.svg" />
    </button>
    <RouterLink to="/">
      <img
        class="the-header__logo"
        src="@/img/img-logo-spin-bottle.png"
        alt="#"
    /></RouterLink>
    <div></div>
  </header>
</template>

<script>
  import { useSettingsStore } from "@/stores/settingsStore"

  export default {
    name: "TheHeader",

    setup() {
      const settingsStore = useSettingsStore()

      const toggleSound = () => {
        settingsStore.sound = !settingsStore.sound
      }

      return {
        settingsStore,
        toggleSound,
      }
    },
  }
</script>

<style lang="scss">
  .the-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__logo {
      width: 150px;
      height: 100px;
      position: relative;

      @media (min-width: 410px) {
        width: 179px;
        height: 120px;
      }
    }

    &__btn-sound {
      width: 50px;
      height: 50px;
      background-color: #ffffff00;
      border: none;
      position: absolute;
      left: 10px;
    }
  }
</style>
