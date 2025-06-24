import React, { useEffect, useState } from 'react';
import images from '../assets/images';

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <section id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background SVG Shapes */}
      <div id="Hero_2" className="absolute inset-0 opacity-10">
        <svg id="Hero_3" className="absolute top-10 left-10 w-32 h-32 text-white" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg id="Hero_4" className="absolute top-1/3 right-20 w-24 h-24 text-blue-300" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="currentColor" />
        </svg>
        <svg id="Hero_5" className="absolute bottom-20 left-1/4 w-40 h-40 text-purple-300" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="currentColor" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div id="Hero_6" className="container mx-auto px-4 py-20 relative z-10">
        <div id="Hero_7" className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div id="Hero_8" className={`space-y-8 ${isAnimated ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h1 id="Hero_9" className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Find Your Perfect
              <span id="Hero_10" className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dream 
                <span id="Hero_11" className={`inline-block ${isAnimated ? 'animate-slide-up' : ''}`}>
                  Home
                </span>
              </span>
            </h1>
            <p id="Hero_12" className="text-xl text-blue-100 max-w-lg">
              Discover premium properties in the most desirable locations. Your journey to finding the perfect home starts here.
            </p>
            <div id="Hero_13" className="flex flex-col sm:flex-row gap-4">
              <button id="Hero_14" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Searching
              </button>
              <button id="Hero_15" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div id="Hero_16" className={`${isAnimated ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div id="Hero_17" className="relative">
              <img id="Hero_18" src={images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} alt="Dream Home" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
              <div id="Hero_19" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.5s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;