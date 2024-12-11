import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importar toast para notificaciones
import { motion } from 'framer-motion'; // Importar motion desde framer-motion

export function RegisterStudent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación adicional de longitud (opcional)
    if (phone.length !== 9) {
      toast.error('El número de teléfono debe tener exactamente 9 dígitos.'); // Notificación de error
      return;
    }

    // Validación de contraseñas (si fuera necesario)
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    console.log('Registrando estudiante:', { email, password, name, lastName, phone });
    toast.success('¡Registro exitoso! Bienvenido a StudentConnect.'); // Notificación de éxito
    navigate('/student-dashboard');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Permitir solo números y limitar a 9 caracteres
    if (/^\d{0,9}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center w-full p-4"
      initial={{ opacity: 0 }} // Inicializamos con opacidad 0
      animate={{ opacity: 1 }} // Animamos a opacidad 1
      transition={{ duration: 0.8 }} // Duración de la animación
    >
      {/* Título */}
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white">Crea tu cuenta en </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </motion.h1>

      {/* Formulario */}
      <motion.div 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Registro de Estudiante
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Apellido */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Número de Teléfono */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              pattern="\d{9}"
              title="El número de teléfono debe contener exactamente 9 dígitos."
              required
            />
          </motion.div>

          {/* Correo Electrónico */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Contraseña */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Botón de Registro */}
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
            whileHover={{ scale: 1.05 }} // Efecto al pasar el ratón
            whileTap={{ scale: 0.95 }} // Efecto al hacer clic
          >
            Registrarse
          </motion.button>
        </form>

        {/* Botón para volver al inicio */}
        <motion.button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          whileHover={{ scale: 1.05 }} // Efecto al pasar el ratón
          whileTap={{ scale: 0.95 }} // Efecto al hacer clic
        >
          Volver al Inicio de Sesión
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
