import React from 'react';
import UserInfo from './UserInfo';
import EditProfileButton from './EditProfileButton';
import { useUserProfile } from './useUserProfile';
import images from '../assets/images';

const Body = () => {
  const { userData, isEditing, handleEdit, handleSave, handleInputChange, loading, error } = useUserProfile();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen flex items-center justify-center">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_4" className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div id="Body_5" className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
          <h2 id="Body_6" className="text-2xl font-bold text-gray-900">Profile Information</h2>
          <p id="Body_7" className="mt-1 text-sm text-gray-500">Manage your personal information and account settings</p>
        </div>
        <UserInfo userData={userData} isEditing={isEditing} onInputChange={handleInputChange} />
        <EditProfileButton isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} />
      </div>
    </div>
  );
};

export default Body;