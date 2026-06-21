import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: "What are the admission requirements?", a: "Admission requirements vary by course. Generally, we look for a strong foundational understanding of math and science, along with a passion for learning. Beginners' courses require no prior experience." },
  { q: "Do you offer financial aid or scholarships?", a: "Yes. We believe education should be accessible. We offer partial scholarships based on merit and financial need. Please contact our admissions office for details." },
  { q: "Will this help with my board exams?", a: "Absolutely. Our courses strictly follow the NCERT syllabus from Grade 5 to 12, ensuring complete preparation for school academics and board excellence." },
  { q: "Can I switch courses after enrolling?", a: "Yes, you can switch to a different course within the first 14 days of enrollment without any additional fees, provided there are seats available in the target course." },
  { q: "What is the student-to-teacher ratio?", a: "We maintain a strict 15:1 student-to-teacher ratio for our live sessions to ensure personalized attention and effective doubt-clearing for every student." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 shrink-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100 mb-4 shadow-sm shadow-fuchsia-100/40">
            Support
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-lg text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
