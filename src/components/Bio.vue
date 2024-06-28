<template>
  <div class="bio">
    <div class="bio__heading">Биография</div>
    <textarea class="bio__input" name="bio" rows="5" maxlength="100"></textarea>
  </div>
</template>

<script>
  export default {
    name: "Bio",
  }
</script>

<style lang="scss">
  .bio {
    margin-top: 10px;

    &__heading {
      text-align: center;
      color: #5d6558;
    }

    &__input {
      border: 1px solid #6d4444;
      padding: 5px;
      width: 100%;
      height: 65px;
      background-color: #5d655800;
      overflow-x: scroll;
      resize: none;

      @media (min-width: 410px) {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
