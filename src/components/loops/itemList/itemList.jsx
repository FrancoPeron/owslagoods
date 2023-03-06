import React from 'react'
import './itemList.scss'

// Components
import SkeletonItem from "./itemSkeleton.jsx"

const ItemList = (props) => {
  props.items.sort((a, b) => { return b.date - a.date })
  return (
    <>
      {(props.items.length != 0)
        ? props.items.map((item) => {
            const key = item.id;
            return props.children({ key, item });
          })
        : [...Array(4)].map((e, i) => <SkeletonItem key={i} />)
      }
    </>
  )
}

export default ItemList

