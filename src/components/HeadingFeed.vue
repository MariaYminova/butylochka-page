<template>
  <div class="heading-feed">
    <div class="heading-feed__bg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeadingFeed",
  }
</script>

<style lang="scss">
  .heading-feed {
    width: 100%;
    display: flex;

    &__bg {
      background-image: url("@/icons/icon-heading-feed.svg");
      width: 100%;
      height: 38px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 9px;
    }

    &__text {
      font-family: "SquareDecoStroke";
      font-size: 18px;
      color: #5d6558;
      text-align: center;
    }
  }
</style>
