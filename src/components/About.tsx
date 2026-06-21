import { useState } from 'react';
import { motion } from 'motion/react';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-gray-50 flex items-center shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 text-center lg:text-left items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-50 text-brand-700 border border-brand-100 mb-4 shadow-sm shadow-brand-100/40">
              Leadership
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Founder</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Prabal Pratap Singh founded STEM Academy with a singular vision: to make world-class education accessible, engaging, and highly practical. With over 20 years of experience teaching Mathematics and Economics, he understands what it takes to build a strong analytical foundation for tomorrow's challenges.
            </p>
            {expanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our mission is to cultivate a new generation of innovators, critical thinkers, and problem solvers. We believe in learning by doing, equipping our students with both rigorous theoretical knowledge and hands-on experience through project-based learning. Together, we can shape the future of technology.
                </p>
              </motion.div>
            )}
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-brand-600 font-semibold hover:text-brand-700 transition-colors mt-2 text-lg items-center inline-flex gap-2"
            >
              {expanded ? 'Read Less' : 'Read More'} <span className="text-xl">&rarr;</span>
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 rounded-[2.5rem] rotate-3 transform origin-bottom-left transition-transform hover:rotate-6"></div>
              <img 
                src="https://picsum.photos/id/1005/600/700" 
                alt="Founder Prabal Pratap Singh" 
                className="relative z-10 rounded-[2rem] shadow-xl w-full max-w-md object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-600 text-xl shadow-inner">
                  PS
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Prabal Pratap Singh</div>
                  <div className="mt-1">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                      Founder & Lead Educator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
