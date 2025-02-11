<template>
  <div class="coach">
    <div class="coach__video">
      <div class="coach__video-wrapper">
        <VideoPlayer :videoSrc="src" />
      </div>
    </div>
    <div class="coach__text">
      <div class="coach__text-title">{{ $t('Coach.title') }}</div>
      <div class="coach__text-description">{{ $t('Coach.description') }}</div>
      <div class="coach__text-buttons">
        <button class="coach__text-button">{{ $t('Coach.Try_it_for_free') }}</button>
        <button class="coach__text-button">{{ $t('Coach.Watch_the_trailer') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoPlayer from './VideoPlayer.vue';
import src from '../../../public/video/videoCoach.mp4'
</script>

<style scoped lang="scss">
@use '../../../public/content/styles/_mixins' as *;
  .coach{
    @apply flex justify-between gap-12;
    @media screen and (max-width: 1550px) {
      flex-direction: column-reverse;
    }

    &__video{
      &-wrapper{
        padding: 15px;
        border-radius: 20px;
        background: radial-gradient(107.75% 66.46% at 50.06% 50.12%, #1A1E29 0%, #008F68 100%);
      }
    }
    &__text{
      @apply flex flex-col justify-between;

      &-title{
        @include text-48-newZelek;
        @apply text-green text-center;
      }
      &-description{
        @include text-20-white-montserrat;
      }
      &-buttons{
        @apply flex gap-6 justify-center
      }
      &-button:first-child{
        @include btn-green-border-with-animation
      }
      &-button:last-child{
        @include btn-green
      }
    }
  }
</style>