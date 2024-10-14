import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featuredProducts = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp5611653.jpg')" }}
      >
        <h1 className="text-4xl text-white font-bold">Welcome to LuxeLane!</h1>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
