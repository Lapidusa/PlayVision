<template>
  <div>
    <video
        ref="videoPlayer"
        class="video-js"
        controls
        preload="auto"
        width="860"
        loop
    >
      <source :src="videoSrc" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const { videoSrc } = defineProps({
  videoSrc: {
    type: String,
    required: true
  }
});

const videoPlayer = ref(null);
let player = null;

defineExpose({
  playVideo: () => {
    if (player) {
      player.play();
    }
  }
});

onMounted(() => {
  player = videojs(videoPlayer.value);
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});
</script>

<style lang="scss">
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  content: url("../../../public/img/player.png");
  transition: 600ms all linear;
}
.video-js .vjs-big-play-button{
  background: none;
  border: none;
}
.video-js:hover .vjs-big-play-button ,
.video-js .vjs-big-play-button:focus{
  background: none;
  scale: 1.3;
}
.video-js .vjs-paused{
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
}
@media screen and (max-width: 1550px) {
  .video-js{
    width: 100%;
    aspect-ratio: 2.97 / 1;
    height: auto;
  }
}
.video-js .vjs-control-bar{
  background: rgba(0, 46, 34, 0.5);


}
.video-js .vjs-paused{
  background: linear-gradient(0deg, rgba(0, 46, 34, 0.5) 0%, rgba(0, 46, 34, 0) 100%);
}
.vjs-remaining-time span{
  font-size: 12px;
}
</style>