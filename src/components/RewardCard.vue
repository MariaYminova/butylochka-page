<template>
  <div class="reward-card">
    <div class="reward-card__block-img">
      <img :src="card.src" class="reward-card__icon-coin" />
      <PriceBlock style="margin-top: 10px" :price="card.price" />
    </div>

    <div class="reward-card__block-day">
      <p class="reward-card__day">{{ card.name }}</p>
    </div>
  </div>
</template>

<script>
  import PriceBlock from "@/components/PriceBlock.vue"
  export default {
    name: "RewardCard",

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
  .reward-card {
    &__block-img {
      background-image: url("@/icons/icon-reward-card-bg.svg");
      border: 2px solid #6d4444;
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      height: 91px;
      width: 108px;
    }

    &__block-day {
      border: 2px solid #6d4444;
      border-radius: 0 0 10px 10px;
      height: 22px;
      width: 108px;
      background-color: #6d444444;
    }

    &__day {
      font-size: 14px;
      font-family: "SquareDecoStroke";
      text-align: center;
    }

    &__block-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    &__icon-coin {
    }
  }
</style>
