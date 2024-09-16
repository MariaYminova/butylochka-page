<template>
  <div class="btn-miss">
    <img class="btn-miss__icon" src="@/icons/icon-miss.svg" alt="" />
    <div class="btn-miss__text">пропустить</div>
  </div>
</template>

<script>
  export default {
    name: "BtnMiss",
  }
</script>

<style lang="scss">
  .btn-miss {
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
