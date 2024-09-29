import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>

  if (!products.length) return <div>No products found</div>

  return (
    <>
      <h1>Products</h1>
      <ul className='products'>
        {products.map((product) => (
          <li key={product.id} className='product-item'>
            <Link to={`/products/${product.id}`} className='product-card'>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p className='price'>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
