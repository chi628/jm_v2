import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/type/product'

export const useProductStore = defineStore('products', () => {
  const productList = ref([])

  function addProduct(item: Product) {
    productList.value.push(item)
  }

  return {
    productList,
    addProduct
  }
})

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])

  function addProductToCart(item: Product) {
    cartList.value.push(item)
  }

  return {
    cartList,
    addProductToCart
  }
})
