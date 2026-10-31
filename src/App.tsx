import React, { useState, useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingNavDock } from './components/FloatingNavDock';

import { OverviewView } from './components/views/OverviewView';
import { ProjectsView } from './components/views/ProjectsView';
import { ExperienceView } from './components/views/ExperienceView';
import { SkillsView } from './components/views/SkillsView';
import { CertificationsView } from './components/views/CertificationsView';
import { EducationView } from './components/views/EducationView';
import { ContactView } from './components/views/ContactView';

const PortfolioContent: React.FC<{
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}> = ({ darkMode, setDarkMode }) => {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentPage === 'overview' && <OverviewView />}
        {currentPage === 'projects' && <ProjectsView />}
        {currentPage === 'experience' && <ExperienceView />}
        {currentPage === 'skills' && <SkillsView />}
        {currentPage === 'certifications' && <CertificationsView />}
        {currentPage === 'education' && <EducationView />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Floating Apple-Style Nav Dock */}
      <FloatingNavDock />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <NavigationProvider>
      <PortfolioContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </NavigationProvider>
  );
}
