import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [propertyType, setPropertyType] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/properties/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: searchQuery,
          priceRange,
          propertyType
        })
      });
      const data = await response.json();
      navigate('/propertysearchpage', { state: { searchResults: data } });
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_1">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300">PropertyFinder</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-10" id="Header_2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location..."
                className="w-full px-4 py-2 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="absolute right-14 top-2 text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button
                onClick={handleSearch}
                className="absolute right-2 top-2 text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {isFilterOpen && (
              <div className="absolute mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-10" id="Header_3">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price Range</label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-24 px-2 py-1 border rounded"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-24 px-2 py-1 border rounded"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Property Type</label>
                    <select
                      className="mt-1 block w-full px-2 py-1 border rounded"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">All Types</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          <nav className="flex items-center space-x-6" id="Header_4">
            <Link to="/propertysearchpage" className="text-white hover:text-blue-200 transition duration-300">Properties</Link>
            <Link to="/userprofilepage" className="text-white hover:text-blue-200 transition duration-300">Profile</Link>
            <Link to="/loginpage" className="px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-100 transition duration-300">Login</Link>
            <Link to="/registerpage" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition duration-300">Register</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;