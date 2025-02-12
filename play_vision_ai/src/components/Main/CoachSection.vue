<template>
  <div class="coach">
    <div class="coach__video">
      <div class="coach__video-wrapper hidden-left">
        <VideoPlayer ref="videoPlayer" :videoSrc="src" />
      </div>
    </div>
    <div class="coach__text hidden-right">
      <div class="coach__text-title">{{ $t('Coach.title') }}</div>
      <div class="coach__text-description">{{ $t('Coach.description') }}</div>
      <div class="coach__text-buttons">
        <button class="coach__text-button">{{ $t('Coach.Try_it_for_free') }}</button>
        <button class="coach__text-button" @click="playVideo">{{ $t('Coach.Watch_the_trailer') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoPlayer from './VideoPlayer.vue';
import src from '../../../public/video/videoCoach.mp4'
import {ref} from "vue";
const videoPlayerRef = ref(null);

const playVideo = () => {
  if (videoPlayerRef.value) {
    videoPlayerRef.value.playVideo(); // Вызов метода из дочернего компонента
  }
};
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
      @apply flex flex-col justify-between gap-2;

      &-title{
        @include text-48-newZelek;
        @apply text-green text-center;
      }
      &-description{
        @include text-20-white-montserrat;
        text-indent: 30px;
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