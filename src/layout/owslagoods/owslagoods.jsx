import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from '@/components/organism/header/Header.jsx'

const OwslaGoods = () => {

  return (
    <main className="App">
      <span className="default-background"></span>
      <Header />
      <Outlet />

    </main>


  )
}
export default OwslaGoods


