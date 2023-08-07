<script setup lang="ts">
import { PropType } from 'vue'
import type { Product } from '@/type/product'
const props = defineProps({
  product: Object as PropType<Product>
})
const imgUrl = new URL(`${props.product.imageUrl}`, import.meta.url).href
</script>
<template>
  <div class="flex flex-col items-center space-y-5 min-w-[250px]">
    <router-link :to="`product/${$props.product.id}`" class="flex flex-col items-center space-y-4">
      <img :src="imgUrl" alt="" class="w-[150px] h-auto" />
      <div class="text-text font-bold text-xl">{{ $props.product.title }}</div>
      <div class="text-text">NT.{{ $props.product.price }}</div>
    </router-link>
    <div
      class="w-[200px] h-[45px] leading-[45px] text-center text-text text-sm font-medium hover:text-white hover:bg-text border border-solid border-text cursor-pointer"
    >
      Add To Cart
    </div>
  </div>
</template>
