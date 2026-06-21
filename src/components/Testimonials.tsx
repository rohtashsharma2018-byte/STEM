import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Aarav Sharma', course: 'Class 9-10 Board Prep', img: 'https://picsum.photos/id/65/100/100', quote: 'The instructors here are phenomenal. I went from struggling with maths to scoring an A1 in my CBSE board exams.', rating: 5 },
  { id: 2, name: 'Priya Patel', course: 'Class 11-12 PCM', img: 'https://picsum.photos/id/66/100/100', quote: 'A rigorous curriculum that truly prepares you for both boards and JEE. The regular mock test series was fantastic.', rating: 5 },
  { id: 3, name: 'Ananya Gupta', course: 'Class 5-8 Foundation', img: 'https://picsum.photos/id/67/100/100', quote: 'My basics are so much clearer now! The teachers make learning science incredibly effective and prepare you well for NTSE.', rating: 4 },
  { id: 4, name: 'Rohan Desai', course: 'Class 11-12 Commerce', img: 'https://picsum.photos/id/68/100/100', quote: 'Highly recommend! The depth of knowledge of the commerce faculty is unmatched. Helped me top my batch in Accountancy.', rating: 5 },
  { id: 5, name: 'Kavita Singh', course: 'Mathematics Special', img: 'https://picsum.photos/id/69/100/100', quote: 'The study materials and assignments were surprisingly intuitive. Great experience overall and my calculus improved immensely.', rating: 5 },
  { id: 6, name: 'Aditya Kumar', course: 'Economics Special', img: 'https://picsum.photos/id/70/100/100', quote: 'Macro and Micro Economics finally make sense! Outstanding teaching methodology and ample doubt-clearing sessions.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900 bg-opacity-95 overflow-hidden shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4 shadow-sm shadow-rose-500/5">
          Testimonials
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Student Success Stories</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 px-4">
          {testimonials.concat(testimonials).map((item, idx) => (
            <div key={idx} className="w-[350px] inline-block bg-white p-8 rounded-3xl shrink-0 white-space-normal text-wrap shadow-xl">
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 h-24 line-clamp-4">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-100" />
                <div>
                  <div className="font-bold text-gray-900">{item.name}</div>
                  <div className="mt-1">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                      {item.course}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
