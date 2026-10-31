import React from 'react';
import { useNavigation, PageId } from '../context/NavigationContext';
import { FileDown, Moon, Sun, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenAttireModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode
}) => {
  const {
    currentPage,
    navigateTo
  } = useNavigation();

  const navItems: { id: PageId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects & AI' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/90 dark:bg-slate-950/90 border-b border-slate-800/80 transition-colors duration-200">
      {/* Main Top Bar strictly fulfilling 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          {currentPage !== 'overview' && (
            <button
              onClick={() => navigateTo('overview')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
              title="Return to Overview"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => navigateTo('overview')}
            className="text-left group cursor-pointer"
          >
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
              Sakshi Shridhar Chinta
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Standard Click Navigation) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-tight rounded-md whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'text-white bg-blue-600/20 text-blue-300 font-semibold shadow-inner border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Quick Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/25 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>

          {/* Quick theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation tab scrollbar */}
      <div className="lg:hidden flex items-center gap-1 px-4 py-2 overflow-x-auto border-t border-slate-800/60 no-scrollbar">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
