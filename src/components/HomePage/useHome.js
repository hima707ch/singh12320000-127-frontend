import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/properties/search');
      
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch properties');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error fetching properties:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const searchProperties = async (searchParams) => {
    try {
      setIsLoading(true);
      const queryString = new URLSearchParams(searchParams).toString();
      const response = await fetch(`/api/properties/search?${queryString}`);
      
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
        return data;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to search properties');
        return [];
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error searching properties:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getPropertyById = async (id) => {
    try {
      const response = await fetch(`/api/properties/${id}`);
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch property');
      }
    } catch (err) {
      console.error('Error fetching property by ID:', err);
      throw err;
    }
  };

  const submitContactForm = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error || 'Failed to submit form' };
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      return { success: false, error: 'Network error occurred' };
    }
  };

  return {
    properties,
    isLoading,
    error,
    searchProperties,
    getPropertyById,
    submitContactForm,
    refetchProperties: fetchProperties
  };
};

export default useHome;