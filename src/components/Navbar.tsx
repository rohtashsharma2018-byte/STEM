import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';

export default function Navbar({ searchTerm = '', setSearchTerm = (t: string) => {} }: { searchTerm?: string, setSearchTerm?: (t: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
    // Auto-scroll to courses if typing
    if (e.target.value.length > 0) {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-brand-600" />
            <span className="font-heading font-bold text-2xl text-gray-900 tracking-tight hidden sm:block">STEM ACADEMY</span>
          </a>
          
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
                 {link.name}
               </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              {!isSearchOpen ? (
                <button onClick={handleSearchClick} className="p-2 text-gray-600 hover:text-brand-600 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              ) : (
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 w-64 border border-brand-200">
                  <Search className="w-4 h-4 text-brand-600 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search courses..."
                    className="bg-transparent border-none outline-none text-sm w-full text-gray-800"
                    autoFocus
                  />
                  <button onClick={() => { setIsSearchOpen(false); setSearchTerm(''); }} className="text-gray-400 hover:text-gray-900 ml-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <a href="#contact" className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-700 transition-colors shrink-0">
              Enroll Now
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button onClick={handleSearchClick} className="p-2 text-gray-600 hover:text-brand-600">
              <Search className="w-6 h-6" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900"/> : <Menu className="w-6 h-6 text-gray-900"/>}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar below header */}
        {isSearchOpen && (
          <div className="lg:hidden mt-3 mb-1">
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 border border-brand-200">
              <Search className="w-5 h-5 text-brand-600 mr-2 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search courses by name or level..."
                className="bg-transparent border-none outline-none text-base w-full text-gray-800 py-1"
                autoFocus
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-900 ml-1">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-3 p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium text-lg">
                 {link.name}
               </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-600 text-white px-6 py-3 rounded-xl font-medium text-center hover:bg-brand-700 mt-2">
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
