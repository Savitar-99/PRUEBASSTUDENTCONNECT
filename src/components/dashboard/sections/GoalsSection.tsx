import React, { useState } from 'react';
import { Rocket, BookOpen, Building, Plus, X, Save, Edit2, Award } from 'lucide-react';

interface Goal {
  id: string;
  text: string;
}

export function GoalsSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [career, setCareer] = useState('Ingeniero de Software');
  const [targetUniversity, setTargetUniversity] = useState('Universidad Politécnica de Madrid');
  const [academicGoals, setAcademicGoals] = useState<Goal[]>([
    { id: '1', text: 'Certificación en desarrollo web' },
    { id: '2', text: 'Aprender inglés avanzado' },
    { id: '3', text: 'Participar en proyectos de investigación' },
  ]);
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setAcademicGoals([
        ...academicGoals,
        { id: Date.now().toString(), text: newGoal.trim() }
      ]);
      setNewGoal('');
    }
  };

  const handleRemoveGoal = (id: string) => {
    setAcademicGoals(academicGoals.filter(goal => goal.id !== id));
  };

  const handleSave = () => {
    // En una implementación real, aquí se enviarían los datos al backend
    setIsEditing(false);
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-end">
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="text-[#F26F63] hover:text-[#e25d51] flex items-center"
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-1" />
              Guardar
            </>
          ) : (
            <>
              <Edit2 className="h-4 w-4 mr-1" />
              Editar
            </>
          )}
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-2">
          <Rocket className="h-5 w-5 text-[#F26F63] mr-2" />
          <h3 className="font-semibold">Objetivo Profesional</h3>
        </div>
        {isEditing ? (
          <input
            type="text"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
          />
        ) : (
          <p className="text-gray-600">{career}</p>
        )}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-2">
          <BookOpen className="h-5 w-5 text-[#F26F63] mr-2" />
          <h3 className="font-semibold">Objetivos Académicos</h3>
        </div>
        <ul className="space-y-2">
          {academicGoals.map((goal) => (
            <li key={goal.id} className="flex items-center text-gray-600">
              {isEditing ? (
                <>
                  <span className="flex-1">{goal.text}</span>
                  <button
                    onClick={() => handleRemoveGoal(goal.id)}
                    className="text-red-500 hover:text-red-600 ml-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-gray-400" />
                  {goal.text}
                </div>
              )}
            </li>
          ))}
          {isEditing && (
            <li className="flex items-center mt-2">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Nuevo objetivo..."
                className="flex-1 p-2 border rounded-l focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
              />
              <button
                onClick={handleAddGoal}
                className="bg-[#F26F63] text-white p-2 rounded-r hover:bg-[#e25d51]"
              >
                <Plus className="h-4 w-4" />
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-2">
          <Building className="h-5 w-5 text-[#F26F63] mr-2" />
          <h3 className="font-semibold">Universidad Objetivo</h3>
        </div>
        {isEditing ? (
          <input
            type="text"
            value={targetUniversity}
            onChange={(e) => setTargetUniversity(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
          />
        ) : (
          <p className="text-gray-600">{targetUniversity}</p>
        )}
      </div>
    </div>
  );
}