
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
import Shop from './shop';
import Cart from './cart';
import ShopContextProvider from './shop-context';
function App() {
  return (
    <>
    <ShopContextProvider>
    <Router>
          <Navbar />
          <Routes>
           <Route exact path="/" element={<Shop/>}/>
           <Route exact path='/cart'element={<Cart/>}/>
          </Routes>
        </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
