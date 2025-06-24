import React from 'react';
import images from '../assets/images';

const SearchResults = ({ properties, currentPage, totalPages, onPageChange }) => {
  return (
    <div id="SearchResults_1">
      {properties.length === 0 ? (
        <div id="SearchResults_2" className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-500">No properties found matching your criteria.</p>
        </div>
      ) : (
        <div id="SearchResults_3" className="space-y-6">
          <div id="SearchResults_4" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property, index) => (
              <div
                key={property.id}
                id={`SearchResults_${5 + index}`}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={images[index % images.length] || property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                  <p className="text-gray-500">{property.location}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">{property.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div id="SearchResults_5" className="flex justify-center space-x-2 mt-8">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;