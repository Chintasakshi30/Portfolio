import React from 'react';
import { useNavigation, PageId } from '../context/NavigationContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin, Mail, Phone, FileDown, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, handleHoverStart, handleHoverEnd } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/90 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display font-bold text-lg text-white block">
              Sakshi Shridhar Chinta
            </span>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Computer Science & Engineering graduate specializing in Python development, database architecture, data analytics, and applied AI/ML systems.
            </p>
            <div className="flex items-center gap-2 text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Solapur, Maharashtra &middot; Open to relocation & remote roles</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block">
              Portfolio Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {(
                [
                  { id: 'overview', label: 'Overview' },
                  { id: 'projects', label: 'Projects & Demos' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'skills', label: 'Technical Skills' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'education', label: 'Education' },
                  { id: 'contact', label: 'Contact & Resume' }
                ] as const
              ).map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id as PageId)}
                  onMouseEnter={() => handleHoverStart(link.id as PageId)}
                  onMouseLeave={handleHoverEnd}
                  className="text-left text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block">
              Direct Contact
            </span>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-blue-400 transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              <div className="font-mono-tabular text-slate-400">
                {PORTFOLIO_DATA.personal.phone}
              </div>
              <div className="pt-2">
                <a
                  href="/assets/aistudio/Sakshi_ChintaAI_1238fd5d.pdf"
                  download="Sakshi_Chinta_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:underline"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} Sakshi Shridhar Chinta. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
