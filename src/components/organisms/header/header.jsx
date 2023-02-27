import React from 'react'
import './header.scss'

// Assets
import logo from '@/assets/images/owslaLogo.svg';

// Router
import { Link } from 'react-router-dom'

// Components
import CartWidget from '@/components/atoms/cartWitget/cartWitget.jsx'
import SearchWidget from '@/components/atoms/searchWitget/searchWitget.jsx'
import Burger from '@/components/molecules/burger/burger.jsx'
import Nav from '@/components/molecules/nav/nav.jsx'

const Header = () => {

  return (
    <header className="header">
      <span className="header__background"></span>

      <div className="header__logo">
        <p className="header__logo-text">OWSLA</p>
        <Link className="header__logo-link" to="/">
          <img src={logo} alt="OWSLA Goods Logo" />
        </Link>
        <p className="header__logo-text">GOODS</p>
      </div>

      <div className="header__nav">
        <Link to="/all"><SearchWidget /></Link>

        <div className='burger-box' burgerbox="">
          <Nav />
        </div>
        <Link to="/cart"><CartWidget /></Link>
        
        <Burger />
      </div>

    </header>
  )
}

export default Header