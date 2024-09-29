import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../hooks/useCartContext'

export default function Header() {
  const { cartItems } = useCartContext()

  const itemCount = cartItems.length

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <h1>
            De<span>lulu</span>
          </h1>
        </Link>
        <nav className='primary-nav'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/cart'>
                Cart<span>({itemCount})</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
