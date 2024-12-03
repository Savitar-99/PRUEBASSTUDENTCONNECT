import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';
import { es } from 'date-fns/locale';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  attendanceData: { date: string; present: boolean }[];
}

export function Calendar({ selectedDate, onDateSelect, attendanceData }: CalendarProps) {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getAttendanceStatus = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return attendanceData.find(record => record.date === dateStr)?.present;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {format(selectedDate, 'MMMM yyyy', { locale: es })}
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
          {days.map(day => {
            const attendance = getAttendanceStatus(day);
            return (
              <button
                key={day.toString()}
                onClick={() => onDateSelect(day)}
                className={`
                  p-2 text-sm rounded-full
                  ${isToday(day) ? 'border-2 border-[#F26F63]' : ''}
                  ${!isSameMonth(day, selectedDate) ? 'text-gray-400' : ''}
                  ${attendance === true ? 'bg-green-100' : ''}
                  ${attendance === false ? 'bg-red-100' : ''}
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}