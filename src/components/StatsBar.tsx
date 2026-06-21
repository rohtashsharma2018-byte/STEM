import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

function Counter({ 
  end, 
  label, 
  suffix = '', 
  bgClass = 'bg-brand-50/50', 
  borderClass = 'border-brand-100', 
  textClass = 'text-brand-600' 
}: { 
  end: number, 
  label: string, 
  suffix?: string,
  bgClass?: string,
  borderClass?: string,
  textClass?: string
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        // Ease out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className={`text-center p-6 lg:p-8 rounded-3xl border transition-all duration-300 ${bgClass} ${borderClass}`}>
      <div className={`font-heading text-4xl lg:text-5xl font-bold mb-2 transition-colors duration-300 ${textClass}`}>
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium text-lg">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 bg-white shrink-0 relative z-10 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white p-4 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
          <Counter 
            end={2500} 
            label="Students Enrolled" 
            suffix="+" 
            bgClass="bg-indigo-50/50" 
            borderClass="border-indigo-100" 
            textClass="text-indigo-600" 
          />
          <Counter 
            end={15} 
            label="Years of Excellence" 
            suffix="+" 
            bgClass="bg-emerald-50/50" 
            borderClass="border-emerald-100" 
            textClass="text-emerald-600" 
          />
          <Counter 
            end={45} 
            label="Courses Offered" 
            bgClass="bg-purple-50/50" 
            borderClass="border-purple-100" 
            textClass="text-purple-600" 
          />
          <Counter 
            end={98} 
            label="Success Rate" 
            suffix="%" 
            bgClass="bg-rose-50/50" 
            borderClass="border-rose-100" 
            textClass="text-rose-600" 
          />
        </div>
      </div>
    </section>
  );
}
