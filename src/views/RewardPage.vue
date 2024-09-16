<template>
  <div class="reward-page">
    <RouterLink to="/"> <BtnBack /></RouterLink>
    <div class="reward-page__wrap">
      <img src="@/icons/icon-clothespin.svg" class="reward-page__icon" />
      <div class="reward-page__bg">
        <div class="reward-page__bg-white">
          <img
            class="reward-page__leaf"
            src="@/icons/icon-leaf.svg"
          /><DevelopmentSlide />
          <BtnWrite />
          <BtnKiss />
          <BtnMiss />
          <BtnSendGift />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BtnBack from "@/components/BtnBack.vue"
  import DevelopmentSlide from "@/components/DevelopmentSlide.vue"
  import BtnWrite from "@/components/Btn/BtnWrite.vue"
  import BtnKiss from "@/components/Btn/BtnKiss.vue"
  import BtnMiss from "@/components/Btn/BtnMiss.vue"
  import BtnSendGift from "@/components/Btn/BtnSendGift.vue"

  export default {
    name: "RewardPage",

    components: {
      BtnBack,
      DevelopmentSlide,
      BtnWrite,
      BtnKiss,
      BtnMiss,
      BtnSendGift,
    },
  }
</script>

<style lang="scss">
  .reward-page {
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
      display: flex;
      flex-direction: column;
      justify-content: center;
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

    &__leaf {
      position: absolute;
      right: 15px;
      width: 188px;
      height: 68px;
      top: 9px;
    }
  }
</style>
