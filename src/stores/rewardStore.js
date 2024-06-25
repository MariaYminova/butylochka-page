import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRewardStore = defineStore("rewardStore", () => {
  const rewardCard = ref([
    {
      id: "1",
      name: "День 1",
      price: "+100",
      coin: 100,
      src: new URL("@/icons/coins/icon-coin-1.svg", import.meta.url).href,
    },
    {
      id: "2",
      name: "День 3",
      price: "+400",
      coin: 400,
      src: new URL("@/icons/coins/icon-coin-2.svg", import.meta.url).href,
    },
    {
      id: "3",
      name: "День 7",
      price: "+800",
      coin: 800,
      src: new URL("@/icons/coins/icon-coin-3.svg", import.meta.url).href,
    },
    {
      id: "4",
      name: "День 14",
      price: "+1500",
      coin: 1500,
      src: new URL("@/icons/coins/icon-coin-4.svg", import.meta.url).href,
    },
    {
      id: "5",
      name: "День 30",
      price: "+5000",
      coin: 5000,
      src: new URL("@/icons/coins/icon-coin-5.svg", import.meta.url).href,
    },
    {
      id: "6",
      name: "День 60",
      price: "+10000",
      coin: 10000,
      src: new URL("@/icons/coins/icon-coin-5.svg", import.meta.url).href,
    },
  ]);
  
  return {
    rewardCard,
  };
});
