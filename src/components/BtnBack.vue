<template>
  <div class="btn-back">
    <img class="btn-back__img" src="@/icons/icon-btn-back.svg" />
  </div>
</template>

<script>
  export default {
    name: "BtnBack",
  }
</script>

<style lang="scss">
  .btn-back {
    margin: 10px;

    &__img {
      height: 45px;
      width: 45px;

      @media (min-width: 410px) {
        height: 60px;
        width: 60px;
      }
    }
  }
</style>
