import React from "react";

const QuantityControl = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex items-center w-100">
      <button
        onClick={decrement}
        className="px-4 py-2 bg-black text-white rounded-l-md hover:bg-gray-800 transition"
      >
        -
      </button>
      <span className="mx-6 text-xl font-bold">{quantity}</span>
      <button
        onClick={increment}
        className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 transition"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
