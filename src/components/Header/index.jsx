import { useContext } from 'react'
import { NavLink,useNavigate } from  'react-router-dom'
import Cookies from 'js-cookie'

import CartContext from '../../context/CartContext'

import './index.css'


const Header = () => {
  const navigate = useNavigate()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }
  
  const {cartList} = useContext(CartContext)
 
  const renderCartItemsCount = () => {
     const cartItemsCount = cartList.length
     return (
      <>
       {cartItemsCount > 0 ? <span className='cart-count-badge'>{cartList.length}</span>:null}
      </>
     ) 
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
        <NavLink exact to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <NavLink exact to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-menu-item">
            <NavLink exact to="/products" className="nav-link">
                Products
              </NavLink>
            </li>

            <li className="nav-menu-item">
            <NavLink exact to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
          <NavLink exact to="/"  className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </NavLink>
          </li>

          <li className="nav-menu-item-mobile">
          <NavLink exact to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </NavLink>
          </li>
          <li className="nav-menu-item-mobile">
          <NavLink to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              {renderCartItemsCount()}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header




