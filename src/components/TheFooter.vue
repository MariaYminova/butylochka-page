<template>
  <header class="the-footer">
    <RouterLink to="/account-page" class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-acc.svg" />
    </RouterLink>

    <div class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-awards.svg" />
    </div>

    <div class="the-footer__nav-btn">
      <img class="the-footer__icon" src="@/icons/icon-shop.svg" />
    </div>
  </header>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss">
.the-footer {
  display: flex;
  width: 100%;
  justify-content: space-around;
  z-index: 2;

  &__icon {
    width: 70px;
    height: 70px;
  }
}
</style>
