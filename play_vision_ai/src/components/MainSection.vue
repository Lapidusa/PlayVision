<template>
  <HeroSection></HeroSection>

  <div class="bg container">
    <AdvantagesSection></AdvantagesSection>
    <CoachSection></CoachSection>
    <NewsSection></NewsSection>
    <CreateProfile></CreateProfile>
    <Pricing_Plans></Pricing_Plans>
    <SystemRequirements></SystemRequirements>
  </div>

</template>

<script setup>
import HeroSection from "@/components/Main/HeroSection.vue";
import AdvantagesSection from "@/components/Main/AdvantagesSection.vue";
import CoachSection from "@/components/Main/CoachSection.vue";
import NewsSection from "@/components/Main/NewsSections.vue";
import CreateProfile from "@/components/Main/CreateProfile.vue";
import Pricing_Plans from "@/components/Main/Pricing_Plans.vue";
import SystemRequirements from "@/components/Main/SystemRequirements.vue";
</script>

<style scoped>
.bg {
  @apply pt-36 flex flex-col gap-36;
}

</style>