import React, { useState, useEffect, useContext } from 'react'
import './cartView.scss'

// Components
import Bag from "@/components/organisms/bag/bag.jsx"

const cartView = () => {

  return (
    <main className="cartView">
      <Bag />
    </main>
  )
}

export default cartView


