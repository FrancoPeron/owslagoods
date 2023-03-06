import React, { useState, useEffect } from 'react'
import './productListView.scss'

// Router
import { useParams } from "react-router-dom";

// Data Base
import { db, getData } from '@/database/firebase.config'
import { collection, query, where } from 'firebase/firestore'

//Algolia
import { searchItems } from '@/database/algolia.js'

// Components
import ProductList from "@/components/organisms/productList/productList.jsx";
import Search from "../../components/molecules/search/search.jsx";

const ItemListContainer = () => {

  const productsCollection = collection(db, 'products');
  const [filter, setFilter] = useState(productsCollection)

  const { categoryName } = useParams();

  const [products, setProducts] = useState([])

  const [foundState, setFoundState] = useState(true)

  const [originalProd, setOriginalProd] = useState([])

  useEffect(() => {
    getNewData((categoryName ? query(filter, where('category', '==', categoryName)) : filter))
  }, [categoryName, filter])

  const getNewData = async (colectionRef) => {
    const [result, resultDocs] = await getData(colectionRef)
    setProducts(resultDocs)
    setOriginalProd(resultDocs)
  }

  const handleData = (results, is_found) => {
    (is_found)
      ? setFoundState(is_found)
      : setFoundState(is_found);
    (results.length)
      ? setProducts(originalProd.filter(c => results.some(s => s.id === c.id)))
      : setProducts(originalProd)
  }


  return (
    <main className="product-list-view">

      <div className='product-listBox'>
        <Search sendData={handleData} />
        {(foundState)
          ? <ProductList items={products} />
          : <div className='product-notFound'>
            <p>Not Found</p>
          </div>
        }
      </div>
    </main>
  )
}

export default ItemListContainer