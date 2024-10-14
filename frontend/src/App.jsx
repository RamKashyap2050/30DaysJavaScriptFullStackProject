import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

const App = () => {
  const [cart, setCart] = useState([]); // Cart state
  const [orders, setOrders] = useState([]); // Orders state

  // Add item to cart
  const addToCart = (product, quantity, size) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, quantity, size },
    ]);
  };

  // Move cart items to orders and clear cart
  const placeOrder = () => {
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]); // Clear the cart
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} placeOrder={placeOrder} />}
        />
        <Route path="/orders" element={<Orders orders={orders} />} />
      </Routes>
    </Router>
  );
};

export default App;
