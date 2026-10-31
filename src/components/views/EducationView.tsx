import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Languages,
  BookOpen,
  Award,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export const EducationView: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Background
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Education & Linguistic Proficiencies
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Formal engineering degree credentials, academic track record, key curriculum courses, and multilingual fluency.
        </p>
      </div>

      {/* Main Degree Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                <MapPin className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.education.location}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1.5 font-mono-tabular">
                <Calendar className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.education.duration}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="text-emerald-400 font-medium">Graduating Class of 2026</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {PORTFOLIO_DATA.education.degree}
            </h2>

            <h3 className="text-base sm:text-lg font-medium text-slate-300">
              {PORTFOLIO_DATA.education.college}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Completed rigorous coursework encompassing algorithmic computing, data structures, relational database normalization, artificial intelligence, and operating systems with strong practical laboratory application.
            </p>

            {/* Coursework Tags */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Key Curriculum & Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.education.keyCourses.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CGPA Scorecard */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center w-full max-w-xs shadow-inner">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Cumulative Grade Point Average
              </span>
              <div className="my-4">
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-white font-mono-tabular">
                  {PORTFOLIO_DATA.education.cgpa}
                </span>
                <span className="text-slate-400 text-sm block mt-1">out of 10.0 Scale</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> First Class Distinction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages Spoken Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-blue-400" />
          <h3 className="font-display font-bold text-xl text-white">
            Multilingual Fluency
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Seamless communication in English, Hindi, Marathi, and Telugu for cross-functional regional and international teams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.languages.map((lang, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-white">
                  {lang.name}
                </span>
                <span className="text-[11px] text-blue-400 font-medium bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                  Fluent
                </span>
              </div>
              <span className="text-xs text-slate-400 block">
                {lang.level}
              </span>
              <div className="flex gap-1 pt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-full h-1.5 rounded-full bg-blue-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formal Signed Declaration Banner from Resume */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
        <FileCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
            Official Resume Declaration
          </span>
          <p className="text-xs text-slate-400 italic leading-relaxed">
            "{PORTFOLIO_DATA.declaration}"
          </p>
        </div>
      </div>
    </div>
  );
};
