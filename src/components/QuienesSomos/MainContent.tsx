import React from 'react';
import { Users, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function MainContent() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-4 -mt-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 backdrop-blur-lg bg-opacity-90">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#F26F63]" />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('nuestraMision')}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('facilitamosSeguimiento')}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-[#F26F63]" />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('nuestraPropuesta')}
              </h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#F26F63] rounded-full"></span>
                {t('gestionAcademicaSimplificada')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#F26F63] rounded-full"></span>
                {t('asesoramientoPersonalizado')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#F26F63] rounded-full"></span>
                {t('planificacionEducativaIntuitiva')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
