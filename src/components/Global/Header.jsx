import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await fetch('/api/properties/featured');
        const data = await response.json();
        setFeaturedProperties(data);
      } catch (error) {
        console.error('Error fetching featured properties:', error);
      }
    };
    fetchFeaturedProperties();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span id="Header_3" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DreamHome</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link id="Header_4" to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <Link id="Header_5" to="/propertysearchpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Search Properties</Link>
            <div id="Header_6" className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Featured</button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                {featuredProperties.slice(0, 3).map((property, index) => (
                  <Link
                    key={index}
                    to="/propertydetailpage"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {property.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link id="Header_7" to="/loginpage" className="px-6 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Login</Link>
            <Link id="Header_8" to="/registerpage" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300">Sign Up</Link>
          </div>

          <button
            id="Header_9"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
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

        {isMenuOpen && (
          <div id="Header_10" className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/propertysearchpage" className="block py-2 text-gray-700 hover:text-blue-600">Search Properties</Link>
            <Link to="/loginpage" className="block py-2 text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/registerpage" className="block py-2 text-gray-700 hover:text-blue-600">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;