<template>
  <section class="section container" style="padding-top: 10rem; min-height: 60vh">
    <h1>Page not found</h1>
    <p>This page does not exist or has moved.</p>
    <p><RouterLink to="/">Go to the homepage</RouterLink> or <a href="/docs/">open the documentation</a>.</p>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta('notFound')
</script>
