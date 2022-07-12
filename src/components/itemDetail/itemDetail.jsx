import React, {useState, useEffect } from 'react'

import '../../style/components/itemDetail.css'
import '../../style/components/itemCount.css'

import SkeletonItemDetail from "./ItemDetailSkeleton.jsx"
import ItemCount from "../itemCount/itemCount.jsx"



const ItemDetail = ({item})=>{

    return(
        <>
            {
                (item.length != 0)
                ? 
                    <div className='product-detail'>
                        <div className='product-detail__imgs'>
                            <img className="product-detail__img mb-2" src={item[0].img} alt="jacket black" />
                        </div>  

                    <div className='product-detail__info'>

                        <ItemCount stock={6} initial={1} onAdd={onAdd} countId={item.id} />

                        <p className="product-detail__name">{item[0].name}</p>
                        <p className="product-detail__price">{item[0].price}</p>

                        <button className='product-detail__btn'>Add to bag</button>
                    </div>

                    </div>
                : <SkeletonItemDetail />

            }
        
        </>
    )
}

export default ItemDetail


