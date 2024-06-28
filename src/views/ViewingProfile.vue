<template>
  <div class="viewing-profile">
    <RouterLink to="/account-page"> <BtnBack /></RouterLink>
    <div class="viewing-profile__wrap">
      <img src="@/icons/icon-clothespin.svg" class="viewing-profile__icon" />
      <div class="viewing-profile__bg">
        <div class="viewing-profile__bg-white">
          <img class="viewing-profile__leaf" src="@/icons/icon-leaf.svg" />

          <div class="viewing-profile__wrap-info">
            <HeadingFeed style="margin: 25px 0">
              <p class="heading-feed__text">Личный профиль</p></HeadingFeed
            >
            <img class="viewing-profile__avatar" src="@/img/img-avatar.png" />

            <div class="viewing-profile__acc-info">
              <div style="width: 100%">
                <AccountData />
                <BioAnotherProfile />
              </div>
            </div>
          </div>
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
  import BioAnotherProfile from "@/components/BioAnotherProfile.vue"

  export default {
    name: "ViewingProfile",

    components: {
      LogoSettings,
      AccountMoney,
      AccountData,
      HeadingFeed,
      BtnBack,
      BioAnotherProfile,
    },
  }
</script>

<style lang="scss">
  .viewing-profile {
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
      background-color: #000000ab;
    }

    &__wrap-info {
      display: flex;
      flex-direction: column;
      align-items: stretch;
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
      height: 120px;
      width: 120px;
      margin-bottom: 10px;
      margin: 0 auto;

      @media (min-width: 410px) {
        height: 150px;
        width: 150px;
      }
    }

    &__acc-info {
      margin: 10px 0;

      @media (min-width: 410px) {
        margin: 20px 0;
      }
    }
  }
</style>
