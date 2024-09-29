import { useCartContext } from '../hooks/useCartContext'

export default function Cart() {
  const { cartItems, removeFromCart } = useCartContext()

  if (!cartItems.length)
    return <h1 className='text-center text-primary'>Your cart is empty!</h1>

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className='cart-item'>
            <h2>{item.title}</h2>
            <div className='flex'>
              <p className='price'>${item.price}</p>
              <button onClick={() => removeFromCart(item)}>X</button>
            </div>
          </li>
        ))}

        <li className='cart-item'>
          <h2>Total</h2>
          <div className='flex'>
            <p className='total-price'>${total}</p>
          </div>
        </li>
      </ul>
    </>
  )
}
