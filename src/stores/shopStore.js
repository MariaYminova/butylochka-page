import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useShopStore = defineStore("shopStore", () => {
  const bottleCard = ref([
    {
      id: "1",
      price: "50",
      coin: 50,
      src: new URL("@/img/bottle/img-bottle-beer.png", import.meta.url).href,
    },
    {
      id: "2",
      price: "100",
      coin: 100,
      src: new URL("@/img/bottle/img-bottle-cola.png", import.meta.url).href,
    },
    {
      id: "3",
      price: "200",
      coin: 200,
      src: new URL("@/img/bottle/img-bottle-wine.png", import.meta.url).href,
    },
    {
      id: "4",
      price: "500",
      coin: 500,
      src: new URL("@/img/bottle/img-bottle-vodka.png", import.meta.url).href,
    },
  ])

  return {
    bottleCard,
  }
})
