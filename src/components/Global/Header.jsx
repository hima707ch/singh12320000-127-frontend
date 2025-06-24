import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-600';
  };

  return (
    <header id="Header_1" className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DreamHome</span>
          </Link>

          <div className="hidden md:flex space-x-8" id="Header_3">
            <Link to="/" className={`${isActive('/')} hover:text-blue-500 transition-colors duration-200 font-semibold`}>Home</Link>
            <Link to="/propertysearchpage" className={`${isActive('/propertysearchpage')} hover:text-blue-500 transition-colors duration-200 font-semibold`}>Search</Link>
            <Link to="/propertydetailpage" className={`${isActive('/propertydetailpage')} hover:text-blue-500 transition-colors duration-200 font-semibold`}>Properties</Link>
            <Link to="/userprofilepage" className={`${isActive('/userprofilepage')} hover:text-blue-500 transition-colors duration-200 font-semibold`}>Profile</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_4">
            <Link to="/loginpage" className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 font-semibold">Login</Link>
            <Link to="/registerpage" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">Register</Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            id="Header_5"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4" id="Header_6">
            <Link to="/" className={`block py-2 ${isActive('/')} hover:text-blue-500`}>Home</Link>
            <Link to="/propertysearchpage" className={`block py-2 ${isActive('/propertysearchpage')} hover:text-blue-500`}>Search</Link>
            <Link to="/propertydetailpage" className={`block py-2 ${isActive('/propertydetailpage')} hover:text-blue-500`}>Properties</Link>
            <Link to="/userprofilepage" className={`block py-2 ${isActive('/userprofilepage')} hover:text-blue-500`}>Profile</Link>
            <Link to="/loginpage" className="block py-2 text-gray-600 hover:text-blue-500">Login</Link>
            <Link to="/registerpage" className="block py-2 text-gray-600 hover:text-blue-500">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;