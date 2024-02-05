"use client"
import { useState } from "react";


interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex justify-center items-center ml-20">
      <div className="max-w-2xl">
        <img src={selectedImage} alt="Selected Product" className="w-full mb-4 rounded-lg" />

        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={`cursor-pointer transition duration-300 transform hover:scale-110 ${
                selectedImage === image ? 'border-4 border-blue-500' : ''
              }`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
