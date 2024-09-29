import PropTypes from 'prop-types'
import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContext = createContext({
  cartItems: [],
  // eslint-disable-next-line no-unused-vars
  addToCart: (_item) => {},
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (_item) => {},
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [])

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item])
  }

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
