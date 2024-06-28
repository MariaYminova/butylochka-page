<template>
  <RouterLink to="/viewing-profile">
    <div class="card-kiss">
      <div class="card-kiss__block-img">
        <img class="card-kiss__img" src="@/img/img-user.jpg" />
      </div>

      <div class="card-kiss__block-day">
        <p class="card-kiss__day">Поцелуй</p>
      </div>
    </div></RouterLink
  >
</template>

<script>
  export default {
    name: "CardKiss",

    components: {},
  }
</script>

<style lang="scss">
  .card-kiss {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 115px;
    width: 100px;

    &__block-img {
      overflow: hidden;
      border: 2px solid #6d4444;
      border-bottom: none;
      border-radius: 50px 50px 0 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &__block-day {
      border: 2px solid #6d4444;
      border-radius: 0 0 10px 10px;
      height: 30px;
      width: 100%;
      display: flex;
      background-color: rgba(109, 68, 68, 0.2666666667);
      justify-content: center;
      align-items: center;
    }

    &__day {
      font-size: 14px;
      font-family: "SquareDecoStroke";
      text-align: center;
    }
  }
</style>
