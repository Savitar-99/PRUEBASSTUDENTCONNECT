import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast for notifications
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useTranslation } from 'react-i18next'; // Import useTranslation from i18next
import api from "../../services/api.ts";

interface FormDataState {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
  image: File | null;
}

export function RegisterStudent() {
  const [formData, setFormData] = useState<FormDataState>({
    email: "",
    password: "",
    name: "",
    lastName: "",
    phone: "",
    image: null,
  });

  const navigate = useNavigate();
  const { t } = useTranslation(); // Hook to use translations
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    // Password validation: mínimo 8 caracteres, al menos 1 número, 1 letra mayúscula
    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = "La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número";
    }

    // Teléfono validation: solo números, longitud entre 9 y 15
    if (!/^\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener entre 9 y 15 dígitos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return; // Detener si hay errores
    }

    setLoading(true);
    setError(null);
  
    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("name", formData.name);
    data.append("lastName", formData.lastName);
    data.append("phone", formData.phone);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await api.post("http://localhost:8080/auth/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Login automático
      const loginResponse = await api.post("http://localhost:8080/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Guardar token y redirigir
      localStorage.setItem("token", loginResponse.data.token);
      navigate("/student-dashboard");
      // Mostrar un toast de éxito
      toast.success(t('registration_success'));
    } catch (error) {
      toast.error(t('registration_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center w-full p-4"
      initial={{ opacity: 0 }} // Initial opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Title */}
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white">{t('create_account')} </span>
        <span className="text-[#F26F63]">{('StudentConnect')}</span>
      </motion.h1>

      {/* Form */}
      <motion.div 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          {t('student_registration')}
        </h2>

        <form onSubmit={handleRegister} encType="multipart/form-data" className="space-y-4">
          {/* Foto */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('photo')}</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
            />
          </motion.div>
          {/* Name */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('first_name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              required
            />
          </motion.div>

          {/* Last Name */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('last_name')}</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              required
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('phone_number')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,9}$/.test(value)) { // Solo números y máximo 9 dígitos
                  setFormData({ ...formData, phone: value });
                }
              }}
              pattern="[0-9]{9}"
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              title={t('phone_validation')}
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t('password')}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              required
            />
          </motion.div>

          {/* Register Button */}
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }} // Click effect
          >
            {t('register')}
          </motion.button>
        </form>

        {/* Button to go back to login */}
        <motion.button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          whileHover={{ scale: 1.05 }} // Hover effect
          whileTap={{ scale: 0.95 }} // Click effect
        >
          {t('backToLogin')}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
