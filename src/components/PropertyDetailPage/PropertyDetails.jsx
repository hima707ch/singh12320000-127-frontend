import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div id="PropertyDetails_1" className="bg-white rounded-lg shadow-lg p-6">
      <h1 id="PropertyDetails_2" className="text-3xl font-bold text-gray-900 mb-4">
        {property.title}
      </h1>
      <div id="PropertyDetails_3" className="flex items-center text-lg text-gray-600 mb-6">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{property.address}</span>
      </div>
      <div id="PropertyDetails_4" className="grid grid-cols-2 gap-4 mb-6">
        <div id="PropertyDetails_5" className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm text-gray-500">Price</h3>
          <p className="text-xl font-bold text-gray-900">${property.price.toLocaleString()}</p>
        </div>
        <div id="PropertyDetails_6" className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm text-gray-500">Property Type</h3>
          <p className="text-xl font-bold text-gray-900">{property.type}</p>
        </div>
      </div>
      <div id="PropertyDetails_7" className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600">{property.description}</p>
      </div>
      <div id="PropertyDetails_8" className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="grid grid-cols-2 gap-4">
          {property.features?.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails;