import React, { useState, useEffect } from 'react'
import './owslagoods.scss';

// Router
import { Outlet, useLocation } from "react-router-dom";

// Components
import Header from '@/components/organisms/header/header.jsx'
import ToolBar from '@/components/atoms/toolBar.jsx'

const OwslaGoods = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* <ToolBar  /> */}
      <Header />
      <Outlet />
    </>


  )
}
export default OwslaGoods


