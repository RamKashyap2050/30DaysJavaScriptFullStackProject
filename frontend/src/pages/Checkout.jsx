import React, { useState } from "react";

const Checkout = ({ cart, placeOrder }) => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

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

  const total = cart?.length
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
          alert("Your cart is empty!");
          return;
        }
    
        // Process order and navigate to orders page
        placeOrder();
        alert("Order placed successfully!");
        navigate("/orders");
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
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </div>
            <p className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
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
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={billingInfo.fullName}
          onChange={handleBillingChange}
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={billingInfo.email}
          onChange={handleBillingChange}
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={billingInfo.address}
          onChange={handleBillingChange}
          className="border p-2 w-full mb-4 rounded"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={billingInfo.city}
            onChange={handleBillingChange}
            className="border p-2 w-full mb-4 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={billingInfo.state}
            onChange={handleBillingChange}
            className="border p-2 w-full mb-4 rounded"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={billingInfo.zip}
            onChange={handleBillingChange}
            className="border p-2 w-full mb-4 rounded"
          />
        </div>
      </div>

      {/* Card Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardInfo.cardNumber}
          onChange={handleCardChange}
          className="border p-2 w-full mb-4 rounded"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={cardInfo.expiryDate}
            onChange={handleCardChange}
            className="border p-2 w-full mb-4 rounded"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardInfo.cvv}
            onChange={handleCardChange}
            className="border p-2 w-full mb-4 rounded"
          />
        </div>
      </div>

      {/* Place Order Button */}
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
