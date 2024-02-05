"use client"

const ProductCard = () => {
  const addToCart = () => {
    console.log("Added Successfully")
  }
  const showProductInfo = () => {
    console.log("Show Product Information")
  }
  return (
    <div className="flex flex-col justify-center items-center rounded relative text-center transition duration-300 shadow-md">
      <img 
        className="w-full rounded"
        src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Card Image" 
      />
      <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 flex justify-between items-center opacity-0 transition duration-600 rounded text-white text-xl flex-col hover:opacity-100 cursor-pointer">
        <span></span>
        <div className="flex flex-row justify-center align-center gap-2">
          <button 
            className="bg-white text-black text-[16px] font-bold py-2 px-4 my-3 rounded-full shadow-md transition duration-300"
            onClick={addToCart}
          >
            Add To Cart
          </button>
          <a 
            className="bg-white text-black text-[16px] font-bold py-2 px-4 my-3 rounded-full shadow-md transition duration-300"
            href="/Product"
          >
            Show
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
