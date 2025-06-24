import React, { useState } from 'react';

const CallToAction = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          propertyId: 'general-inquiry'
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div id="CallToAction_2" className="absolute inset-0 opacity-10">
        <svg id="CallToAction_3" className="absolute top-20 left-10 w-40 h-40 text-white" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg id="CallToAction_4" className="absolute bottom-20 right-20 w-32 h-32 text-purple-300" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="currentColor" />
        </svg>
      </div>

      <div id="CallToAction_5" className="container mx-auto px-4 relative z-10">
        <div id="CallToAction_6" className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div id="CallToAction_7" className="text-white">
            <h2 id="CallToAction_8" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your
              <span id="CallToAction_9" className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dream Home?
              </span>
            </h2>
            <p id="CallToAction_10" className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let our expert team guide you through every step of your real estate journey. From finding the perfect property to closing the deal, we're here to make your dreams a reality.
            </p>
            
            <div id="CallToAction_11" className="space-y-4">
              <div id="CallToAction_12" className="flex items-center space-x-3">
                <div id="CallToAction_13" className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_14" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span id="CallToAction_15" className="text-blue-100">Free property consultation</span>
              </div>
              <div id="CallToAction_16" className="flex items-center space-x-3">
                <div id="CallToAction_17" className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_18" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span id="CallToAction_19" className="text-blue-100">Market analysis and insights</span>
              </div>
              <div id="CallToAction_20" className="flex items-center space-x-3">
                <div id="CallToAction_21" className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <svg id="CallToAction_22" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span id="CallToAction_23" className="text-blue-100">End-to-end support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div id="CallToAction_24" className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div id="CallToAction_25" className="text-center py-8">
                <div id="CallToAction_26" className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg id="CallToAction_27" className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 id="CallToAction_28" className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p id="CallToAction_29" className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form id="CallToAction_30" onSubmit={handleSubmit}>
                <h3 id="CallToAction_31" className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                
                <div id="CallToAction_32" className="space-y-4">
                  <div id="CallToAction_33">
                    <label id="CallToAction_34" htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="CallToAction_35"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div id="CallToAction_36">
                    <label id="CallToAction_37" htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="CallToAction_38"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div id="CallToAction_39">
                    <label id="CallToAction_40" htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="CallToAction_41"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your dream home..."
                    />
                  </div>
                  
                  <button
                    id="CallToAction_42"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;