import React, {useState, useEffect } from 'react'

import Item from "./item.jsx";
import SkeletonItem from "./itemSkeleton.jsx"

import '../../style/components/itemList.css'

const ItemList = ({items})=>{

    items.sort((a, b)=>{return a.date - b.date})
    
    return(
        <>
            {
                (items.length != 0)
                ? items.map( (item) => <Item key={item.id} item={item}/>)
                : [...Array(6)].map((e, i) => <SkeletonItem key={i} />)

            }
        
        </>
    )
}

export default ItemList


