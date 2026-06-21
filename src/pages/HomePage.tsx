import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Teachers from '../components/Teachers';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="font-sans text-gray-900 antialiased font-normal selection:bg-brand-500 selection:text-white flex flex-col min-h-screen">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />
      <StatsBar />
      <About />
      <Courses searchTerm={searchTerm} />
      <WhyChooseUs />
      <Teachers />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
