import { useContext } from 'react'
import { CartContext } from '../context/cart-context'

export function useCartContext() {
  return useContext(CartContext)
}
