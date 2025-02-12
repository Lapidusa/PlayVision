<template>
<div class="create">
  <div class="create__text hidden-left">
    <div class="create__title">{{ $t('Create_Profile.title')}}</div>
    <div class="create__list">
      <div v-for="index in 3" :key="index" class="create__item">
        <p class="create__text">{{ $t(`Create_Profile.list.${index}.text`) }}</p>
      </div>
    </div>
    <div class="create__button border"><button @click="toggleModal" class="header__nav-button" type="button">
      {{ $t('Menu.Try_it_for_free') }}
    </button>
    </div>
    <div class="create__"></div>
  </div>
  <div class="create__slider hidden-right">
    <PlayersSlider></PlayersSlider>
  </div>
</div>
</template>

<script setup>
import PlayersSlider from "@/components/Main/PlayersSlider.vue";
</script>

<style scoped lang="scss" >
@use '../../../public/content/styles/_mixins' as *;
.swiper {
  @apply flex flex-col-reverse gap-2 overflow-hidden;
}
.swiper-pagination {
  width: 100%;
  text-align: end;
  z-index: 10;
  pointer-events: none;
  position: relative !important;
  & .swiper-pagination-bullet-active{
    @apply bg-green;
  }
  & .swiper-pagination-bullet{
    @apply bg-green-dark mx-0.5;

    width: 10px;
    height: 10px;
    pointer-events: auto;
  }
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 2.5px;
}
.create{
  @apply flex gap-2 justify-between text-white overflow-hidden;
  width: 100%;
  @media screen  and (max-width: 650px) {
@apply flex-col;
  }
  &__title{
    @include text-48-newZelek;
    @apply text-green;
  }
  &__list{
    @apply flex flex-col gap-2;
  }
  &__slider{
    flex-grow: 1;
    overflow: hidden;
    width: 100%;
  }
  &__item{
    @include text-20-white-montserrat;
  }
  &__text{
    @apply font-light flex flex-col gap-5 items-baseline w-full;
    flex-grow: 1;
  }
  &__button{
    @include btn-green-border-with-animation;

    padding: 12px 23px;
  }
}
.create__slider {

}
</style>