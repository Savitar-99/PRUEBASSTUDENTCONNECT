import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast for notifications
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function RegisterStudent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Additional length validation (optional)
    if (phone.length !== 9) {
      toast.error('Phone number must have exactly 9 digits.'); // Error notification
      return;
    }

    // Password validation (if needed)
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    console.log('Registering student:', { email, password, name, lastName, phone });
    toast.success('Registration successful! Welcome to StudentConnect.'); // Success notification
    navigate('/student-dashboard');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers and limit to 9 characters
    if (/^\d{0,9}$/.test(value)) {
      setPhone(value);
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
        <span className="text-white">Create your account on </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </motion.h1>

      {/* Form */}
      <motion.div 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Last Name */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              pattern="\d{9}"
              title="Phone number must contain exactly 9 digits."
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
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
            Register
          </motion.button>
        </form>

        {/* Button to go back to login */}
        <motion.button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          whileHover={{ scale: 1.05 }} // Hover effect
          whileTap={{ scale: 0.95 }} // Click effect
        >
          Back to Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
