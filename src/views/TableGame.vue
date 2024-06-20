<template>
  <div class="table-game">
    <div class="table-game__circle">
      <TablePlayer
        v-for="index in 10"
        :key="index"
        :style="getPlayerStyle(index - 1)"
        :class="{ 'selected-player': isSelectedPlayer(index - 1) }"
      />
      <img
        v-if="showBottle"
        class="table-game__bottle"
        src="@/img/img-bottle-water.png"
        @click="spinBottle"
        :style="bottleStyle"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import TablePlayer from "@/components/TablePlayer.vue";

export default {
  name: "TableGame",
  components: { TablePlayer },
  setup() {
    const isSpinning = ref(false);
    const bottleRotation = ref(0);
    const selectedPlayers = ref([]);
    const showBottle = ref(true);
    const mainPlayerIndex = 5;
    const forbiddenPlayerIndex = 5;

    const bottleStyle = computed(() => ({
      transform: `translate(-50%, -50%) rotate(${bottleRotation.value}deg)`,
      transition: isSpinning.value ? "transform 3s ease-out" : "none",
    }));

    const getPlayerStyle = (index) => {
      const angle = (index / 10) * 360;
      const radius = 150;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);

      if (selectedPlayers.value.includes(index)) {
        const positionIndex = selectedPlayers.value.indexOf(index);
        return {
          position: "absolute",
          top: "50%",
          left: `calc(50% + ${positionIndex === 0 ? -50 : 50}px)`,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 1s ease-out, top 1s ease-out, left 1s ease-out",
        };
      }

      return {
        position: "absolute",
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
        transition: "transform 1s ease-out",
      };
    };

    const isSelectedPlayer = (index) => selectedPlayers.value.includes(index);

    const spinBottle = () => {
      showBottle.value = true;
      const randomSpins = 360 * 4;
      let randomAngle;
      let neckPlayer;

      do {
        randomAngle = Math.floor(Math.random() * 360);
        bottleRotation.value += randomSpins + randomAngle;
        const selectedAngle = ((bottleRotation.value % 360) + 360) % 360;
        neckPlayer = Math.floor((selectedAngle + 280) / 36) % 10;
      } while (neckPlayer === forbiddenPlayerIndex);

      isSpinning.value = true;

      setTimeout(() => {
        isSpinning.value = false;
        selectedPlayers.value = [mainPlayerIndex, neckPlayer];
        showBottle.value = false;
      }, 3000);
    };

    return {
      isSpinning,
      bottleRotation,
      selectedPlayers,
      bottleStyle,
      showBottle,
      getPlayerStyle,
      isSelectedPlayer,
      spinBottle,
    };
  },
};
</script>

<style lang="scss">
.table-game {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__circle {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
  &__bottle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    cursor: pointer;
  }
}
</style>
