import './App.css';

import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './views/itemListContainer.jsx'
import ItemDetailContainer from './views/itemDetailContainer.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <span className="main-merch__background"></span>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:id" element={ <ItemDetailContainer />} />
            <Route path="/cart" element={ <ItemDetailContainer />} />

          </Routes>
        
        </div>
    </Router>

  );
}

export default App;