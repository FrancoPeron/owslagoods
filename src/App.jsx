import './App.css';

import NavBar from './components/navBar.jsx'
import ItemListContainer from './components/itemListContainer.jsx'

function App() {
  return (
    <div className="App">

        <span className="main-merch__background"></span>
        <NavBar />
        <ItemListContainer />

    </div>
  );
}

export default App;


/* import { useState } from 'react'
const [count, setCount] = useState(0)

<button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */