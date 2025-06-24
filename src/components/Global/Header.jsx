import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/properties/1');
        const data = await response.json();
        if (data) {
          setIsLoggedIn(true);
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };
    checkAuth();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/propertysearchpage', { state: { query: searchQuery } });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center" id="Header_1">
            <Link to="/" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="ml-3 text-xl font-bold text-white hover:text-blue-200 transition-colors">PropertyHub</span>
            </Link>
          </div>

          <div className="flex-1 max-w-xl mx-12" id="Header_2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6" id="Header_3">
            <Link to="/propertysearchpage" className="text-white hover:text-blue-200 transition-colors">Browse</Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/userprofilepage" className="flex items-center space-x-2">
                  <img src={images[1]} alt="Profile" className="h-8 w-8 rounded-full border-2 border-white" />
                  <span className="text-white hover:text-blue-200 transition-colors">Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/loginpage"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/registerpage"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;