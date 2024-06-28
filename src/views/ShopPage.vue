<template>
  <div class="shop-page">
    <RouterLink to="/"> <BtnBack /></RouterLink>
    <div class="shop-page__wrap">
      <img src="@/icons/icon-clothespin.svg" class="shop-page__icon" />
      <div class="shop-page__bg">
        <div class="shop-page__bg-white">
          <img class="shop-page__leaf" src="@/icons/icon-leaf.svg" />
          <LogoSettings />
          <AccountMoney class="shop-page__score" />

          <HeadingFeed style="margin-bottom: 10px">
            <p class="heading-feed__text">Магазин</p></HeadingFeed
          >
          <SwiperShop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LogoSettings from "@/components/LogoSettings.vue"
  import AccountMoney from "@/components/AccountMoney.vue"
  import AccountData from "@/components/AccountData.vue"
  import HeadingFeed from "@/components/HeadingFeed.vue"
  import BtnBack from "@/components/BtnBack.vue"
  import Bio from "@/components/Bio.vue"
  import SwiperShop from "@/components/SwiperShop.vue"

  export default {
    name: "ShopPage",

    components: {
      LogoSettings,
      AccountMoney,
      AccountData,
      HeadingFeed,
      BtnBack,
      Bio,
      SwiperShop,
    },
  }
</script>

<style lang="scss">
  .shop-page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    &__wrap {
      height: 78vh;
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
    }

    &__bg {
      background-image: url(@/img/img-bg-settings.webp);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 15px;
    }

    &__bg-white {
      background-color: #e6dac0;
      height: 100%;
      width: 100%;
      border-radius: 0 61px 0 0;
      padding: 20px 10px;
      overflow: scroll;
    }

    &__leaf {
      position: absolute;
      right: 15px;
      width: 188px;
      height: 68px;
      top: 9px;
    }

    &__icon {
      height: 68px;
      width: 70px;
      background-size: cover;
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;

      @media (min-width: 410px) {
        height: 95px;
        width: 100px;
        top: -60px;
      }
    }

    &__avatar {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
    }

    &__acc-info {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;

      @media (min-width: 410px) {
        margin: 20px 0;
      }
    }

    &__card-grid {
      display: grid;
      justify-items: center;
      margin-top: 20px;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 20px;
    }

    &__score {
      float: right;
      margin: 20px 0;
    }
  }
</style>
