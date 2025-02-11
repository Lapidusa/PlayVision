<template>
<footer class="footer">
  <div class="footer__container container">
    <div class="footer__nav">
      <div class="footer__nav-logo">
        <img src="../../public/content/icons/logo.svg">
      </div>
      <ul class="footer__nav-list">
        <li class="footer__nav-item">
          <a class="footer__nav-link" href="#News">{{ $t('Menu.News') }}</a>
        </li>
        <li class="footer__nav-item">
          <a class="footer__nav-link" href="#Price">{{ $t('Menu.Price') }}</a>
        </li>
        <li class="footer__nav-item">
          <a class="footer__nav-link" href="#Contacts">{{ $t('Menu.Contacts') }}</a>
        </li>
        <li class="footer__nav-item">
          <a class="footer__nav-link" href="#System_requirements">{{ $t('Menu.System_requirements') }}</a>
        </li>
      </ul>
    </div>
    <div class="footer__contactUs">
      <p class="footer__contactUs-text">{{$t('Menu.Contact_us')}}</p>
      <a href="https://mail.google.com/" class="footer__contactUs-link">
        playvisionai@mail.ru
      </a>
      <div class="footer__contactUs-icons">
        <a href="https://t.me/romver_o" class="footer__contactUs-telegram"></a>
        <a href="https://vk.com/r.zverev2000" class="footer__contactUs-vk"></a>
        <a href="https://www.youtube.com/" class="footer__contactUs-youtube"></a>
      </div>
    </div>
  </div>
</footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '../../public/content/styles/_mixins' as *;
  .footer{
    @apply w-full py-12 bg-blue-dark;

    &__container{
      @apply flex justify-between
    }

    &__nav{
      @apply flex;
      gap: 50px;
      @media (max-width: 771px) {
        @apply flex-col;
        gap: 25px;

      }
      &-list{
        @apply flex flex-col gap-4;
      }

      &-link{
        @apply font-light hover:text-grey;
        @include text-20-white-montserrat;
      }
    }
    &__contactUs{
      @apply flex flex-col items-end gap-4 text-white;
      &-text{
        @include text-20-white-montserrat;
      }
      &-link{
        @include text-20-white-montserrat;
        @apply font-light hover:text-grey;
      }
      &-icons{
        @apply flex gap-4;
      }
      &-telegram{
        @include background-hover('../../public/content/icons/telegram.svg','../../public/content/icons/telegram-hover.svg');
      }
      &-vk{
        @include background-hover('../../public/content/icons/vk.svg','../../public/content/icons/vk-hover.svg');
      }
      &-youtube{
        @include background-hover('../../public/content/icons/youtube.svg','../../public/content/icons/youtube-hover.svg');
      }
      &-telegram, &-vk, &-youtube{
        width: 57px;
        height: 57px;
        @media (max-width: 1100px) {
          width: 30px;
          height: 30px;
        }
      }
    }

  }
</style>