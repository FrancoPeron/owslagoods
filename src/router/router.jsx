// ========== Router ========== //

import { createBrowserRouter } from 'react-router-dom'

//layout
import OwslaGoods from '@/layout/owslagoods/owslagoods.jsx'
import Admin from '@/layout/admin/admin.jsx'

// Views
import HomeView from '@/views/homeView/homeView.jsx'
import ProductListView from '@/views/productListView/productListView.jsx'
import ProductDetailView from '@/views/productDetailView/productDetailView.jsx'
import CartView from '@/views/cartView/cartView.jsx'

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <OwslaGoods />,
    // errorElement: <h1>nnot found</h1>,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: '/all', 
        element: <ProductListView />,
      },
      {
        path: '/products/:categoryName', 
        element: <ProductListView /> ,
      },
      {
        path: '/item/:id', 
        element: <ProductDetailView />,
      },

      {
        path: '/cart',
        element: <CartView />,
      },
    ],
  },
  {
    path: '/admin', 
    element: <Admin />,
  },
]);