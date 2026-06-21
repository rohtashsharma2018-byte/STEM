import { CheckCircle2, Users, BookOpen, Laptop, Clock, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: Users, title: 'Expert Faculty', desc: 'Learn directly from industry professionals and seasoned educators.', color: 'indigo' },
  { icon: CheckCircle2, title: 'Doubt Sessions', desc: '1-on-1 personalized doubt clearing sessions every weekend.', color: 'emerald' },
  { icon: BookOpen, title: 'Study Material', desc: 'Comprehensive, up-to-date study guides and digital resources.', color: 'purple' },
  { icon: Laptop, title: 'Online + Offline', desc: 'Flexible learning modes to suit your personal schedule.', color: 'amber' },
  { icon: Clock, title: 'Lifetime Access', desc: 'Revisit recorded lectures anytime, anywhere, forever.', color: 'rose' },
  { icon: Trophy, title: 'Certification', desc: 'Earn globally recognized certificates upon course completion.', color: 'cyan' },
];

export default function WhyChooseUs() {
  const getColorStyles = (color: string) => {
    switch (color) {
      case 'indigo':
        return {
          bg: 'bg-indigo-50 border border-indigo-100/70',
          text: 'text-indigo-600',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50 border border-emerald-100/70',
          text: 'text-emerald-600',
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 border border-purple-100/70',
          text: 'text-purple-600',
        };
      case 'amber':
        return {
          bg: 'bg-amber-50 border border-amber-100/70',
          text: 'text-amber-600',
        };
      case 'rose':
        return {
          bg: 'bg-rose-50 border border-rose-100/70',
          text: 'text-rose-600',
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-50 border border-cyan-100/70',
          text: 'text-cyan-600',
        };
      default:
        return {
          bg: 'bg-brand-50 border border-brand-100/70',
          text: 'text-brand-600',
        };
    }
  };

  return (
    <section className="py-24 bg-gray-50 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-50 text-amber-700 border border-amber-100 mb-4 shadow-sm shadow-amber-100/40">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">The STEM Academy Advantage</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const styles = getColorStyles(feature.color);
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shrink-0 shadow-sm border border-gray-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${styles.bg}`}>
                  <feature.icon className={`w-7 h-7 ${styles.text}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
