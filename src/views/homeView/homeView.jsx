import React, { useState, useEffect } from 'react'
import './homeView.scss'

// Router
import { Link } from "react-router-dom";

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, collection, query, limit } from 'firebase/firestore'

// Components
import ItemList from "@/components/loops/itemList/itemList.jsx";
import ArtistsApparel from "@/components/organisms/artistsApparel/artistsApparel.jsx";

const HomeView = () => {

  const [products, setProducts] = useState([])

  const imgBanner1 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Ffondo-1a.webp?alt=media&token=8e665379-4995-4b4b-aabf-50e42e1aff9b"
  const imgBanner2 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Ffondo-1b.webp?alt=media&token=e5712a03-254c-4e5e-bdab-85f7fdd1d025"
  const imgBanner3 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/banner%2Fowsla-luke.png?alt=media&token=c0676b94-edf3-44a5-acc0-d45d13598df8"
  const imgCol1 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_032.webp?alt=media&token=f90e8849-e552-480a-9dc6-000d64531aaf";
  const imgCol2 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_018.webp?alt=media&token=e02a6f1e-08a4-4e14-afc7-ba458e2aa84a";
  const imgCol3 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_033.webp?alt=media&token=10b1d921-8544-4446-a4f9-a7a045c76eab";
  const imgCol4 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_007.webp?alt=media&token=4eaa922e-6ded-48ea-9183-8c676350ccbd";
  const imgCol5 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_021.webp?alt=media&token=07d9f835-cc8e-4dba-8682-859a060a3c4f";
  const imgCol6 = "https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Faudio-destruct%2Faudio-destruct_018.webp?alt=media&token=5a433694-5ede-45e9-bf79-585d1836561a";

  useEffect(() => {

    const productsCollection = collection(db, 'products');
    getDocs(query(productsCollection, limit(8)))
      .then(result => {
        const products = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setProducts(products)
      })
      .catch(error => console.log(error))
  }, [])


  return (

    <main className='home'>
      <section className="banner">
        <span className="home-background__1"></span>
        <div className='banner__box'>
          <h1 className='banner__title'>Lukevicious x OWSLA</h1>
          <p className='banner__subtitle'>Collection</p>
        </div>
        <Link className='btn-swb' to="/products/artists">
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

      <section className="items-list-box">
        <p className='items-list-box__title'>More Popular</p>
        <ItemList items={products} />
      </section>

      <ArtistsApparel />

      <section className="items-list-box">
        <p className='items-list-box__title'>Headwears</p>
        <ItemList items={products} />
      </section>

      <section className='collection'>

        <p className='items-list-box__title'>Collections</p>

        <div className='collection-box1'>
          <span className='box-title-black'>
            <svg width="5" height="28" viewBox="0 0 5 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.5" x2="2.5" y2="28" strokeWidth="4" />
            </svg>
            <p className='box-title-text'>Burn Forever</p>
          </span>
          <img src={imgCol1} alt="" />
          <img src={imgCol2} alt="" />
          <img src={imgCol3} alt="" />
        </div>

        <div className='collection-box2'>
          <span className='box-title-black'>
            <p className='box-title-text'>Audio Destruct</p>
            <svg width="5" height="28" viewBox="0 0 5 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.5" x2="2.5" y2="28" strokeWidth="4" />
            </svg>
          </span>
          <img src={imgCol4} alt="" />
          <img src={imgCol5} alt="" />
          <img src={imgCol6} alt="" />
        </div>

        <Link className="btn-owb" to="/"><p className='btn-text'>View All</p>
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9 8L0.999993 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M26.9 8L19.9 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M26.9 8L19.9 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>

      </section>

      <section className="items-list-box">
        <p className='items-list-box__title'>Accessories</p>
        <ItemList items={products} />
      </section>

      <footer className='footer'>

      </footer>

      <span className="home-background__3"></span>
    </main>

  )
}

export default HomeView