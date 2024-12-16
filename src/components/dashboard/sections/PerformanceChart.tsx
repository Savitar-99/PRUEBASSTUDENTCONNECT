import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Subject } from '../../types';
import i18n from 'i18next'; // Importa i18n para las traducciones

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PerformanceChartProps {
  subjects: Subject[];
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ subjects }) => {
  const data = {
    labels: subjects.map(subject => subject.name),
    datasets: [
      {
        label: i18n.t('progressLevel'), // Traducido con i18n
        data: subjects.map(subject => subject.progress),
        backgroundColor: '#F26F63',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: i18n.t('performanceBySubject'), // Traducido con i18n
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Bar options={options} data={data} />
    </div>
  );
};
