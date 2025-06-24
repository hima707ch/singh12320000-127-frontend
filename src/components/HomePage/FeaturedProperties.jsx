import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties, isLoading }) => {
  const defaultProperties = [
    {
      id: 1,
      title: 'Modern Villa with Ocean View',
      location: 'Malibu, CA',
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: images[0] || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Downtown Luxury Apartment',
      location: 'New York, NY',
      price: 1800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      image: images[1] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Suburban Family Home',
      location: 'Austin, TX',
      price: 850000,
      bedrooms: 5,
      bathrooms: 4,
      area: 2800,
      image: images[2] || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const displayProperties = properties && properties.length > 0 ? properties.slice(0, 3) : defaultProperties;

  return (
    <section id="FeaturedProperties_1" className="py-20 bg-white">
      <div id="FeaturedProperties_2" className="container mx-auto px-4">
        <div id="FeaturedProperties_3" className="text-center mb-16">
          <h2 id="FeaturedProperties_4" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span id="FeaturedProperties_5" className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p id="FeaturedProperties_6" className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most sought-after locations.
          </p>
        </div>

        {isLoading ? (
          <div id="FeaturedProperties_7" className="flex justify-center items-center h-64">
            <div id="FeaturedProperties_8" className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div id="FeaturedProperties_9" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProperties.map((property, index) => (
              <div id={`FeaturedProperties_${10 + index}`} key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div id={`FeaturedProperties_${20 + index}`} className="relative">
                  <img id={`FeaturedProperties_${30 + index}`} src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                  <div id={`FeaturedProperties_${40 + index}`} className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div id={`FeaturedProperties_${50 + index}`} className="p-6">
                  <h3 id={`FeaturedProperties_${60 + index}`} className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p id={`FeaturedProperties_${70 + index}`} className="text-gray-600 mb-4 flex items-center">
                    <svg id={`FeaturedProperties_${80 + index}`} className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                  <div id={`FeaturedProperties_${90 + index}`} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    ${property.price.toLocaleString()}
                  </div>
                  <div id={`FeaturedProperties_${100 + index}`} className="flex justify-between text-gray-600 text-sm mb-6">
                    <span id={`FeaturedProperties_${110 + index}`}>{property.bedrooms} Beds</span>
                    <span id={`FeaturedProperties_${120 + index}`}>{property.bathrooms} Baths</span>
                    <span id={`FeaturedProperties_${130 + index}`}>{property.area} sqft</span>
                  </div>
                  <button id={`FeaturedProperties_${140 + index}`} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div id="FeaturedProperties_200" className="text-center mt-12">
          <button id="FeaturedProperties_201" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;