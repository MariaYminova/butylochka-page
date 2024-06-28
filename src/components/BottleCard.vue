<template>
  <div class="bottle-card">
    <div class="bottle-card__block-img">
      <img :src="card.src" class="bottle-card__img-bottle" />
    </div>

    <div class="bottle-card__block-price">
      <PriceBlock class="bottle-card__price" :price="card.price" />
    </div>
  </div>
</template>

<script>
  import PriceBlock from "@/components/PriceBlock.vue"

  export default {
    name: "BottleCard",

    components: {
      PriceBlock,
    },

    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  .bottle-card {
    height: 100%;
    width: 85%;

    &__block-img {
      border: 2px solid #6d4444;
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      width: 100%;
      position: relative;
      background: url("@/icons/icon-reward-card-bg.svg") no-repeat center center;
      background-size: cover;
      padding: 10px;
      display: flex;
      justify-content: center;
    }

    &__block-price {
      border: 2px solid #6d4444;
      border-radius: 0 0 10px 10px;
      height: 30px;
      width: 100%;
      background-color: #6d444444;
      display: flex;
      justify-content: center;
    }

    &__price {
      font-size: 18px;
    }

    &__bg {
      height: 100%;
      width: 100%;
    }
  }
</style>
