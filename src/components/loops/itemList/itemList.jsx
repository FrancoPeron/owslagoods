import React, { useState, useEffect } from 'react'
import './itemList.scss'

// Components
import ProductItem from "@/components/molecules/productItem/productItem.jsx";
import SkeletonItem from "./itemSkeleton.jsx"


const ItemList = ({ items }) => {
  items.sort((a, b) => { return b.date - a.date })
  return (

    <section className='items-list'>
      {
        (items.length != 0)
          ? items.map((item) => <ProductItem key={item.id} item={item} />)
          : [...Array(6)].map((e, i) => <SkeletonItem key={i} />)

      }
    </section>

  )
}

export default ItemList


