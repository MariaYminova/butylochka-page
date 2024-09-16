<template>
  <div class="btn-send-gift">
    <img class="btn-send-gift__icon" src="@/icons/icon-gift.svg" alt="" />
    <div class="btn-send-gift__text">отправить подарок</div>
  </div>
</template>

<script>
  export default {
    name: "BtnSendGift",
  }
</script>

<style lang="scss">
  .btn-send-gift {
    display: flex;
    padding: 3px 10px;
    border: 5px solid #335f68;
    background-color: #fbffd8;
    border-radius: 10px;
    align-items: center;
    width: 195px;
    height: 40px;
    justify-content: flex-start;

    &__text {
      font-size: 14px;
      color: #6d4444;
    }

    &__icon {
      width: 18px;
      height: 20px;
      margin-right: 10px;
    }
  }
</style>
