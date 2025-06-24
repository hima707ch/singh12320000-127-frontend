import React, { useState } from 'react';
import images from '../assets/images';

const ImageGallery = ({ images: propertyImages = images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="ImageGallery_1" className="w-full">
      <div id="ImageGallery_2" className="w-full h-[500px] overflow-hidden rounded-lg">
        <img
          id="ImageGallery_3"
          src={propertyImages[activeImage]}
          alt={`Property view ${activeImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div id="ImageGallery_4" className="grid grid-cols-4 gap-4 mt-4">
        {propertyImages.slice(0, 4).map((img, index) => (
          <button
            key={index}
            id={`ImageGallery_5_${index}`}
            onClick={() => setActiveImage(index)}
            className={`h-24 rounded-lg overflow-hidden ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img
              src={img}
              alt={`Property thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;