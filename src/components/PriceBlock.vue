<template>
  <div class="price-block">
    <img class="price-block__coin" src="@/icons/coins/icon-coin.svg" />
    <p class="price-block__price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "PriceBlock",

  props: {
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.price-block {
  display: flex;
  align-items: center;

  &__coin {
    width: 25px;
    height: 25px;
  }

  &__price {
    font-size: 14px;
  }
}
</style>
