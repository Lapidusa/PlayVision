<template>
  <div class="blurred-wrapper">
    <HeaderNavigation></HeaderNavigation>
    <div class="MainSection">
      <MainSection></MainSection>
    </div>
    <FooterNavigation></FooterNavigation>
  </div>
  <img class="figure figure_1" src="../public/content/icons/figures/1.svg" alt="">

      <img class="figure figure_2" src="../public/content/icons/figures/2.svg" alt="">
      <img class="figure figure_3" src="../public/content/icons/figures/3.svg" alt="">
      <img class="figure figure_4" src="../public/content/icons/figures/4.svg" alt="">
      <img class="figure figure_5" src="../public/content/icons/figures/5.svg" alt="">
</template>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import FooterNavigation from "@/components/FooterNavigation.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: 'App',
  components: {MainSection, FooterNavigation, HeaderNavigation },
  setup() {
    const { locale } = useI18n();
    const lang = ref(localStorage.getItem('lang') || '');

    onMounted(() => {
      const headerElement  = document.getElementsByClassName("header")[0];
      const mainSection = document.getElementsByClassName("MainSection")[0];
      if (headerElement) {
        const heightHeader = headerElement.offsetHeight;
        if (mainSection && window.innerWidth < 767) {
          mainSection.style.marginTop = `-${heightHeader}px`;
        }
      }
      const isRu = navigator.language;

      if (isRu === 'ru-RU' || isRu === 'ru') {
        lang.value = 'ru';
        localStorage.setItem('lang', 'ru');
        locale.value = 'ru';
      } else {
        lang.value = 'en';
        localStorage.setItem('lang', 'en');
        locale.value = 'en';
      }
      window.addEventListener('resize', () => {
          if (window.innerWidth < 767) {
            const heightHeader = headerElement.offsetHeight;
            mainSection.style.marginTop = `-${heightHeader}px`;
          } else {
            mainSection.style.marginTop = `0`;
          }
        });
    });

    return {
      lang
    };
  },
}
</script>

<style lang="scss">
#app{
  overflow-x: hidden;
  @apply bg-blue-middle;
  #app:before{
    background: rgba(0, 0, 0, 0.07);
  }
  .blurred-wrapper{
      backdrop-filter: blur(200px);
      position: relative;
    z-index: 1;
  }
}
.figure{
  position: absolute;
  z-index: 0;

  &_1{
    top: 1250px;
    left: 10%;
  }
  &_2{
    top: 1350px;
    right: 15%;
  }
  &_3{
    top: 2000px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &_4{
    top: 3400px;
    left: 16%;
  }
  &_5{
    top: 3100px;
    right: 12%;
  }
}
</style>
