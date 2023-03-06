import React from 'react'
import './homeView.scss'

// Data Base
import { db } from '@/database/firebase.config'
import {collection, query, where, limit } from 'firebase/firestore'

// Components
import Footer from "@/components/organisms/footer/footer.jsx";
import ProductsListSmall from "@/components/organisms/productsListSmall/productsListSmall.jsx";
import HomeBanner from "@/components/organisms/homeBanner/homeBanner.jsx";
import HomeArtistsApparel from "@/components/organisms/homeArtistsApparel/homeArtistsApparel.jsx";
import HomeCollection from "@/components/organisms/homeCollection/homeCollection.jsx";

const HomeView = () => {

  const morePopular = {
    name: "More Popular",
    collection: query(collection(db, 'products'),limit(8)),
  }
  const headwearsCollection = {
    name: "headwears",
    collection: query(collection(db, 'products'), where('category', '==', "headwear"),limit(4)),
  }
  const accessoriesCollection = {
    name: "accessories",
    collection: query(collection(db, 'products'), where('category', '==', "accessories"),limit(4)),
  }

  return (

    <main className='home'>
      <HomeBanner />
      <ProductsListSmall {...morePopular} />
      <HomeArtistsApparel />
      <ProductsListSmall {...headwearsCollection} />
      <HomeCollection />
      <ProductsListSmall {...accessoriesCollection} />
      <Footer />
    </main>

  )
}

export default HomeView