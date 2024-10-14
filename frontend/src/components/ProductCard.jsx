import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`); // Navigate to product details page
  };
  return (
    <div className="border p-4 rounded shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-yellow-500 mb-2">Rating: {product.rating} ⭐</p>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => handleViewDetails(product.id)}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
