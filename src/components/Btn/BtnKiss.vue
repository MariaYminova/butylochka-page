<template>
  <div class="btn-kiss">
    <img class="btn-kiss__icon" src="@/icons/icon-kiss.svg" alt="" />
    <div class="btn-kiss__text">поцеловать</div>
  </div>
</template>

<script>
  export default {
    name: "BtnKiss",
  }
</script>

<style lang="scss">
  .btn-kiss {
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
      width: 21px;
      height: 23px;
      margin-right: 10px;
    }
  }
</style>
