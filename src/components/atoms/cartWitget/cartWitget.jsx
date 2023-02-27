import React, { useContext } from 'react'
import './cartWitget.scss'

// Context
import { cartContexto } from "@/context/cartContext";

const CartWidget = () => {

  const { items } = useContext(cartContexto);

  return (
    <div className="cartWitget">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7877 10.1666V4.66665C15.7877 2.64162 14.0919 1 12 1C9.90814 1 8.21235 2.64162 8.21235 4.66665V10.1666M2.89434 22.9999H21.1057C22.2832 22.9999 23.1753 21.9706 22.9707 20.848L20.7983 8.93137C20.6386 8.0553 19.8523 7.41664 18.9333 7.41664H5.06667C4.14771 7.41664 3.36137 8.0553 3.20166 8.93137L1.02934 20.848C0.824689 21.9706 1.71676 22.9999 2.89434 22.9999Z" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>

      {
        (items.length !== 0)
          ? <span className='cartWitget__count'>{items.length}</span>
          : null
      }

    </div>
  )
}

export default CartWidget