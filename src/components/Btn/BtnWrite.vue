<template>
  <div class="btn-write">
    <div class="btn-write__name-block">
      <img class="btn-write__icon" src="@/icons/icon-mail.svg" alt="" />
      <div class="btn-write__text">написать</div>
    </div>

    <PriceBlock :price="50" class="btn-write__price" />
  </div>
</template>

<script>
  import PriceBlock from "@/components/PriceBlock.vue"

  export default {
    name: "BtnWrite",

    components: {
      PriceBlock,
    },
  }
</script>

<style lang="scss">
  .btn-write {
    display: flex;
    padding: 3px 10px;
    border: 5px solid #335f68;
    background-color: #fbffd8;
    border-radius: 10px;
    align-items: center;
    width: 195px;
    height: 40px;
    justify-content: space-between;

    &__name-block{
      display: flex;
      align-items: center;
    }

    &__text {
      font-size: 14px;
      color: #6d4444;
    }

    &__price {
      color: #6d4444;
    }

    &__icon {
      width: 20px;
      height: 23px;
      margin-right: 10px;
    }
  }
</style>
