import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../hooks/useCartContext'

export default function SingleProduct() {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  const { cartItems, addToCart } = useCartContext()

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setIsLoading(false)
      })
  }, [id])

  function itemIsInCart(item) {
    return cartItems.some((cartItem) => cartItem.id === item.id)
  }

  if (isLoading) return <div>Loading...</div>

  if (!product) return <div>Product not found!</div>

  return (
    <>
      <h1 className='product-title'>{product.title}</h1>
      <img src={product.image} className='product-image' alt={product.title} />
      <p>{product.description}</p>
      <p className='price'>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        disabled={itemIsInCart(product)}
      >
        {itemIsInCart(product) ? 'Already in Cart' : 'Add to Cart'}
      </button>
    </>
  )
}
