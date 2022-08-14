import React, {useState, useEffect } from 'react'
import '../../style/components/itemList.css'

// Components
import Item from "./item.jsx";
import SkeletonItem from "./itemSkeleton.jsx"


const ItemList = ({items})=>{

    items.sort((a, b)=>{return a.date - b.date})
    
    return(
        
        <div className='items-list'>
            {
                (items.length != 0)
                ? items.map( (item) => <Item key={item.id} item={item}/>)
                : [...Array(6)].map((e, i) => <SkeletonItem key={i} />)

            }
        </div>

    )
}

export default ItemList


