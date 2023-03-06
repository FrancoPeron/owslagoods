import React, { useState, useEffect } from 'react'
import './productDetailView.scss'

// Router
import { useParams } from "react-router-dom";

// Data Base
import { db } from '@/database/firebase.config'
import { getDoc, collection, doc, query, where, limit } from 'firebase/firestore'

// Components
import ProductDetail from "@/components/organisms/productDetail/productDetail.jsx";
import ProductsListSmall from "@/components/organisms/productsListSmall/productsListSmall.jsx";

const ProductDetailView = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [similarProducts, setSimilarProducts] = useState({})

  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    getDoc(doc(productsCollection, id))
      .then(result => {
        const item = {
          id: result.id,
          ...result.data(),
        }
        setProduct(item)
        setSimilarProducts({name: "similar products", collection: query(collection(db, 'products'), where('category', '==', item.category), limit(4)) })
      })  
      .catch(error => console.log(error))

      setResetKey(resetKey + 1)   
  },[id])

  return (

    <main className="product-detail-view">
      <ProductDetail item={product} resetKey={resetKey} />
      <ProductsListSmall {...similarProducts} />
    </main>
  )
}

export default ProductDetailView