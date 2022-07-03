import React, {useState, useEffect } from 'react'

import Item from "./item.jsx";
import SkeletonItem from "./skeleton-loading/skeleton-item.jsx"


const ItemList = ({items})=>{

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


