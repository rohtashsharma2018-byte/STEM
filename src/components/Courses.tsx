import { Compass, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getCourses, ICONS } from '../lib/storage';

export default function Courses({ searchTerm = '' }: { searchTerm?: string }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    setCourses(getCourses());
  }, []);

  const filteredCourses = courses.filter((course) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(term) ||
      course.level.toLowerCase().includes(term);

    if (!matchesSearch) return false;

    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Middle') return course.level === 'Middle School';
    if (selectedFilter === 'High') return course.level === 'High School';
    if (selectedFilter === 'Senior') return course.level === 'Senior Sec.';
    if (selectedFilter === 'Special') return course.level.startsWith('Grade');
    return true;
  });

  const categories = [
    { id: 'All', name: 'All', count: courses.length },
    { id: 'Middle', name: 'Middle School', count: courses.filter(c => c.level === 'Middle School').length },
    { id: 'High', name: 'High School', count: courses.filter(c => c.level === 'High School').length },
    { id: 'Senior', name: 'Senior Sec.', count: courses.filter(c => c.level === 'Senior Sec.').length },
    { id: 'Special', name: 'Special Units', count: courses.filter(c => c.level.startsWith('Grade')).length }
  ];

  const getLevelBadgeStyles = (level: string) => {
    const lvl = level.toLowerCase();
    if (lvl.includes('middle')) {
      return 'bg-amber-50 text-amber-700 border border-amber-200/80 shadow-sm shadow-amber-100/50';
    }
    if (lvl.includes('high')) {
      return 'bg-emerald-50 text-emerald-750 border border-emerald-200/80 shadow-sm shadow-emerald-100/50';
    }
    if (lvl.includes('senior')) {
      return 'bg-indigo-50 text-indigo-750 border border-indigo-200/80 shadow-sm shadow-indigo-100/50';
    }
    if (lvl.includes('9-12')) {
      return 'bg-purple-50 text-purple-750 border border-purple-200/80 shadow-sm shadow-purple-100/50';
    }
    if (lvl.includes('11-12')) {
      return 'bg-rose-50 text-rose-750 border border-rose-200/80 shadow-sm shadow-rose-100/50';
    }
    return 'bg-brand-50 text-brand-700 border border-brand-200/80';
  };

  const getIconStyles = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return {
          container: 'bg-cyan-50 group-hover:bg-cyan-600 border border-cyan-100/80',
          icon: 'text-cyan-600 group-hover:text-white'
        };
      case 'Lightbulb':
        return {
          container: 'bg-amber-50 group-hover:bg-amber-500 border border-amber-200/50',
          icon: 'text-amber-600 group-hover:text-white'
        };
      case 'TestTube':
        return {
          container: 'bg-emerald-50 group-hover:bg-emerald-600 border border-emerald-100/80',
          icon: 'text-emerald-600 group-hover:text-white'
        };
      case 'Database':
        return {
          container: 'bg-purple-50 group-hover:bg-purple-600 border border-purple-100/80',
          icon: 'text-purple-600 group-hover:text-white'
        };
      case 'Calculator':
        return {
          container: 'bg-rose-50 group-hover:bg-rose-600 border border-rose-100/80',
          icon: 'text-rose-600 group-hover:text-white'
        };
      case 'BookOpen':
        return {
          container: 'bg-indigo-50 group-hover:bg-indigo-600 border border-indigo-100/80',
          icon: 'text-indigo-600 group-hover:text-white'
        };
      default:
        return {
          container: 'bg-brand-50 group-hover:bg-brand-600 border border-brand-100/80',
          icon: 'text-brand-600 group-hover:text-white'
        };
    }
  };

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4 shadow-sm shadow-indigo-100/40">
            Curriculum
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our NCERT Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Master the NCERT syllabus with our comprehensive, expert-led programs designed for academic excellence.</p>
        </div>

        {/* Course Filters Segment */}
        <div id="course-filters" className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-600" />
            <span>Filter by Target Segment</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100 max-w-full">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  id={`filter-course-${cat.id.toLowerCase()}`}
                  className={`px-4.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-100'
                      : 'text-gray-600 hover:text-brand-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`inline-flex items-center justify-center text-[10px] font-extrabold w-5 h-5 rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-gray-200/50 text-gray-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4 text-lg">No courses found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-gray-100 bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-200 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                {(() => {
                  const styles = getIconStyles(course.icon);
                  const Icon = ICONS[course.icon] || Compass;
                  return (
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${styles.container}`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${styles.icon}`} />
                    </div>
                  );
                })()}
                <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${getLevelBadgeStyles(course.level)}`}>
                  {course.level}
                </span>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mb-8 mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-400 mb-1">Tuition Fee</span>
                  <span className="font-semibold text-brand-600 text-lg">{course.fee}</span>
                </div>
              </div>

              <a href="#contact" className="block w-full py-3 px-4 bg-gray-50 hover:bg-brand-600 hover:text-white text-gray-900 font-bold text-center rounded-xl transition-colors">
                Know More
              </a>
            </motion.div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
