<template>
  <div class="advantages ">
    <div class="advantages__title hidden-right">{{ $t('Advantages.title') }}</div>
    <div class="advantages__cards hidden-left">
      <div v-for="index in 3" :key="index" class="advantages__card-container">
        <div class="advantages__card-wrapper">
          <div class="advantages__card-rectangle"></div>
          <div class="advantages__card">
            <p class="advantages__card-title">{{ $t(`Advantages.cards.${index}.title`) }}</p>
            <p class="advantages__card-description">{{ $t(`Advantages.cards.${index}.description`) }}</p>
          </div>
        </div>
        <img class="advantages__card-img" :src="images[index - 1]" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  require('../../../public/img/analysis1.png'),
  require('../../../public/img/analysis2.png'),
  require('../../../public/img/analysis3.png')
];
</script>

<style scoped lang="scss">
@use '../../../public/content/styles/_mixins' as *;

.advantages {
  @apply flex flex-col gap-24;
  &__title {
    @apply text-green text-center;
    @include text-48-newZelek;
  }
  &__cards {
    @apply flex gap-5 relative ;
    margin-bottom: 170px;
    //@media (max-width: 1560px) {
    //  @apply grid-cols-1;
    //}
  }
  &__card-container {
    @apply relative flex flex-col items-center;
  }
  &__card-wrapper {
    position: relative;
    overflow: hidden;
  }
  &__card {
    @apply flex flex-col gap-6 items-center relative z-10;
    padding: 40px 25px;
    border-radius: 30px;
    height: 422px;
    background: rgba(30, 48, 58, 0.02);
    backdrop-filter: blur(200px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &-title {
      @apply text-white;
      @include text-36-newZelek;
    }

    &-description {
      @apply text-center;
      @include text-20-white-montserrat;
    }
  }
  &__card-rectangle {
    width: 280px;
    height: 120px;
    @apply bg-green-dark absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    filter: blur(100px);
  }
  &__card-img {
    position: absolute;
    top: 300px;
    z-index: 100;
    @media (max-width: 1560px) {
      top: 60%;
    }
  }
}
</style>