<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img src="../../public/content/icons/logo.svg" alt="logo">
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a class="header__nav-link" href="#News">{{ $t('Menu.News') }}</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="#Price">{{ $t('Menu.Price') }}</a>
          </li>
          <li class="header__nav-item"><a class="header__nav-link" href="#Contacts">{{ $t('Menu.Contacts') }}</a></li>
          <li class="header__nav-item">
            <button @click="toggleModal" class="header__nav-button" type="button">
              {{ $t('Menu.Login') }}
            </button>
          </li>
          <li class="header__nav-item border"><button @click="toggleModal" class="header__nav-button" type="button">
            {{ $t('Menu.Try_it_for_free') }}
          </button>
          </li>
        </ul>
        <button @click="openMenu" class="header__hamburger">
          <img src="../../public/content/icons/menu.svg" alt="menu" />
        </button>
      </nav>
    </div>
  </header>

  <!--Modal LogReg-->
  <div id="modalLogReg" tabindex="-1" v-if="isModalOpen" class="">
    <div class="">
      <div class="">
        <button @click="toggleModal" class="">
          <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="">
          <h3 class="">Are you sure you want to delete this product?</h3>
          <button @click="confirmDelete" type="button" class="r">
            Yes, I'm sure
          </button>
          <button @click="toggleModal" type="button" class="">No, cancel</button>
        </div>
      </div>
    </div>
  </div>

  <div
    id="static-modal"
    data-modal-backdrop="static"

    aria-hidden="true"
    :class="{'hidden': !isModalOpen, 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50': isModalOpen}"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-96 z-50 relative">
      <h2 class="text-3xl font-semibold mb-4">Вход в аккаунт</h2>
      <p class="mb-4">Введите номер телефона, чтобы войти или зарегистрироваться</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isModalOpen = ref(false);

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
  };
</script>

<style scoped lang="scss">
@use '../../public/content/styles/_mixins' as *;
  .header{
    @apply bg-blue-middle-opacity-75 font-new_zelek
    rounded-full fixed top-3 z-50;
    left: 50%;
    transform: translateX(-50%);
    width: 98%;
    height: 75px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(100px);

    @media (max-width: 991px) {
      @apply rounded-none w-full top-0 pt-4 h-auto;
      padding-top: 52px;
      padding-bottom: 20px;
    }

    &__hamburger{
      @apply hidden;

      @media screen and (max-width: 1061px){
        @apply block;
      }
    }
    &__logo{
      flex-shrink: 0;
      margin: auto 0;
    }
    &__container {
      @apply flex justify-between m-auto h-full;
    }
    &__nav{
      @apply flex;

      &-list{
        @apply flex gap-2 my-auto;
        @media screen and (max-width: 1115px){
          @apply gap-0;
        }
        @media screen and (max-width: 1061px){
          @apply hidden;
        }
      }
      &-item{
        @apply font-bold flex items-center justify-center;
        @include text-20-white-montserrat-hover;
        padding: 9px 15px;
        font-size: 20px;
        line-height: 20px;

        &:last-child{
          @include btn-green-border-with-animation;
          & {
            padding: 12px 23px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>