import React, { useState, useEffect } from 'react';
import { User } from '../../types';
import { Phone, Mail, School, Camera } from 'lucide-react';

interface UserProfileProps {
  user: User;
  editable?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, editable = false }) => {
  const [photo, setPhoto] = useState<string | null>(null);

  // Cargar la foto desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedPhoto = localStorage.getItem('userPhoto'); // Recuperar la foto guardada
    if (savedPhoto) {
      setPhoto(savedPhoto); // Establecer la foto si existe
    }
  }, []);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Crear un URL temporal para la previsualización de la imagen
      const photoUrl = URL.createObjectURL(file);
      
      // Establecer la URL temporal en el estado para mostrar la imagen
      setPhoto(photoUrl);
  
      // Aquí, si quieres subir la imagen a un servidor o almacenamiento en la nube, 
      // debes realizar esa acción antes de finalizar este proceso.
    }
  };
  
      // Aquí puedes enviar la ruta a tu backend si lo necesitas       // 

      // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //   const file = event.target.files?.[0];
      //   if (file) {
      //     const reader = new FileReader();
      //     reader.onload = () => {
      //       const imageUrl = reader.result as string;
      //       setPhoto(imageUrl); // Establecer la nueva imagen

      //       // Guardar la URL de la imagen en localStorage para persistencia
      //       localStorage.setItem('userPhoto', imageUrl);
      //     };
      //     reader.readAsDataURL(file);
      //   }
      // };

      return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <div className="relative">
            {/* Foto de perfil */}
            <img
              src={photo || '../assets/perfilfoto.webp'} // Usamos la imagen subida o la predeterminada
              alt={`${user.name} ${user.lastName}`}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            {/* Botón con ícono de cámara */}
            {editable && (
              <div className="absolute bottom-0 right-1/2 translate-x-12 translate-y-2">
                <label
                  htmlFor="upload-photo"
                  className="bg-[#F26F63] p-2 rounded-full text-white hover:bg-opacity-90 transition-colors cursor-pointer flex items-center justify-center"
                >
                  <Camera size={20} />
                </label>
                <input
                  id="upload-photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange} // Manejar el cambio de imagen
                />
              </div>
            )}
          </div>

          {/* Información del usuario */}
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
