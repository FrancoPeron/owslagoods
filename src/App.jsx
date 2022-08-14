import React, {useState, useEffect } from 'react'
import './App.css';

// Router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Context
import CartContext from "./context/cartContext";

// Components
import NavBar from './components/navBar/navBar.jsx'
import ToolBar from './components/toolBar.jsx'

// Views
import HomeContainer from './views/homeContainer.jsx'
import ItemListContainer from './views/itemListContainer.jsx'
import ItemDetailContainer from './views/itemDetailContainer.jsx'
import CartContainer from './views/cartContainer.jsx'

function App() {

  return (
    <Router>
      <CartContext>

        <ToolBar  />

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







