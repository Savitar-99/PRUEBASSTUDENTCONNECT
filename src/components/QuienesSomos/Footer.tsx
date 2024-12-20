import React from 'react';
import { Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-4 text-center">
      <div className="max-w-5xl mx-auto border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a 
              href="/" 
              className="text-[#F26F63] hover:text-[#e25d51] transition-all duration-300 hover:scale-105"
            >
              {t('iniciarSesion')}
            </a>
            <a 
              href="/register-student" 
              className="text-[#F26F63] hover:text-[#e25d51] transition-all duration-300 hover:scale-105"
            >
              {t('registrarse')}
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/andreianegrului/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>Andrei Anegrului</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joelgalanperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>Joel Galán</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lausierrajaramillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>Laura Sierra</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            &copy; 2024 StudentConnect. {t('todosDerechosReservados')}
          </p>
        </div>
      </div>
    </footer>
  );
}
