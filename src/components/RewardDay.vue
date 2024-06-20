<template>
  <div class="reward-day">
    <p class="reward-day__name">Количество дней:</p>
    <p class="reward-day__indent"></p>
    <p class="reward-day__score">5</p>
  </div>
</template>

<script>
export default {
  name: "RewardDay",
};
</script>

<style lang="scss">
.reward-day {
  display: flex;
  justify-content: space-between;

  &__name {
    border-bottom: 1px solid #6d4444;
    width: 100%;
  }

  &__indent {
    border-bottom: 1px dashed #6d4444;
    width: 200px;
  }

  &__score {
    border-bottom: 1px solid #6d4444;
    width: 50px;
    font-size: 18px;
    text-align: center;
  }
}
</style>
