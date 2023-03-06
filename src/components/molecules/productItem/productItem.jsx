import React from 'react'
import './productItem.scss'

import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {

  return (
    <div className="product">
      <div className="product__box">
        <img className="product__img" src={item.imgs[0]} alt={item.name} />
        <Link className="product__btn btn-sbb" to={`/item/${item.id}`}>View More</Link>
      </div>
      <p className="product__item-name">{item.name}</p>
      <p className="product__item-price">$ {item.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductItem