import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  { img: "https://picsum.photos/id/1/1920/1080", alt: "Students working on laptops" },
  { img: "https://picsum.photos/id/2/1920/1080", alt: "Laboratory experiment" },
  { img: "https://picsum.photos/id/3/1920/1080", alt: "Robotics equipment" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].img}
          alt={slides[currentSlide].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center text-white mt-16">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Empower Your Future with <span className="text-brand-500">STEM</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200"
        >
          World-class education in Science, Technology, Engineering, and Mathematics. Ignite your curiosity today.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#courses" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors">
            Explore Courses
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors">
            Book Free Demo
          </a>
        </motion.div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition-colors hidden md:block">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition-colors hidden md:block">
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
}
