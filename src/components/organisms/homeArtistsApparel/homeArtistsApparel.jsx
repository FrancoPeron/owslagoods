import React, { useState, useEffect } from 'react'
import './homeArtistsApparel.scss'

// Router
import { Link } from "react-router-dom";

const HomeArtistsApparel = () => {
  const imgArtists1 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fartists%2Fartist_006.webp?alt=media&token=328f935a-21a2-43b8-8d31-3d445146f9d6";
  const imgArtists2 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fartists%2Fartist_038.webp?alt=media&token=94188fb0-c64c-4a39-8197-6869de2ba6bc";
  const imgArtists3 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fartists%2Fartist_022.webp?alt=media&token=8bea83f3-215d-4076-ab22-4c5a19ae0842";

  return (
    <section className='artists-apparel'>
      <span className="artists-apparel__background"></span>
      <span className='box-title-white vertical'>
        <svg width="3" height="28" viewBox="0 0 3 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.5" x2="2.5" y2="28" strokeWidth="4" />
        </svg>
        <p className='box-title-text'>Artists' Apparel</p>
      </span>
      <img className='artists-apparel__img1' src={imgArtists1} alt="imgArtists" />
      <img className='artists-apparel__img2' src={imgArtists2} alt="imgArtists" />
      <img className='artists-apparel__img3' src={imgArtists3} alt="imgArtists" />
      <Link className="btn-swb" to="/"><p className='btn-text'>View All</p>
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9 8L0.999993 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M26.9 8L19.9 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M26.9 8L19.9 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>
    </section>
  )
}

export default HomeArtistsApparel