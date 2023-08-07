import axios from 'axios'
import type { Product } from '@/type/product'
import { InsertProducts, getCartList } from '@/repo/products'

export const GetAllProducts = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_APP_ApiPath}/api/${import.meta.env.VITE_APP_UUID}/ec/products`
  )

  const pagination = res.data.meta.pagination
  const products: Product[] = res.data.data

  InsertProducts(products)
}

export const GetCart = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_APP_ApiPath}/api/${import.meta.env.VITE_APP_UUID}/ec/shopping`
  )

  const list = res.data.data

  // InsertCart(list)
}

export const AddToCart = (id: string, quantity: number = 1) => {
  const cartList = getCartList()
  const isItemInCart = cartList.some((item) => item.id === id)
  console.log('isItemInCart', isItemInCart)
}
