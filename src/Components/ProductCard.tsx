import React from 'react';

const ProductCard = () => {
  return (
    <div className="min-w-[280px] mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <img
        className="object-cover w-full h-48"
        src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Nano Cake</h2>
        <p className="text-gray-700 mb-4">Our new cake.</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">$99.99</span>
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
