import React, {useState} from 'react'
import {Link}  from 'react-router-dom'

import '../../style/components/item.css'

const Item = ({item})=>{

    return(
        <div className="product">
            <div className="position-relative overflow-hidden w-100">
                <img img="product.img" className="product__img mb-2" src={item.img} alt="jacket black" />
                <Link to={`item/${item.id}`} className="product__btn">Details</Link>
            </div>
            <p data="product.name" className="product__item-name">{item.name}</p>
            <p data="product.price" className="product__item-price">{item.price}</p>
        </div>
    )
}

export default Item