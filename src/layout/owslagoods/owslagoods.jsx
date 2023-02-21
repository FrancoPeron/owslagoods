import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet } from "react-router-dom";

// Components
import NavBar from '@/components/organism/navBar/navBar.jsx'

const OwslaGoods = () => {

  return (
    <main className="App">

      <span className="default-background"></span>

      <NavBar />

      <Outlet />

    </main>


  )
}
export default OwslaGoods


