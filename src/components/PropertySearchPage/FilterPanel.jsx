import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Villa'];

  return (
    <div id="FilterPanel_1" className="bg-white p-6 rounded-lg shadow">
      <h2 id="FilterPanel_2" className="text-xl font-semibold mb-6">Filters</h2>
      
      <div id="FilterPanel_3" className="space-y-6">
        <div id="FilterPanel_4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            id="FilterPanel_5"
            type="text"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>

        <div id="FilterPanel_6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              id="FilterPanel_7"
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Min Price"
            />
            <input
              id="FilterPanel_8"
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Max Price"
            />
          </div>
        </div>

        <div id="FilterPanel_9">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            id="FilterPanel_10"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type.toLowerCase()}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;