import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders)
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-lg text-center">No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
              <img src={order.product.image} alt={order.name} className="w-24 h-24 object-cover" />
              <div className="flex-1 p-4">
                <h2 className="text-2xl font-semibold">{order.product.name}</h2>
                <p className="text-gray-500">Size: {order.size}</p>
                <p className="text-gray-500">Quantity: {order.quantity}</p>
                <p className="text-lg font-bold mt-2">${order.product.price * order.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
