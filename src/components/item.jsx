import React, {useState} from 'react'

const Item = ({item})=>{
    return(
        <div className="product">
            <div className="position-relative overflow-hidden w-100">
                <img img="product.img" className="product__img mb-2" src={item.img} alt="jacket black" />
                <button className="product__btn">Details</button>
            </div>
            <p data="product.name" className="product__item-name">{item.name}</p>
            <p data="product.price" className="product__item-price">{item.price}</p>
        </div>
    )
}

export default Item