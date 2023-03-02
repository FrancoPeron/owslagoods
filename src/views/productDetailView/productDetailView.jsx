import React, { useState, useEffect } from 'react'
import './productDetailView.scss'

// Router
import { useParams } from "react-router-dom";

// Data Base
import { db } from '@/database/firebase.config'
import { getDoc, collection, doc, query, where, limit } from 'firebase/firestore'

// Components
import ProductList from "@/components/organisms/productList/productList.jsx";
import ProductDetail from "@/components/organisms/productDetail/productDetail.jsx";

const ProductDetailView = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [similarProducts, setSimilarProducts] = useState({
    name: "similar products",
    collection: query(collection(db, 'products'), limit(4)),
  })

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    getDoc(doc(productsCollection, id))
      .then(result => {
        const item = {
          id: result.id,
          ...result.data(),
        }
        setProduct(item)
        setSimilarProducts({...similarProducts, collection: query(collection(db, 'products'), where('category', '==', item.category), limit(4)) })

      })
      .catch(error => console.log(error))

  }, [id])

  return (
    <main className="items-detail-container">
      <ProductDetail item={product} />
      <ProductList {...similarProducts} />
    </main>
  )
}

export default ProductDetailView