import { useState, useEffect } from 'react';
import { getCourses, saveCourses, getTeachers, saveTeachers, INITIAL_COURSES, INITIAL_TEACHERS } from '../lib/storage';
import { Plus, Trash2, Edit2, LogOut, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('courses');

  const [courses, setCourses] = useState<any[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('stem_admin_auth');
    if (auth === 'true') setIsLogged(true);
    setCourses(getCourses());
    setTeachers(getTeachers());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin@123') {
      setIsLogged(true);
      localStorage.setItem('stem_admin_auth', 'true');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem('stem_admin_auth');
  };

  const handleReset = () => {
    if (confirm("Reset to initial data?")) {
      setCourses(INITIAL_COURSES);
      saveCourses(INITIAL_COURSES);
      setTeachers(INITIAL_TEACHERS);
      saveTeachers(INITIAL_TEACHERS);
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900">Admin Portal</h2>
            <p className="text-gray-500 mt-2">Sign in to manage content</p>
          </div>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl transition-colors mt-6">
              Sign In
            </button>
          </form>
          <button onClick={() => navigate('/')} className="w-full text-brand-600 mt-4 text-sm font-medium hover:underline text-center block">
            Return to main site
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8 shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-brand-600" />
            <span className="font-heading font-bold text-xl text-gray-900">STEM Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="text-sm text-gray-500 hover:text-gray-900 font-medium hidden sm:block">View Site</button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'courses' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Courses (Syllabus)
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'teachers' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Teachers
            </button>
          </div>
          <button onClick={handleReset} className="text-sm text-gray-500 hover:text-gray-900 font-medium underline">
            Reset Data
          </button>
        </div>

        {activeTab === 'courses' ? <CoursesAdmin courses={courses} setCourses={setCourses} /> : <TeachersAdmin teachers={teachers} setTeachers={setTeachers} />}
      </div>
    </div>
  );
}

function CoursesAdmin({ courses, setCourses }: { courses: any[], setCourses: any }) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleSave = () => {
    let updated;
    if (editingId) {
      updated = courses.map(c => c.id === editingId ? formData : c);
    } else {
      updated = [...courses, { ...formData, id: Date.now() }];
    }
    setCourses(updated);
    saveCourses(updated);
    setEditingId(null);
  };

  const handleEdit = (c: any) => {
    setFormData(c);
    setEditingId(c.id);
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this course?')) {
      const updated = courses.filter(c => c.id !== id);
      setCourses(updated);
      saveCourses(updated);
    }
  };

  const handleCreate = () => {
    setFormData({ title: '', fee: '', duration: '', level: '', icon: 'BookOpen' });
    setEditingId(-1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-gray-900">Manage Courses</h3>
        <button onClick={handleCreate} className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      {editingId !== null && (
        <div className="p-6 bg-brand-50/30 border-b border-gray-200">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Fee</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.fee || ''} onChange={e => setFormData({ ...formData, fee: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.duration || ''} onChange={e => setFormData({ ...formData, duration: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Level Badge</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.level || ''} onChange={e => setFormData({ ...formData, level: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Icon Name (lucide)</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" placeholder="e.g. Compass, Lightbulb, Calculator" value={formData.icon || ''} onChange={e => setFormData({ ...formData, icon: e.target.value })} />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Save</button>
            <button onClick={() => setEditingId(null)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Cancel</button>
          </div>
        </div>
      )}

      <ul className="divide-y divide-gray-200">
        {courses.map(c => (
          <li key={c.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50 flex-wrap gap-4">
            <div>
              <p className="font-semibold text-gray-900">{c.title}</p>
              <p className="text-sm text-gray-500">{c.level} • {c.duration} • {c.fee}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleEdit(c)} className="p-2 text-gray-500 hover:text-brand-600 rounded-lg hover:bg-brand-50"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(c.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
            </div>
          </li>
        ))}
        {courses.length === 0 && <p className="p-6 text-gray-500 text-center">No courses found.</p>}
      </ul>
    </div>
  );
}

function TeachersAdmin({ teachers, setTeachers }: { teachers: any[], setTeachers: any }) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleSave = () => {
    let updated;
    if (editingId) {
      updated = teachers.map(t => t.id === editingId ? formData : t);
    } else {
      updated = [...teachers, { ...formData, id: Date.now() }];
    }
    setTeachers(updated);
    saveTeachers(updated);
    setEditingId(null);
  };

  const handleEdit = (t: any) => {
    setFormData(t);
    setEditingId(t.id);
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this teacher?')) {
      const updated = teachers.filter(t => t.id !== id);
      setTeachers(updated);
      saveTeachers(updated);
    }
  };

  const handleCreate = () => {
    setFormData({ name: '', subject: '', exp: '', bio: '', img: 'https://picsum.photos/seed/tech/400/500' });
    setEditingId(-1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-gray-900">Manage Teachers</h3>
        <button onClick={handleCreate} className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
          <Plus className="w-4 h-4" /> Add Teacher
        </button>
      </div>

      {editingId !== null && (
        <div className="p-6 bg-brand-50/30 border-b border-gray-200">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.subject || ''} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Experience</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.exp || ''} onChange={e => setFormData({ ...formData, exp: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Image URL</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-gray-300" value={formData.img || ''} onChange={e => setFormData({ ...formData, img: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Bio</label>
              <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300" rows={2} value={formData.bio || ''} onChange={e => setFormData({ ...formData, bio: e.target.value })}></textarea>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Save</button>
            <button onClick={() => setEditingId(null)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Cancel</button>
          </div>
        </div>
      )}

      <ul className="divide-y divide-gray-200">
        {teachers.map(t => (
          <li key={t.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img src={t.img} alt="" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.subject} • {t.exp}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleEdit(t)} className="p-2 text-gray-500 hover:text-brand-600 rounded-lg hover:bg-brand-50"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
            </div>
          </li>
        ))}
        {teachers.length === 0 && <p className="p-6 text-gray-500 text-center">No teachers found.</p>}
      </ul>
    </div>
  );
}
