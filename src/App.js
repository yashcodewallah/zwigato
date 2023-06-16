import Nav from "./components/nav.js"
import Home from "./pages/Home.js";
import Food from "./pages/food.js";
import Footer from "./components/Footer.js";
import Cart from "./pages/Cart.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout.js";

function App() {


  
  return (
    <>
    <BrowserRouter>
      <Nav />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
     
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
