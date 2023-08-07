import { storeToRefs } from 'pinia'
import { useCartStore, useProductStore } from '@/stores/products'
import type { Product } from '@/type/product'

export const InsertProducts = (list: Product[]) => {
  if (list.length === 0) return

  const { addProduct } = useProductStore()

  list.forEach((item) => {
    if (!ProductById(item.id)) {
      addProduct(item)
    }
  })
}

export const ProductById = (id: string) => {
  const { productList } = useProductStore()
  return productList.find((item) => item.id === id)
}

export const getProductList = () => {
  const productStore = useProductStore()
  const { productList } = storeToRefs(productStore)
  return productList.value
}

export const getCartList = () => {
  const cartStore = useCartStore()

  const { cartList } = storeToRefs(cartStore)

  return cartList.value
}

export const InsertCart = (list: Product[]) => {
  if (list.length === 0) return

  const { addProductToCart } = useCartStore()

  list.forEach((item) => {
    if (!ProductInCart(item.id)) {
      addProductToCart(item)
    }
  })
}

export const ProductInCart = (id: string) => {
  const cartStore = useCartStore()

  const { cartList } = storeToRefs(cartStore)

  return cartList.value && cartList.value.find((item) => item.id === id)
}
