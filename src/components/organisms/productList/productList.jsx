import React, { useState, useEffect } from 'react'
import './productList.scss'

// Components
import ItemList from "@/components/loops/itemList/itemList.jsx";
import ProductItem from "@/components/molecules/productItem/productItem.jsx";

const ProductList = (props) => {
  
  // console.log(props.items)
  return (
    
    <section className="product-list">
      <ItemList items={props.items} >
        {({ key, item }) => (
          <ProductItem key={key} item={item} />
        )}
      </ItemList>
    </section>
  )
}

export default ProductList