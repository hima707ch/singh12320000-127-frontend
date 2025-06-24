import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/users/profile');
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleLogout = () => {
    setUserProfile(null);
    navigate('/loginpage');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full"/>
              <span id="Header_3" className="ml-2 text-white font-bold text-xl hover:text-blue-200">RealEstate Hub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link id="Header_4" to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link id="Header_5" to="/propertysearchpage" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Search Properties</Link>

            {userProfile ? (
              <div className="relative">
                <button
                  id="Header_6"
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <img src={userProfile.avatar || images[1]} alt="Profile" className="h-8 w-8 rounded-full mr-2"/>
                  {userProfile.name}
                </button>

                {isProfileDropdownOpen && (
                  <div id="Header_7" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link to="/userprofilepage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/propertydetailpage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Saved Properties</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link id="Header_8" to="/loginpage" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link id="Header_9" to="/registerpage" className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md text-sm font-medium">Register</Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              id="Header_10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="Header_11" className="md:hidden pb-4">
            <Link to="/" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/propertysearchpage" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Search Properties</Link>
            {userProfile ? (
              <>
                <Link to="/userprofilepage" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Profile</Link>
                <Link to="/propertydetailpage" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Saved Properties</Link>
                <button onClick={handleLogout} className="block w-full text-left text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Logout</button>
              </>
            ) : (
              <>
                <Link to="/loginpage" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/registerpage" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Register</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;