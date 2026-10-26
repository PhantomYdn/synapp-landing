<template>
  <div class="home-view">
    <HomeHeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesTeaserSection />
    <HowItWorksSection />
    <PricingTeaserSection />
<!--    <TestimonialsSection />-->
    <FaqSection />
    <FinalCtaSection />
  </div>
</template>

<script setup lang="ts">
import HomeHeroSection from '@/components/homepage/HomeHeroSection.vue'
import ProblemSection from '@/components/homepage/ProblemSection.vue'
import SolutionSection from '@/components/homepage/SolutionSection.vue'
import FeaturesTeaserSection from '@/components/homepage/FeaturesTeaserSection.vue'
import HowItWorksSection from '@/components/homepage/HowItWorksSection.vue'
import PricingTeaserSection from '@/components/homepage/PricingTeaserSection.vue'
import FaqSection from '@/components/homepage/FaqSection.vue'
import FinalCtaSection from '@/components/homepage/FinalCtaSection.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'

usePageMeta('home')
useRevealOnScroll()
</script>
