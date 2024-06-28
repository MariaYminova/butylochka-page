<template>
  <div class="bio-another-profile">
    <div class="bio-another-profile__heading">Биография</div>
    <div class="bio-another-profile__text-block">
      <img
        v-if="showOverlay"
        src="@/img/img-close-bio.png"
        class="bio-another-profile__close-block"
      />
      <BtnOpenBio
        v-if="showOverlay"
        class="bio-another-profile__btn-open-bio"
        @click="hideOverlay"
      />
      <p class="bio-another-profile__text">
        Значимость этих проблем настолько очевидна, что укрепление и развитие
        структуры требуют от нас анализа существенных финансовых и
        административных условий. Равным образом постоянный. Значимость этих проблем настолько очевидна, что укрепление и развитие
        структуры требуют от нас анализа существенных финансовых и
        административных условий. Равным образом постоянный.
      </p>
    </div>
  </div>
</template>

<script>
  import BtnOpenBio from "@/components/Btn/BtnOpenBio.vue"

  export default {
    name: "BioAnotherProfile",
    components: {
      BtnOpenBio,
    },
    data() {
      return {
        showOverlay: true,
      }
    },
    methods: {
      hideOverlay() {
        this.showOverlay = false
      },
    },
  }
</script>

<style lang="scss">
  .bio-another-profile {
    margin-top: 20px;

    &__heading {
      text-align: center;
      color: #5d6558;
    }

    &__text {
      border: 1px solid #6d4444;
      padding: 5px;
      width: 100%;
      height: 100%;
      background-color: #5d655800;
      overflow-x: scroll;
      resize: none;

      @media (min-width: 410px) {
        height: 100%;
        width: 100%;
      }
    }

    &__text-block {
      width: 100%;
      height: 100%;
      position: relative;
      margin: 10px 0;
    }

    &__close-block {
      position: absolute;
      top: -5px;
      left: -5px;
      width: 103%;
      height: 107%;
      display: block;
    }

    &__btn-open-bio {
      position: absolute;
      top: 35%;
      left: 20%;
    }
  }
</style>
