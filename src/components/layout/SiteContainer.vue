<template>
  <div class="container" :class="{ 'container--narrow': narrow, 'container--wide': wide }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  narrow?: boolean
  wide?: boolean
}>()
</script>
