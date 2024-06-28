<template>
  <div class="btn-open-bio">
    <div class="btn-open-bio__text">показать</div>
    <PriceBlock :price="50" class="btn-open-bio__price" />
  </div>
</template>

<script>
  import PriceBlock from "@/components/PriceBlock.vue"

  export default {
    name: "BtnOpenBio",

    components: {
      PriceBlock,
    },
  }
</script>

<style lang="scss">
  .btn-open-bio {
    display: flex;
    padding: 3px 10px;
    border: 5px solid #335f68;
    background-color: #fbffd8;
    border-radius: 10px;
    align-items: center;
    width: 200px;
    justify-content: space-between;

    &__text {
      font-size: 14px;
      color: #6d4444;
    }

    &__price {
      color: #6d4444;
    }
  }
</style>
