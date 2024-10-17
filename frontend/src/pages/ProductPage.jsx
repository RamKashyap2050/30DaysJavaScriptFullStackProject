import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice"; // Import from the cartSlice
import { products } from "../data/products";
import QuantityControl from "../components/QualityControl";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    console.log(product)
    // Dispatch the addToCart action instead of using props
    dispatch(addToCart({ product, quantity, size: selectedSize }));
    navigate("/cart");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col md:flex-row items-start gap-8">
      {/* Left Section: Product Image */}
      <div className="w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-96 h-96 rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-yellow-500 text-lg mb-2">
          Rating: {product.rating} ⭐
        </p>

        {product.sizes && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Select Size:
            </label>
            <div className="flex flex-wrap gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 rounded-md border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <QuantityControl quantity={quantity} setQuantity={setQuantity} />

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full max-w-xs bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
