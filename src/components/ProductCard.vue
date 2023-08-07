<script setup lang="ts">
defineProps({
  imgUrl: String,
  link: String,
  title: String,
  category: String
})
</script>
<template>
  <router-link v-if="$props.link" :to="$props.link" class="space-y-4">
    <img
      :src="$props.imgUrl"
      :alt="$props.category"
      class="w-auto rounded-md shadow-[1px_1px_2px_1px_rgba(124,100,75,0.6)] mx-auto"
    />
    <div class="text-xl font-medium text-text text-center">{{ $props.title }}</div>
  </router-link>
</template>
