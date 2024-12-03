import React, { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import type { User } from '../../types';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const [location, setLocation] = useState(user.location);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una implementación real, aquí subiríamos la imagen
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={profileImage || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400'}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-[#F26F63] p-2 rounded-full cursor-pointer">
            <Camera className="h-5 w-5 text-white" />
            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
          </label>
        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>

        <div className="mt-4 flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-b border-gray-300 focus:border-[#F26F63] outline-none"
            placeholder="Ubicación"
          />
        </div>
      </div>
    </div>
  );
}