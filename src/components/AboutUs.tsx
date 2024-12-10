import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">Quiénes Somos</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/andreianegrului/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Andrei Anegrului</p>
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/joelgalanperez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Joel Galán Pérez</p>
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/lausierrajaramillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Laura Sierra Jaramillo</p>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-6 py-2 px-4 bg-[#F26F63] text-white rounded hover:bg-[#e25d51] transition duration-200"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
