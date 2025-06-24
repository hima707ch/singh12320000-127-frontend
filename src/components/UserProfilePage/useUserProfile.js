import { useState, useEffect } from 'react';

export const useUserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch user data
    const fetchUserData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual API call
        setUserData({
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 234 567 8900',
          address: '123 Main St, City, Country'
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // Simulate API call to update user data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsEditing(false);
      // Add actual API call here
    } catch (err) {
      setError('Failed to update user data');
    }
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return {
    userData,
    isEditing,
    handleEdit,
    handleSave,
    handleInputChange,
    loading,
    error
  };
};