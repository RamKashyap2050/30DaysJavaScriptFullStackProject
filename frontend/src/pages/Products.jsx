// /pages/Products.jsx
import React from "react";
import { products } from "../data/products"; // Importing product data
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router

const Products = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`); // Navigate to product details page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="font-bold text-lg mb-2">${product.price}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-medium">
                  Rating: {product.rating}⭐
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
                  onClick={() => handleViewDetails(product.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
