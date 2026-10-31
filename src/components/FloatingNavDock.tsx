import React from 'react';
import { useNavigation, PageId } from '../context/NavigationContext';
import {
  Home,
  Cpu,
  Briefcase,
  Code2,
  Award,
  GraduationCap,
  Mail,
  Zap
} from 'lucide-react';

export const FloatingNavDock: React.FC = () => {
  const {
    currentPage,
    navigateTo
  } = useNavigation();

  const dockItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Cpu className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certs', icon: <Award className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl flex items-center gap-1">
        {dockItems.map((item) => {
          const isActive = currentPage === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => navigateTo(item.id)}
                className={`p-2.5 rounded-xl transition-all relative overflow-hidden flex items-center justify-center cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                {item.icon}
              </button>

              {/* Floating Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-950 text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-800 shadow-md">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
