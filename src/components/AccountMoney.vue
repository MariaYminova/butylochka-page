<template>
  <div class="account-money">
    <img class="account-money__coin" src="@/icons/coins/icon-coin.svg" />
    <p class="account-money__score">2500</p>
  </div>
</template>

<script>
  export default {
    name: "AccountMoney",
  }
</script>

<style lang="scss">
  .account-money {
    background-color: rgba(109, 68, 68, 0.4196078431);
    padding: 0 10px 0 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 100px;
    height: 25px;
    position: relative;

    &__coin {
      height: 40px;
      width: 40px;
      position: absolute;
      left: -4px;
    }

    &__score {
      font-family: "SuperWebcomicBros";
      font-size: 18px;
    }
  }
</style>
