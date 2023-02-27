import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/baseStyles.scss'
import './style.scss'

// Router
import { router } from '@/router/router.jsx'
import { RouterProvider } from "react-router-dom";

//context
import CartProvider from "@/context/cartContext.jsx";

// ========== APP ========== //
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={ router } />
    </CartProvider>
  </React.StrictMode>
)
