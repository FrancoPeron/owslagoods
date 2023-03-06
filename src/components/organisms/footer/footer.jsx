
import React, { useState, useEffect } from 'react'
import './footer.scss'

// Assets
import logo from '@/assets/images/owslaLogo.svg';

// Router
import { Link } from 'react-router-dom'

const Footer = () => {

  return (

    <footer className='footer'>
      <span className="footer__background"></span>

      <div className='footer__box'>
        <div className='footer__nav1'>
          <ul className="nav__list">
            <li className="nav__item"><Link className="nav__link" to="/all">all</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/all">Collection</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/all">Artists Apparel</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/products/tops">Tops</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/products/bottoms">Bottoms</Link></li>
          </ul>
        </div>
        <div className='footer__logo'>
          <Link className='footer__logo-link'>
            <img className='footer__logo-img' src={logo} alt="OWSLA Logo" />
          </Link>
        </div>
        <div className='footer__nav2'>
          <ul className="nav__list">
            <li className="nav__item"><Link className="nav__link" to="/products/socks">Socks</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/products/headwear">Headwear</Link></li>
            <li className="nav__item"><Link className="nav__link" to="/products/accessories">Accessories</Link></li>
            <li className="nav__item"><a className="nav__link" to="https://owslahq.netlify.app" target="_blank">Music</a></li>
            <li className="nav__item"><Link className="nav__link" to="/products/accessories">info</Link></li>
          </ul>
        </div>

        <div className='footer__instagram'>

          <svg className='footer__line' height="4" viewBox="0 0 250 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="248" y2="2" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6371 8.31738C28.0421 8.31738 28.4379 8.43746 28.7746 8.66243C29.1113 8.8874 29.3737 9.20716 29.5287 9.58128C29.6836 9.95539 29.7242 10.3671 29.6452 10.7642C29.5662 11.1614 29.3712 11.5262 29.0849 11.8125C28.7985 12.0988 28.4337 12.2938 28.0365 12.3728C27.6394 12.4518 27.2277 12.4113 26.8536 12.2563C26.4795 12.1014 26.1597 11.8389 25.9348 11.5023C25.7098 11.1656 25.5897 10.7697 25.5897 10.3648C25.5897 9.82178 25.8054 9.30101 26.1894 8.91705C26.5734 8.53309 27.0941 8.31738 27.6371 8.31738V8.31738Z" fill="white" />
            <path d="M18.9995 14.1629C18.0419 14.1629 17.1058 14.4469 16.3096 14.9789C15.5133 15.511 14.8927 16.2671 14.5263 17.1519C14.1598 18.0366 14.0639 19.0101 14.2507 19.9493C14.4376 20.8886 14.8987 21.7513 15.5758 22.4284C16.253 23.1056 17.1157 23.5667 18.0549 23.7535C18.9942 23.9404 19.9677 23.8445 20.8524 23.478C21.7371 23.1115 22.4933 22.491 23.0254 21.6947C23.5574 20.8985 23.8413 19.9624 23.8413 19.0048C23.8413 17.7206 23.3312 16.4891 22.4232 15.5811C21.5152 14.673 20.2837 14.1629 18.9995 14.1629ZM18.9995 10.3628C20.7076 10.3628 22.3774 10.8693 23.7977 11.8183C25.2179 12.7673 26.3249 14.1161 26.9785 15.6942C27.6322 17.2723 27.8032 19.0088 27.47 20.6841C27.1368 22.3594 26.3142 23.8983 25.1064 25.1061C23.8986 26.3139 22.3597 27.1365 20.6844 27.4697C19.0091 27.8029 17.2726 27.6319 15.6945 26.9782C14.1164 26.3246 12.7676 25.2176 11.8186 23.7974C10.8696 22.3771 10.3631 20.7073 10.3631 18.9992C10.3631 16.7087 11.273 14.512 12.8926 12.8923C14.5123 11.2727 16.709 10.3628 18.9995 10.3628V10.3628Z" fill="white" />
            <path d="M12.0907 4.25527C10.0133 4.25747 8.0216 5.08369 6.55265 6.55265C5.08369 8.0216 4.25747 10.0133 4.25527 12.0907V25.9093C4.25783 27.9865 5.08422 29.9778 6.55313 31.4465C8.02205 32.9151 10.0135 33.7411 12.0907 33.7433H25.9093C27.9867 33.7411 29.9784 32.9149 31.4474 31.446C32.9163 29.977 33.7425 27.9853 33.7447 25.9079V12.0907C33.7425 10.0133 32.9163 8.0216 31.4474 6.55265C29.9784 5.08369 27.9867 4.25747 25.9093 4.25527H12.0907ZM12.0907 0H25.9093C29.1159 0 32.1913 1.27384 34.4587 3.54129C36.7262 5.80874 38 8.88406 38 12.0907V25.9093C38 29.1159 36.7262 32.1913 34.4587 34.4587C32.1913 36.7262 29.1159 38 25.9093 38H12.0907C8.88406 38 5.80874 36.7262 3.54129 34.4587C1.27384 32.1913 0 29.1159 0 25.9093L0 12.0907C0 8.88406 1.27384 5.80874 3.54129 3.54129C5.80874 1.27384 8.88406 0 12.0907 0Z" fill="white" />
          </svg>

          <svg className='footer__line' height="4" viewBox="0 0 250 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="248" y2="2" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>

        </div>
      </div>

    </footer>

  )
}

export default Footer
