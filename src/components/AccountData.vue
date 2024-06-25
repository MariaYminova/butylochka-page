<template>
  <div class="account-data">
    <p class="account-data__text">text</p>
    <p class="account-data__text">text</p>
    <p class="account-data__text">text</p>
  </div>
</template>

<script>
  export default {
    name: "AccountData",
  }
</script>

<style lang="scss">
  .account-data {
    width: 70%;

    &__text {
      border-bottom: 1px solid #6d4444;
      margin-bottom: 5px;
      width: 100%;
      text-align: center;
    }
  }
</style>
