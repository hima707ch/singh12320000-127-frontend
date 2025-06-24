import React from 'react';
import ImageGallery from './ImageGallery';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import usePropertyDetail from './usePropertyDetail';

const Body = () => {
  const { property, loading, error, handleContactSubmit } = usePropertyDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;
  if (!property) return null;

  return (
    <div id="Body_3" className="max-w-7xl mx-auto px-4 py-8">
      <ImageGallery images={property.images} />
      <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div id="Body_5" className="lg:col-span-2">
          <PropertyDetails property={property} />
        </div>
        <div id="Body_6" className="lg:col-span-1">
          <ContactForm onSubmit={handleContactSubmit} propertyId={property.id} />
        </div>
      </div>
    </div>
  );
};

export default Body;