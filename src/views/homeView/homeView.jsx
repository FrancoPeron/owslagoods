import React, { useState, useEffect } from 'react'
import './homeView.scss'

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, collection, query, limit } from 'firebase/firestore'

// Components
import ItemList from "@/components/loops/itemList/itemList.jsx";
import HomeBanner from "@/components/organisms/homeBanner/homeBanner.jsx";
import HomeArtistsApparel from "@/components/organisms/homeArtistsApparel/homeArtistsApparel.jsx";
import HomeCollection from "@/components/organisms/homeCollection/homeCollection.jsx";

const HomeView = () => {

  const [products, setProducts] = useState([])

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

      <HomeBanner />
      
      <section className="items-list-box">
        <p className='items-list-box__title'>More Popular</p>
        <ItemList items={products} />
      </section>

      <HomeArtistsApparel />

      <section className="items-list-box">
        <p className='items-list-box__title'>Headwears</p>
        <ItemList items={products} />
      </section>

      <HomeCollection />

      <section className="items-list-box">
        <p className='items-list-box__title'>Accessories</p>
        <ItemList items={products} />
      </section>

      {/* <span className="home-background__3"></span> */}
    </main>

  )
}

export default HomeView