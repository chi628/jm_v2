<script setup lang="ts">
const props = defineProps({
  title: String,
  subTitle: String,
  content: String,
  bannerUrl: String,
  LTR: {
    type: Boolean,
    default: false
  }
})
console.log('meta', import.meta.url)
const imageUrl = new URL(`${props.bannerUrl}`, import.meta.url).href
</script>

<template>
  <div
    class="flex justify-between items-center space-x-2"
    :class="{ 'flex-row-reverse': $props.LTR }"
  >
    <img :src="imageUrl" alt="" class="w-1/2 rounded-md" />
    <div class="w-1/2 flex items-end p-[10px]">
      <div class="w-full space-y-3">
        <div class="text-text font-bold">
          <div class="text-2xl">{{ $props.title }}</div>
          <div class="text-xl" v-html="$props.subTitle"></div>
        </div>
        <div class="text-text leading-8" v-html="$props.content"></div>
      </div>
      <router-link
        to="/"
        class="w-[150px] h-[50px] leading-[50px] rounded-md bg-text text-center text-white"
        >立即預約</router-link
      >
    </div>
  </div>
</template>
