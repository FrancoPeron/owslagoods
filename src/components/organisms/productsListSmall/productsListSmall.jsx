import React, { useState, useEffect } from 'react'
import './productsListSmall.scss'

// Data Base
import { getData } from '@/database/firebase.config'

// Components
import ProductList from "@/components/organisms/productList/productList.jsx";

const ProductsListSmall = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    if (Object.keys(props).length) {
      getNewData(props.collection)
    }
  }, [props])

  const getNewData = async (colectionRef) => {
    const [result, resultDocs] = await getData(colectionRef)
    setProducts(resultDocs)
  }

  return (

    <div className="product-list-small">
      {(props.name === "") ? "" : <p className='product-list-small__title'>{props.name}</p>}
      <ProductList items={products} />
    </div>
  )
}

export default ProductsListSmall