import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet, useLocation } from "react-router-dom";

// Components
import Header from '@/components/organisms/header/header.jsx'

const OwslaGoods = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>


  )
}
export default OwslaGoods


