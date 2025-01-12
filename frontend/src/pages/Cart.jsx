import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
{console.log(cart)}
      {cart.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.product.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex-1 p-4">
                <h2 className="text-2xl font-semibold">{item.product.name}</h2>
                <p className="text-gray-500">Size: {item.size}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-lg font-bold mt-2">${item.product.price}</p>
              </div>
            </div>
          ))}
          <div className="text-right mt-8">
            <Link to="/checkout" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
