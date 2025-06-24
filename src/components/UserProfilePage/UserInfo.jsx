import React from 'react';
import images from '../assets/images';

const UserInfo = ({ userData, isEditing, onInputChange }) => {
  const fields = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Address', key: 'address' }
  ];

  return (
    <div id="UserInfo_1" className="p-6">
      <div id="UserInfo_2" className="flex items-center mb-8">
        <img
          id="UserInfo_3"
          src={images[0] || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div id="UserInfo_4" className="space-y-6">
        {fields.map((field, index) => (
          <div id={`UserInfo_5_${index}`} key={field.key} className="grid grid-cols-3 gap-4 items-center">
            <label id={`UserInfo_6_${index}`} className="text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {isEditing ? (
              <input
                id={`UserInfo_7_${index}`}
                type="text"
                value={userData[field.key] || ''}
                onChange={(e) => onInputChange(field.key, e.target.value)}
                className="col-span-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            ) : (
              <span id={`UserInfo_8_${index}`} className="col-span-2 text-sm text-gray-900">
                {userData[field.key] || 'Not provided'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;