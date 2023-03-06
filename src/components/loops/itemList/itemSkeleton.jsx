import React, {useState} from 'react'

const SkeletonItem = ()=>{
    return(
        <div className="item-skeleton"> 
            <div className="item-skeleton__img"></div>
            <div className="item-skeleton__item-name"></div>
            <div className="item-skeleton__item-price"></div>
        </div>
    )
}

export default SkeletonItem