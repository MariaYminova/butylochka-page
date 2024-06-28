<template>
  <div class="swiper-container">
    <div class="custom-pagination"></div>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide">
        <div class="slide-kiss-card">
          <CardKiss v-for="index in 6" :key="index" />
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide"><DevelopmentSlide /></swiper-slide>

      <swiper-slide class="swiper-slide"><DevelopmentSlide /></swiper-slide>

      <swiper-slide class="swiper-slide">
        <RewardDay style="margin-bottom: 20px" />
        <div class="slide-reward-card">
          <RewardCard
            v-for="card in rewardStore.rewardCard"
            :key="card.id"
            :card="card"
          /></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import RewardCard from "@/components/RewardCard.vue"
  import RewardDay from "@/components/RewardDay.vue"
  import DevelopmentSlide from "@/components/DevelopmentSlide.vue"
  import CardKiss from "@/components/CardKiss.vue"

  import { useRewardStore } from "@/stores/rewardStore.js"

  import { Swiper, SwiperSlide } from "swiper/vue"
  import "swiper/css"
  import "swiper/css/pagination"
  import { Pagination } from "swiper/modules"

  export default {
    components: {
      Swiper,
      SwiperSlide,
      RewardCard,
      DevelopmentSlide,
      RewardDay,
      CardKiss,
    },
    setup() {
      const rewardStore = useRewardStore()

      const bulletLabels = ["Поцелуй", "Начисления", "Траты", "Достижения"]

      return {
        pagination: {
          el: ".custom-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            // Используем кастомные надписи из массива
            return `<span class="${className} custom-bullet">${bulletLabels[index]}</span>`
          },
        },

        rewardStore,

        modules: [Pagination],
      }
    },
  }
</script>

<style lang="scss">
  .swiper-slide {
    margin-top: 20px;
    padding: 0 2px;
  }

  .slide-kiss-card {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media (min-width: 520px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .slide-reward-card {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media (min-width: 520px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .swiper-container {
    margin: 10px 0;

    @media (min-width: 410px) {
      margin: 20px 0;
    }
  }

  .mySwiper {
    overflow-x: hidden;
  }

  .custom-pagination {
    display: flex;
    justify-content: center;
    margin: 10px 0;

    @media (min-width: 410px) {
      margin: 10px 0 0 0;
    }

    .custom-bullet {
      background-color: #ccbba6;
      padding: 10px 15px;
      width: 82px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      opacity: 1;

      @media (min-width: 410px) {
        width: 100%;
      }
    }

    .swiper-pagination-bullet-active.custom-bullet {
      background: #6d4444;
      color: #e6dac0;
      opacity: 1;
    }
  }
</style>
