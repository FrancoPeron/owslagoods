//import logo from './logo.svg';
import './App.css';

import NavBar from './components/navBar.js'
import ItemListContainer from './components/itemListContainer.js'

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
