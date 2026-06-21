import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10 text-gray-400 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-brand-500" />
              <span className="font-heading font-bold text-2xl text-white">STEM ACADEMY</span>
            </a>
            <p className="mb-6 leading-relaxed">Empowering the next generation of innovators through rigorous, world-class education in Science, Technology, Engineering, and Mathematics.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Courses</a></li>
              <li><a href="#teachers" className="hover:text-brand-400 transition-colors">Faculty</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Computer Science</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Advanced Mathematics</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Data Science & AI</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Robotics Engineering</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Physics & Astrodynamics</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} STEM Academy. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="/admin" className="text-gray-800 hover:text-gray-600 transition-colors ml-4" aria-label="Admin Portal">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
