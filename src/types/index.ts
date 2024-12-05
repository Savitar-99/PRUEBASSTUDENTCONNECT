export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  profileImage: string;
  location: string;
}

export interface Student extends User {
  attendance: AttendanceRecord[];
  grades: Grade[];
  academicGoals: AcademicGoal;
}

export interface Teacher extends User {
  subjects: string[];
}

export interface AttendanceRecord {
  date: string;
  present: boolean;
}

export interface Grade {
  subject: string;
  value: number;
}

export interface AcademicGoal {
  career: string;
  objectives: string[];
  targetInstitution?: string;
}

export interface Subject {
  name: string;
  level: number;
  progress: number;
}
export interface Attendance {
  date: string;
  status: 'present' | 'absent' | 'justified';
}