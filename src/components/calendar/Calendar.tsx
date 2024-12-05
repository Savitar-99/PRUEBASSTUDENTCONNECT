import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Attendance } from '..//../types';

interface CalendarProps {
  attendances: Attendance[];
}

export const Calendar: React.FC<CalendarProps> = ({ attendances }) => {
  const events = attendances.map(attendance => ({
    date: attendance.date,
    backgroundColor: 
      attendance.status === 'present' ? '#22c55e' :
      attendance.status === 'justified' ? '#f97316' : '#ef4444',
    display: 'background',
    classNames: ['attendance-event']
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
          <span>Presente</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
          <span>Ausente</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f97316]"></div>
          <span>Justificado</span>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today'
        }}
        locale="es"
        height="auto"
        dayCellClassNames="hover:bg-gray-50"
        nowIndicator={true}
        dayMaxEvents={true}
      />
    </div>
  );
};