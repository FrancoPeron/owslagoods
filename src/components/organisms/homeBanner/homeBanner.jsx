import React, { useState, useEffect } from 'react'
import './homeBanner.scss'

// Router
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const imgBanner1 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Ffondo-1a.webp?alt=media&token=8e665379-4995-4b4b-aabf-50e42e1aff9b"
  const imgBanner2 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Ffondo-1b.webp?alt=media&token=e5712a03-254c-4e5e-bdab-85f7fdd1d025"
  const imgBanner3 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Fowsla-luke.webp?alt=media&token=3e4dbf7b-3140-4a50-a9cb-febcfd351d88"

  return (
    <section className="banner">
      <span className="banner__background"></span>

      <div className='banner__box'>
        <h1 className='banner__title'>Lukevicious x OWSLA</h1>
        <p className='banner__subtitle'>Collection</p>
      </div>

      <Link className='btn-swb' to="/products/tops">
        <p className='btn-text'>Now Available</p>
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9 8L0.999993 8" stroke="black" strokeWidth="2" strokeLinecap="round" />

          
          <path d="M26.9 8L19.9 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M26.9 8L19.9 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>
      
      <div className='banner__imgs'>
        <img src={imgBanner1} alt="" />
        <img src={imgBanner2} alt="" />
      </div>
      
      <img className='banner__img' src={imgBanner3} alt="owsla-luke" />
    </section>
  )
}

export default HomeBanner