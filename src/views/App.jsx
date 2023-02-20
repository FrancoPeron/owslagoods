import React, {useState, useEffect } from 'react'
import './App.scss';

// Router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Context
import CartContext from "@/context/cartContext";

// Components
import NavBar from '@/components/organism/navBar/navBar.jsx'

// Views
import HomeContainer from './content/homeContainer/homeContainer.jsx'
import ItemListContainer from './content/itemListContainer/itemListContainer.jsx'
import ItemDetailContainer from './content/itemDetailContainer/itemDetailContainer.jsx'
import CartContainer from './content/cartContainer/cartContainer.jsx'

function App() {

  return (
    <Router>
    
      <CartContext>

        <main className="App">

          <span className="default-background"></span> 

          <NavBar />

          <Routes>
            <Route path="/" element={ <HomeContainer /> }/>
            <Route path="/all" element={ <ItemListContainer /> }/>
            <Route path="/products/:categoryName" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailContainer /> }/>
            <Route path="/cart" element={ <CartContainer /> }/>
          </Routes>
        
        </main>

      </CartContext>

    </Router>

  )
}

export default App;







