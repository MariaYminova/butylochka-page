<template>
  <header class="the-footer">
    <RouterLink to="/account-page" class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-acc.svg" />
    </RouterLink>

    <RouterLink to="/reward-page" class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-awards.svg" />
    </RouterLink>

    <RouterLink to="/shop-page" class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-shop.svg" />
    </RouterLink>
  </header>
</template>

<script>
  export default {
    name: "TheFooter",
  }
</script>

<style lang="scss">
  .the-footer {
    display: flex;
    width: 100%;
    justify-content: space-around;
    z-index: 2;

    &__icon {
      width: 45px;
      height: 45px;

      @media (min-width: 410px) {
        height: 70px;
        width: 70px;
      }
    }
  }
</style>
