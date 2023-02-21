import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from '@/components/organisms/header/Header.jsx'

const OwslaGoods = () => {

  return (
    <>
      <span className="default-background"></span>
      <Header />
      <Outlet />

    </>


  )
}
export default OwslaGoods


