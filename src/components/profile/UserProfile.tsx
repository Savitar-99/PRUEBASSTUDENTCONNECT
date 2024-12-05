import React from 'react';
import { User } from '../../types';
import { Phone, Mail, School, Camera } from 'lucide-react';

interface UserProfileProps {
  user: User;
  editable?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, editable = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="relative">
        <img
          src={user.photoUrl || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
          alt={`${user.name} ${user.lastName}`}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        {editable && (
          <button className="absolute bottom-0 right-1/2 translate-x-12 translate-y-2 bg-[#F26F63] p-2 rounded-full text-white hover:bg-opacity-90 transition-colors">
            <Camera size={20} />
          </button>
        )}
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        {user.name} {user.lastName}
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
          <Phone size={20} className="text-[#F26F63]" />
          <span>{user.phone}</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Mail size={20} className="text-[#F26F63]" />
          <span>{user.email}</span>
        </div>

        {user.school && (
          <div className="flex items-center gap-3 text-gray-600">
            <School size={20} className="text-[#F26F63]" />
            <span>{user.school}</span>
          </div>
        )}
      </div>
    </div>
  );
};