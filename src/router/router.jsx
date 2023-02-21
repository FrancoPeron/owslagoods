// ========== Router ========== //

import { createBrowserRouter } from 'react-router-dom'

//layout
import OwslaGoods from '@/layout/owslagoods/owslagoods.jsx'
import Admin from '@/layout/admin/admin.jsx'

// Views
import HomeView from '@/views/homeView/homeView.jsx'
import ItemListView from '@/views/itemListView/itemListView.jsx'
import ItemDetailView from '@/views/itemDetailView/itemDetailView.jsx'
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
        element: <ItemListView />,
      },
      {
        path: '/products/:categoryName', 
        element: <ItemListView /> ,
      },
      {
        path: '/item/:id', 
        element: <ItemDetailView />,
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