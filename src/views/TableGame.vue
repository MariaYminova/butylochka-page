<template>
  <button @click="showLips">TEST ANimation</button>

  <div class="table-game">
    <div class="table-game__circle">
      <div v-if="showLipsAnimation" class="lips-container">
        <img
          v-for="kiss in kisses"
          :key="kiss.id"
          :src="kiss.src"
          :style="kiss.style"
          alt="Губы"
          class="lips-animation"
        />
      </div>
      <TablePlayer
        v-for="index in 10"
        :key="index"
        :style="getPlayerStyle(index - 1)"
        :class="{ 'selected-player': isSelectedPlayer(index - 1) }"
      />
      <img
        v-if="showBottle"
        class="table-game__bottle"
        src="@/img/bottle/img-bottle-water.png"
        @click="spinBottle"
        :style="bottleStyle"
      />
    </div>
  </div>
</template>

<script>
  import { ref, computed } from "vue"
  import TablePlayer from "@/components/TablePlayer.vue"

  export default {
    name: "TableGame",
    components: { TablePlayer },
    setup() {
      const isSpinning = ref(false)
      const bottleRotation = ref(0)
      const selectedPlayers = ref([])
      const showBottle = ref(true)
      const showLipsAnimation = ref(false)
      const mainPlayerIndex = 5
      const forbiddenPlayerIndex = 5

      const bottleStyle = computed(() => ({
        transform: `translate(-50%, -50%) rotate(${bottleRotation.value}deg)`,
        transition: isSpinning.value ? "transform 3s ease-out" : "none",
      }))

      const getPlayerStyle = (index) => {
        const angle = (index / 10) * 360
        const radius = 150
        const x = radius * Math.cos((angle * Math.PI) / 180)
        const y = radius * Math.sin((angle * Math.PI) / 180)

        if (selectedPlayers.value.includes(index)) {
          const positionIndex = selectedPlayers.value.indexOf(index)
          return {
            position: "absolute",
            top: "50%",
            left: `calc(50% + ${positionIndex === 0 ? -50 : 50}px)`,
            transform: "translate(-50%, -50%)",
            transition:
              "transform 1s ease-out, top 1s ease-out, left 1s ease-out",
          }
        }

        return {
          position: "absolute",
          top: `calc(50% + ${y}px)`,
          left: `calc(50% + ${x}px)`,
          transform: "translate(-50%, -50%)",
          transition: "transform 1s ease-out",
        }
      }

      const isSelectedPlayer = (index) => selectedPlayers.value.includes(index)

      const spinBottle = () => {
        showBottle.value = true
        const randomSpins = 360 * 4
        let randomAngle
        let neckPlayer

        do {
          randomAngle = Math.floor(Math.random() * 360)
          bottleRotation.value += randomSpins + randomAngle
          const selectedAngle = ((bottleRotation.value % 360) + 360) % 360
          neckPlayer = Math.floor((selectedAngle + 280) / 36) % 10
        } while (neckPlayer === forbiddenPlayerIndex)

        isSpinning.value = true

        setTimeout(() => {
          isSpinning.value = false
          selectedPlayers.value = [mainPlayerIndex, neckPlayer]
          showBottle.value = false
        }, 5000)
      }

      const showLips = () => {
        showLipsAnimation.value = true
        setTimeout(() => {
          showLipsAnimation.value = false
        }, 5000)
      }

      const kisses = [
        {
          id: 1,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "-10%",
            left: "35%",
            width: "150px",
            height: "150px",
            "--rotate-angle": "320deg",
          },
        },
        {
          id: 2,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "30%",
            left: "80%",
            width: "50px",
            height: "50px",
            "--rotate-angle": "340deg",
          },
        },
        {
          id: 3,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "50%",
            left: "70%",
            width: "110px",
            height: "110px",
            "--rotate-angle": "300deg",
          },
        },
        {
          id: 4,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "80%",
            left: "45%",
            width: "45px",
            height: "45px",
            "--rotate-angle": "340deg",
          },
        },
        {
          id: 5,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "60%",
            left: "20%",
            width: "80px",
            height: "80px",
            "--rotate-angle": "10deg",
          },
        },
        {
          id: 6,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "30%",
            left: "10%",
            width: "60px",
            height: "60px",
            "--rotate-angle": "30deg",
          },
        },
        {
          id: 7,
          src: "src/icons/icon-kiss.svg",
          style: {
            top: "40%",
            left: "40%",
            width: "75px",
            height: "75px",
            "--rotate-angle": "0deg",
          },
        },
      ]

      return {
        isSpinning,
        bottleRotation,
        selectedPlayers,
        bottleStyle,
        showBottle,
        getPlayerStyle,
        isSelectedPlayer,
        spinBottle,
        showLips,
        showLipsAnimation,
        kisses,
      }
    },
  }
</script>

<style lang="scss">
  .table-game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

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

  .lips-container {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .lips-animation {
    position: absolute;
    z-index: 2;
    animation: fadeInOutScale 5s ease-in-out;
  }

  @keyframes fadeInOutScale {
    0% {
      opacity: 0;
      transform: scale(0) rotate(var(--rotate-angle));
    }
    50% {
      opacity: 1;
      transform: scale(1.5) rotate(var(--rotate-angle)); /* Увеличение до 150% */
    }
    100% {
      opacity: 0;
      transform: scale(0) rotate(var(--rotate-angle));
    }
  }
</style>
