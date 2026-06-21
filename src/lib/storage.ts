import { BookOpen, TestTube, Calculator, Database, Lightbulb, Compass } from 'lucide-react';

export const INITIAL_COURSES = [
  { id: 1, title: 'Class 5-8 Foundation', icon: 'Compass', level: 'Middle School', duration: '1 Year', fee: '₹15,000' },
  { id: 2, title: 'Class 9-10 Board Prep', icon: 'Lightbulb', level: 'High School', duration: '1 Year', fee: '₹25,000' },
  { id: 3, title: 'Class 11-12 PCM / PCB', icon: 'TestTube', level: 'Senior Sec.', duration: '1 Year', fee: '₹35,000' },
  { id: 4, title: 'Class 11-12 Commerce', icon: 'Database', level: 'Senior Sec.', duration: '1 Year', fee: '₹30,000' },
  { id: 5, title: 'Mathematics Special', icon: 'Calculator', level: 'Grade 9-12', duration: '6 Months', fee: '₹12,000' },
  { id: 6, title: 'Economics Special', icon: 'BookOpen', level: 'Grade 11-12', duration: '6 Months', fee: '₹12,000' },
];

export const INITIAL_TEACHERS = [
  { id: 1, name: 'Rahul Sharma', subject: 'Physics', exp: '15+ Years', img: 'https://picsum.photos/seed/rahul/400/500', bio: 'Former senior evaluator for board exams. Exceptional at making complex concepts simple.' },
  { id: 2, name: 'Dr. Meera Patel', subject: 'Chemistry & Biology', exp: '20+ Years', img: 'https://picsum.photos/id/1027/400/500', bio: 'Published researcher. Passionate about practical sciences and securing top board scores.' },
  { id: 3, name: 'Vikram Singh', subject: 'Mathematics', exp: '12+ Years', img: 'https://picsum.photos/id/1012/400/500', bio: 'Specializes in foundation building for middle school and advanced topics for senior secondary.' },
  { id: 4, name: 'Anita Desai', subject: 'Economics & Commerce', exp: '10+ Years', img: 'https://picsum.photos/id/1011/400/500', bio: 'Commerce expert. Helps students master Accountancy and Economics beyond textbooks.' },
];

export function getCourses() {
  const stored = localStorage.getItem('stem_courses');
  if (stored) return JSON.parse(stored);
  return INITIAL_COURSES;
}

export function saveCourses(courses: any[]) {
  localStorage.setItem('stem_courses', JSON.stringify(courses));
}

export function getTeachers() {
  const stored = localStorage.getItem('stem_teachers');
  if (stored) return JSON.parse(stored);
  return INITIAL_TEACHERS;
}

export function saveTeachers(teachers: any[]) {
  localStorage.setItem('stem_teachers', JSON.stringify(teachers));
}

export const ICONS: Record<string, any> = {
  BookOpen, TestTube, Calculator, Database, Lightbulb, Compass
};
