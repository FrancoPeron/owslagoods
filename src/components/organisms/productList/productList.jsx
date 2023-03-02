import React, { useState, useEffect } from 'react'
import './productList.scss'

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, query } from 'firebase/firestore'

// Components
import ItemList from "@/components/loops/itemList/itemList.jsx";

const ProductList = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    getDocs(query(props.collection))
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
  }, [props])


  return (

    <section className="items-list-box">
      <p className='items-list-box__title'>{props.name}</p>
      <ItemList items={products} />
    </section>
  )
}

export default ProductList