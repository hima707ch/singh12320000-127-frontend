import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      if (response.ok) {
        setIsLoggedIn(false);
        navigate('/loginpage');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 fixed w-full z-50 top-0">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
              <span id="Header_3" className="text-white text-xl font-bold">PropertyHub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link id="Header_4" to="/" className="text-white hover:text-blue-200 transition duration-300">Home</Link>
            <Link id="Header_5" to="/propertysearchpage" className="text-white hover:text-blue-200 transition duration-300">Search Properties</Link>
            {isLoggedIn ? (
              <div className="relative">
                <button
                  id="Header_6"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center text-white hover:text-blue-200 transition duration-300"
                >
                  <img src={images[1]} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                  My Account
                </button>
                {isProfileOpen && (
                  <div id="Header_7" className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                    <Link to="/userprofilepage" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Profile</Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  id="Header_8"
                  to="/loginpage"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  id="Header_9"
                  to="/registerpage"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            id="Header_10"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="Header_11" className="md:hidden mt-4">
            <Link to="/" className="block text-white py-2 hover:text-blue-200">Home</Link>
            <Link to="/propertysearchpage" className="block text-white py-2 hover:text-blue-200">Search Properties</Link>
            {isLoggedIn ? (
              <>
                <Link to="/userprofilepage" className="block text-white py-2 hover:text-blue-200">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="block text-white py-2 hover:text-blue-200 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/loginpage" className="block text-white py-2 hover:text-blue-200">Login</Link>
                <Link to="/registerpage" className="block text-white py-2 hover:text-blue-200">Register</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;