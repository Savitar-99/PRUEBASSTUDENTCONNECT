import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { TeacherDashboard } from './components/dashboard/TeacherDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
                <h1 className="text-4xl font-bold text-white text-center">
                  Bienvenido a <span className="text-[#F26F63]">StudentConnect</span>
                </h1>
                <div className="w-full max-w-md">
                  <LoginForm />
                </div>
              </div>
            } />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;