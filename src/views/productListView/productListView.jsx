import React, { useState, useEffect } from 'react'
import './productListView.scss'

// Router
import { useParams } from "react-router-dom";

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, collection, query, where } from 'firebase/firestore'

import { searchItems } from '@/database/algolia.js'

// Components
import ItemList from "@/components/loops/itemList/itemList.jsx";

const ItemListContainer = () => {
  const productsCollection = collection(db, 'products');
  // const collectionsCollection = getDocs(query(collection(db,'collections')))

  const { categoryName } = useParams();

  const [filter, setFilter] = useState(productsCollection)
  const [products, setProducts] = useState([])
  const [filterProd, setFilterProd] = useState(true)
  const [originalProd, setOriginalProd] = useState([])

  useEffect(() => {

    getDocs(categoryName ? query(filter, where('category', '==', categoryName)) : filter)
      .then(result => {
        const products = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setProducts(products)
        setOriginalProd(products)
      })
      .catch(error => console.log(error))

  }, [categoryName, filter])

  const handleChange = async(e) => {
    const {value} = e.target
  
    if(value === ''){
      setProducts(originalProd)
      setFilterProd(true)
    }
    else{
      const [results] = await searchItems(value)
      let filterP = products.filter(c => results.some(s => s.id === c.id))
      setProducts((filterP.length == 0) ? originalProd : filterP)
      setFilterProd(!(filterP.length == 0))
    }
  }

  return (
    <main className="items-list-container">
    {console.log(filterProd)}
      <form>
        <input type="search" name="focus" placeholder="Search" id="search-input" onChange={handleChange} / >
      </form>

      {(filterProd)
      ? <ItemList items={products} />
      : <p>Not Found</p> 
      }
    </main>
  )
}

export default ItemListContainer