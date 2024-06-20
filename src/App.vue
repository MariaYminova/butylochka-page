<template>
  <div class="container">
    <!-- <AudioGame /> -->
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import AudioGame from "@/components/AudioGame.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    AudioGame,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 720px;
  background-image: url(/src/img/img-bg-main.jpg);
  padding: 20px 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: relative;
}
</style>
