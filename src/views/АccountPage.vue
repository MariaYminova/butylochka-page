<template>
  <div class="account-page">
    <BtnBack />
    <div class="account-page__wrap">
      <img src="@/icons/icon-clothespin.svg" class="account-page__icon" />
      <div class="account-page__bg">
        <div class="account-page__bg-white">
          <img class="account-page__leaf" src="@/icons/icon-leaf.svg" />
          <LogoSettings />

          <div class="account-page__acc-info">
            <div>
              <img class="account-page__avatar" src="@/img/img-avatar.png" />
              <AccountMoney />
            </div>
            <AccountData />
          </div>

          <HeadingFeed style="margin-bottom: 10px">
            <p class="heading-feed__text">Достижения</p></HeadingFeed
          >

          <RewardDay />
          <div class="account-page__card-grid">
            <RewardCard
              v-for="card in rewardStore.rewardCard"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSettings from "@/components/LogoSettings.vue";
import AccountMoney from "@/components/AccountMoney.vue";
import AccountData from "@/components/AccountData.vue";
import HeadingFeed from "@/components/HeadingFeed.vue";
import RewardDay from "@/components/RewardDay.vue";
import RewardCard from "@/components/RewardCard.vue";
import BtnBack from "@/components/BtnBack.vue";

import { useRewardStore } from "@/stores/rewardStore.js";

export default {
  name: "AccountPage",

  components: {
    LogoSettings,
    AccountMoney,
    AccountData,
    HeadingFeed,
    RewardDay,
    RewardCard,
    BtnBack,
  },

  setup() {
    const rewardStore = useRewardStore();

    return {
      rewardStore,
    };
  },
};
</script>

<style lang="scss">
.account-page {
  background-color: #000000ab;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

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
  }

  &__leaf {
    position: absolute;
    right: 15px;
    width: 188px;
    height: 68px;
    top: 9px;
  }

  &__icon {
    height: 98px;
    width: 100px;
    background-size: cover;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  &__avatar {
    height: 71px;
    width: 71px;
    margin-bottom: 10px;
  }

  &__acc-info {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  &__card-grid {
    display: grid;
    justify-items: center;
    margin-top: 20px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
}
</style>
