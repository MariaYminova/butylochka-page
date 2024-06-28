<template>
  <div class="swiper-container">
    <div class="custom-pagination"></div>
    <swiper :pagination="pagination" :modules="modules" class="mySwiperShop">
      <swiper-slide class="swiper-slide">
        <div class="slide-shop-card">
          <BottleCard
            v-for="card in shopStore.bottleCard"
            :key="card.id"
            :card="card"
          />
        </div>
      </swiper-slide class="swiper-slide">
      <swiper-slide class="swiper-slide"><DevelopmentSlide /></swiper-slide>
      <swiper-slide class="swiper-slide"><DevelopmentSlide /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import DevelopmentSlide from "@/components/DevelopmentSlide.vue"
  import BottleCard from "@/components/BottleCard.vue"

  import { Swiper, SwiperSlide } from "swiper/vue"
  import "swiper/css"
  import "swiper/css/pagination"
  import { Pagination } from "swiper/modules"

  import { useShopStore } from "@/stores/shopStore.js"

  export default {
    components: {
      Swiper,
      SwiperSlide,
      DevelopmentSlide,
      BottleCard,
    },
    setup() {
      const bulletLabels = ["Бутылки", "Рамки", "Подарки"]
      const shopStore = useShopStore()

      return {
        pagination: {
          el: ".custom-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet">${bulletLabels[index]}</span>`
          },
        },

        shopStore,

        modules: [Pagination],
      }
    },
  }
</script>

<style lang="scss">
  .slide-shop-card {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }

  .swiper-slide {
    margin-top: 20px;
    padding: 0 2px;
  }

  .slide-reward-card {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  .swiper-container {
    margin: 10px 0;

    @media (min-width: 410px) {
      margin: 20px 0;
    }
  }

  .mySwiperShop {
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
