import React, { useState, useEffect } from 'react'
import './homeCollection.scss'

// Router
import { Link } from "react-router-dom";

const HomeCollection = () => {
  const imgCol1 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_032.webp?alt=media&token=f90e8849-e552-480a-9dc6-000d64531aaf";
  const imgCol2 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_018.webp?alt=media&token=e02a6f1e-08a4-4e14-afc7-ba458e2aa84a";
  const imgCol3 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_033.webp?alt=media&token=10b1d921-8544-4446-a4f9-a7a045c76eab";
  const imgCol4 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_007.webp?alt=media&token=4eaa922e-6ded-48ea-9183-8c676350ccbd";
  const imgCol5 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_021.webp?alt=media&token=07d9f835-cc8e-4dba-8682-859a060a3c4f";
  const imgCol6 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_018.webp?alt=media&token=5a433694-5ede-45e9-bf79-585d1836561a";
  const imgCol7 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_018.webp?alt=media&token=5a433694-5ede-45e9-bf79-585d1836561a";
  const imgCol8 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_018.webp?alt=media&token=5a433694-5ede-45e9-bf79-585d1836561a";

  return (
    <section className='collection'>
      <span className='collection__backgound1'></span>
      <span className='collection__backgound2'></span>

      <p className='collection__title items-list-box__title'>Collections</p>

      <div className='collection__box'>
        <div className='collection__nameBox'>
          <span className='box-title-white'>
            <svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.5" x2="2.5" y2="28" strokeWidth="4" />
            </svg>
            <p className='box-title-text'>Burn Forever</p>
          </span>
          <svg width="100%" height="66" viewBox="30 0 470 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="14.5" x2="170" y2="14.5" stroke="white" strokeWidth="4"></line>
            <line y1="48.5" x2="470" y2="48.5" stroke="white" strokeWidth="4"></line>
          </svg>
        </div>
        <img className='img1' src={imgCol1} alt="" />
        <img className='img2' src={imgCol2} alt="" />
        <img className='img3' src={imgCol3} alt="" />
        <img className='img4' src={imgCol4} alt="" />
      </div>

      <div className='collection__box reverse'>
        <div className='collection__nameBox'>
          <span className='box-title-white'>
            <p className='box-title-text'>Audio Destruct</p>
            <svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.5" x2="2.5" y2="28" strokeWidth="4" />
            </svg>
          </span>
          <svg width="100%" height="66" viewBox="30 0 470 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="14.5" x1="300" x2="470" y2="14.5" stroke="white" strokeWidth="4"></line>
            <line y1="48.5" x2="470" y2="48.5" stroke="white" strokeWidth="4"></line>
          </svg>
        </div>
        <img className='img1' src={imgCol5} alt="" />
        <img className='img2' src={imgCol6} alt="" />
        <img className='img3' src={imgCol7} alt="" />
        <img className='img4' src={imgCol8} alt="" />
      </div>

      <Link className="btn-owb" to="/"><p className='btn-text'>View All</p>
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9 8L0.999993 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M26.9 8L19.9 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M26.9 8L19.9 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>

    </section>
  )
}

export default HomeCollection