<template>
<div class="tariff">
  <div class="tariff__title hidden-right">
    {{$t('Tariff_Plans.title')}}
  </div>
  <div class="tariff__toggle hidden-left">
    <button
        class="tariff__toggle-monthly"
        :class="{ active: isMonthly }"
        @click="togglePlan('monthly')"
    >
      {{ $t('Tariff_Plans.monthly') }}
    </button>
    <button
        class="tariff__toggle-annually"
        :class="{ active: !isMonthly }"
        @click="togglePlan('annually')"
    >
      {{ $t('Tariff_Plans.annually') }}
    </button>
  </div>
  <div class="tariff__cards">
      <TariffPlan
          color="white"
          :title="tariff.basic.title"
          :price="tariff.basic.price"
          :currency="tariff['r/m']"
          :features="tariff.basic.features"
          :isMonthly="isMonthly"
          class="tariff__card hidden-left"
      />
      <TariffPlan
          color="green"
          :title="tariff.standard.title"
          :price="tariff.standard.price"
          :currency="tariff['r/m']"
          :features="tariff.standard.features"
          :isMonthly="isMonthly"
          class="tariff__card hidden-left"
      />
      <TariffPlan
          color="red"
          :title="tariff.pro.title"
          :price="tariff.pro.price"
          :currency="tariff['r/m']"
          :features="tariff.pro.features"
          :isMonthly="isMonthly"
          class="tariff__card hidden-left"
      />
  </div>

</div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import TariffPlan from "@/components/Main/TariffCard.vue";
// import i18n from '../../main.js';
// import TariffCard from "@/components/Main/TariffCard.vue";
// const file = require('../../localization/ru.json')
const { locale, messages } = useI18n();
const isMonthly = ref(true);
const tariff = computed(() => {
  return locale.value === 'ru'
      ? messages.value.ru.Tariff_Plans
      : messages.value.en.Tariff_Plans
});
const togglePlan = (plan) => {
  isMonthly.value = plan === 'monthly';
};

onMounted(()=>{
})
</script>

<style scoped lang="scss">
  @use '../../../public/content/styles/_mixins' as *;
  .tariff{
    @apply flex flex-col items-center gap-12;
    &__toggle{
      border-radius: 999px;
      @include text-20-white-montserrat;
      @apply rounded-full bg-blue-light text-white;
      & button{
        padding: 15px 30px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        @apply rounded-full bg-blue-light;
        
        @media (max-width: 550px) {
          padding: 10px 20px;
        }
        &.active{
          @apply bg-green-dark text-white rounded-full;
        }
      }
    }
    &__title{
      @include text-48-newZelek;
      @apply text-green;
    }
    &__card{
      &s{
        @apply flex gap-12 w-full justify-between;
        @media (max-width: 1100px) {
          @apply flex-col;
        }
      }

    }
}
  .tariff__title{
    @include text-48-newZelek;
    @apply text-green;
  }
  .tariff__card:nth-child(2) {
    transition-delay: .1s;
  }
  .tariff__card:nth-child(3){
    transition-delay: .2s;
  }
</style>