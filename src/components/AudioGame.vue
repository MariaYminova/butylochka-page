<template>
  <audio v-if="audioPlay" ref="audio" autoplay>
    <source src="@/sound/sound-bg.mp3" type="audio/mpeg" />
  </audio>
</template>

<script>
import { computed } from "vue";
import { useSettingsStore } from "@/stores/settingsStore";

export default {
  name: "AudioGame",

  setup() {
    const settingsStore = useSettingsStore();
    const audioPlay = computed(() => settingsStore.sound);
    return { audioPlay };
  },

  methods: {
    playAudio() {
      const audio = this.$refs.audio;
      if (audio) {
        audio.play().catch((error) => {
          console.log("Автовоспроизведение заблокировано браузером", error);
        });
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.playAudio, { once: true });
  },

  beforeDestroy() {
    document.removeEventListener("click", this.playAudio);
  },
};
</script>

<style lang="scss">
.audio-game {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  cursor: pointer;
}
</style>
