import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  console.log("my data=", product);
  return (
    <>
      <div
        className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full
    transition duration-500 transform border border-gray-800 group hover:scale-[1.03]
    hover:shadow-orange-900/40"
      >
        <Link
          to={"product"}
          className="relative cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt="{product.name}"
            className="w-full h-56 object-cover object-center 
            transition duration-500 group-hover:scale-110 group-hover:opacity-90"
          />
          <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl
          font-extrabold rounded-tr-xl shadow-lg">
             ৳ {product.price.toFixed(2)}

          </div>
        </Link>
       
      </div>
    </>
  );
};

export default ProductCard;
