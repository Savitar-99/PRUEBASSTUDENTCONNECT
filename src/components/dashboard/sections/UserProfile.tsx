import React, { useState, useEffect } from 'react';
import { Phone, Mail, School, Camera } from 'lucide-react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { useTranslation } from 'react-i18next';

export const UserProfile: React.FC<any> = ({ user, editable = false }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation(); 

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Crear un URL temporal para la previsualización de la imagen
      handleChangeFoto(file);
    }
  };
  const handleChangeFoto = async (file : File) => {
    setLoading(true);
    const data = new FormData();
    data.append("idPersona", user.idPersona);
    if (file) {
      data.append("image", file);
    }

    try {
      const response = await api.post("http://localhost:8080/api/personas/cambiarFoto", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Actualizar la foto del usuario
      const getPersonaIdResponse = await api.get("http://localhost:8080/api/personas/"+user.idPersona);

      user.foto = getPersonaIdResponse.data.foto;
      localStorage.setItem("user", JSON.stringify(getPersonaIdResponse.data));
      // Mostrar un toast de éxito
      toast.success(t('photo_updated'));
    } catch (error) {
      toast.error(t('photo_error'));
    } finally {
      setLoading(false);
    }
  };
      

      return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <div className="relative">
            {/* Foto de perfil */}
            <img
              src={user.foto != null? `data:image/jpeg;base64,${user.foto}` : '/assets/perfilfoto.webp'} // Usamos la imagen subida o la predeterminada
              alt={`${user.nombre} ${user.apellido}`}
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
            {user.nombre} {user.apellido}
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={20} className="text-[#F26F63]" />
              <span>{user.telefono}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={20} className="text-[#F26F63]" />
              <span>{user.email}</span>
            </div>

            {user.escuela && (
              <div className="flex items-center gap-3 text-gray-600">
                <School size={20} className="text-[#F26F63]" />
                <span>{user.escuela}</span>
              </div>
            )}
          </div>
        </div>
      );
    };
