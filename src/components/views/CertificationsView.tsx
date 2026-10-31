import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  Award,
  CheckCircle,
  FileBadge,
  Calendar,
  Building,
  Sparkles,
  Trophy,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const CertificationsView: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Database', 'Programming', 'Cybersecurity', 'Soft Skills'];

  const filteredCerts = filterCategory === 'All'
    ? PORTFOLIO_DATA.certifications
    : PORTFOLIO_DATA.certifications.filter(c => c.category === filterCategory);

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <Award className="w-3.5 h-3.5" />
          Verified Credentials & Milestones
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Certifications & Global Achievements
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Industry credentials from IBM SkillsBuild, NPTEL (IITs/IISc initiative), Mitcon Pune, and Naandi Foundation, paired with international competitive milestones.
        </p>
      </div>

      {/* Global Achievements Spotlight Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.achievements.map((ach) => (
          <div
            key={ach.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-700/70 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Trophy className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono-tabular font-bold text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2.5 py-1 rounded">
                  {ach.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white">
                {ach.title}
              </h3>
              <span className="text-xs text-blue-400 font-medium block mt-1">
                {ach.organization}
              </span>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {ach.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" /> Verified Milestone
              </span>
              <span className="font-mono-tabular font-semibold text-slate-200">
                {ach.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Filter & List */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-display font-bold text-xl text-white">
            Official Certifications List
          </h2>

          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-blue-400 font-medium text-[11px] bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
                    {cert.category}
                  </span>
                  <span className="font-mono-tabular flex items-center gap-1 text-[11px]">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {cert.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{cert.organization}</span>
                </h4>

                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Topics Covered:
                  </span>
                  {cert.skillsGained.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3 h-3" /> Credential Verified
                </span>
                <span className="text-slate-500">Resume Attached</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
