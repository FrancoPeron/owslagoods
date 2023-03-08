import React, { useState, useEffect } from 'react'
import './productListView.scss'

// Router
import { useParams , useLocation } from "react-router-dom";

// Data Base
import { db, getData } from '@/database/firebase.config'
import { collection, query, where } from 'firebase/firestore'

// Components
import ProductList from "@/components/organisms/productList/productList.jsx";
import Search from "../../components/molecules/search/search.jsx";


const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { state } = useLocation();
  
  const productsCollection = collection(db, 'products');
  const [filter, setFilter] = useState(productsCollection)
  const [products, setProducts] = useState([])
  const [foundState, setFoundState] = useState(true)
  const [originalProd, setOriginalProd] = useState([])
  const [inputPointer, setInputPointer] = useState(state?.inputPointer)
  console.log(inputPointer)

  useEffect(() => {
    setInputPointer(state?.inputPointer)
    getNewData((categoryName ? query(filter, where('category', '==', categoryName)) : filter))
  }, [categoryName, filter, state])

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
        <Search sendData={handleData} pointer={inputPointer} />
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