import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Route, Routes} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
