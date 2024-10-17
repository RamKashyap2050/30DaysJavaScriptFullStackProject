import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../slices/ordersSlice"; // Import the placeOrder action from the order slice
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  // Access the cart from the Redux store using useSelector
  const cart = useSelector((state) => state.cart.items); // Access the cart array from Redux
  const dispatch = useDispatch(); // To dispatch the placeOrder action
  const navigate = useNavigate();
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  console.log("Cart in Checkout", cart);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const total = cart.length
    ? cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    : 0;
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Dispatch placeOrder action
    dispatch(placeOrder(cart));
    navigate("/orders")
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <img
              src={item.product.image}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <div>
              <h3 className="font-semibold">{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </div>
            <p className="font-semibold">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <p className="text-right font-bold text-lg">
          Total: ${total.toFixed(2)}
        </p>
      </div>

      {/* Billing Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
        {Object.keys(billingInfo).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1").trim()}
            value={billingInfo[field]}
            onChange={handleBillingChange}
            className="border p-2 w-full mb-4 rounded"
          />
        ))}
      </div>

      {/* Card Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        {Object.keys(cardInfo).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1").trim()}
            value={cardInfo[field]}
            onChange={handleCardChange}
            className="border p-2 w-full mb-4 rounded"
          />
        ))}
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
