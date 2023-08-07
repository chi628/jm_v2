<script setup lang="ts">
import { onMounted, watchEffect, ref } from 'vue'
import { GetAllProducts } from '../services/products'
import { getProductList } from '../repo/products'
import type { Product } from '@/type/product'
import ProductView from '../components/ProductView.vue'

const products = ref<Product[]>([])

watchEffect(() => {
  const a = getProductList()

  if (a.length) {
    a.forEach((item) => {
      products.value.push(item)
    })
    console.log('prod', products.value)
  } else {
    GetAllProducts()
  }
})
</script>
<template>
  <div class="w-full lg:max-w-[1220px] mx-auto grid grid-cols-4 gap-4 p-5">
    <ProductView v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>
