import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-gray-50">
      <div id="AboutUs_2" className="container mx-auto px-4">
        <div id="AboutUs_3" className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div id="AboutUs_4" className="space-y-8">
            <div id="AboutUs_5">
              <h2 id="AboutUs_6" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our
                <span id="AboutUs_7" className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Real Estate Journey
                </span>
              </h2>
              <p id="AboutUs_8" className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the real estate industry, we've helped thousands of families find their perfect homes. Our commitment to excellence and personalized service sets us apart.
              </p>
            </div>
            
            <div id="AboutUs_9" className="grid grid-cols-2 gap-8">
              <div id="AboutUs_10" className="text-center">
                <div id="AboutUs_11" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p id="AboutUs_12" className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div id="AboutUs_13" className="text-center">
                <div id="AboutUs_14" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <p id="AboutUs_15" className="text-gray-600 font-medium">Happy Families</p>
              </div>
              <div id="AboutUs_16" className="text-center">
                <div id="AboutUs_17" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  250+
                </div>
                <p id="AboutUs_18" className="text-gray-600 font-medium">Properties Sold</p>
              </div>
              <div id="AboutUs_19" className="text-center">
                <div id="AboutUs_20" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p id="AboutUs_21" className="text-gray-600 font-medium">Satisfaction Rate</p>
              </div>
            </div>

            <div id="AboutUs_22" className="space-y-4">
              <div id="AboutUs_23" className="flex items-center space-x-3">
                <div id="AboutUs_24" className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p id="AboutUs_25" className="text-gray-700">Expert market knowledge and insights</p>
              </div>
              <div id="AboutUs_26" className="flex items-center space-x-3">
                <div id="AboutUs_27" className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p id="AboutUs_28" className="text-gray-700">Personalized service for every client</p>
              </div>
              <div id="AboutUs_29" className="flex items-center space-x-3">
                <div id="AboutUs_30" className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p id="AboutUs_31" className="text-gray-700">Comprehensive property management</p>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div id="AboutUs_32" className="relative">
            <div id="AboutUs_33" className="grid grid-cols-2 gap-4">
              <img id="AboutUs_34" src={images[1] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} alt="Modern Home" className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img id="AboutUs_35" src={images[2] || 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} alt="Luxury Interior" className="rounded-lg shadow-lg h-48 w-full object-cover mt-8" />
              <img id="AboutUs_36" src={images[3] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} alt="Beautiful Garden" className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8" />
              <img id="AboutUs_37" src={images[4] || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} alt="City View" className="rounded-lg shadow-lg h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;