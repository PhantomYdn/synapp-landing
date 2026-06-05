<template>
  <section class="section faq-section" aria-labelledby="faq-heading">
    <div class="container container--narrow">
      <AppSectionIntro
        badge="FAQ"
        title="Common Questions"
        center
        id="faq-heading"
      />
      <FaqAccordion :items="homepageFaqs" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import { homepageFaqs } from '@/data/faq'
</script>
