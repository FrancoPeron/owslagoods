import React, {useState} from 'react'
import {Link}  from 'react-router-dom'

import '../../style/components/item.css'

const Item = ({item})=>{

    return(
        <div className="product">
            <div className="position-relative overflow-hidden w-100">
                <img className="product__img mb-2" src={item.img} alt={item.name} />
                <Link to={`/item/${item.id}`} className="product__btn">View More</Link>
            </div>
            <p className="product__item-name">{item.name}</p>
            <p className="product__item-price">$ {item.price.toFixed(2)}</p>
        </div>
    )
}

export default Item