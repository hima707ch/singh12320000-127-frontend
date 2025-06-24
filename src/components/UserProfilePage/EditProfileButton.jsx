import React from 'react';

const EditProfileButton = ({ isEditing, onEdit, onSave }) => {
  return (
    <div id="EditProfileButton_1" className="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <button
        id="EditProfileButton_2"
        onClick={isEditing ? onSave : onEdit}
        className={`w-full sm:w-auto px-4 py-2 rounded-md text-sm font-medium shadow-sm ${
          isEditing
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default EditProfileButton;