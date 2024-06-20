import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingStore", () => {
  const sound = ref(true);

  return {
    sound,
  };
});
