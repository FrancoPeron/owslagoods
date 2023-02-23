import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet } from "react-router-dom";

// Components
import Header from '@/components/organisms/header/header.jsx'

const OwslaGoods = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>


  )
}
export default OwslaGoods


