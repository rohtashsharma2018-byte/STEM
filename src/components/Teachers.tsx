import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getTeachers } from '../lib/storage';

export default function Teachers() {
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    setTeachers(getTeachers());
  }, []);

  return (
    <section id="teachers" className="py-24 bg-white shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4 shadow-sm shadow-teal-100/40">
            Our Faculty
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet the Experts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Learn from passionate educators dedicated to your success.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 shadow-sm border border-gray-100/60">
                <img src={teacher.img} alt={teacher.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">{teacher.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3 mt-1.5">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                  {teacher.subject}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                  {teacher.exp}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
