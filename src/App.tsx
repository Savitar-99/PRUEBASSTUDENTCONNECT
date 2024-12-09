import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterStudent } from './components/auth/RegisterStudent';
import { PasswordRecovery } from './components/auth/PasswordRecovery';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { ProfessorDashboard } from './components/dashboard/ProfessorDashboard';
import { AboutUs } from './components/AboutUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <Route path="/register-student" element={<RegisterStudent />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<ProfessorDashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            

          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;