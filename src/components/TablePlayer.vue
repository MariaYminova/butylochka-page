<template>
  <div><img class="table-player__img" src="@/img/img-avatar.png" /></div>
</template>

<script>
  export default {
    name: "TablePlayer",
  }
</script>

<style lang="scss">
  .table-player {
    &__img {
      height: 55px;
      width: 55px;

      @media (min-width: 410px) {
        height: 65px;
        width: 65px;
      }
    }
  }
</style>
