import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt={t('estudiantesColaborando')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <GraduationCap className="w-16 h-16 text-[#F26F63] mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-center">
          StudentConnect
        </h1>
        <p className="text-xl max-w-2xl text-center text-gray-100">
          {t('construyendoFuturoEducacion')}
        </p>
      </div>
    </div>
  );
}
