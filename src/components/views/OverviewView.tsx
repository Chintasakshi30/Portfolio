import React from 'react';
import { useNavigation, PageId } from '../../context/NavigationContext';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  Mail,
  MapPin,
  ExternalLink,
  FileDown,
  Layers,
  Database,
  CheckCircle2
} from 'lucide-react';

interface OverviewViewProps {
  onOpenAttireModal?: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = () => {
  const { navigateTo } = useNavigation();

  const launchpadItems: {
    id: PageId;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    tag: string;
    gradient: string;
    features: string[];
  }[] = [
    {
      id: 'projects',
      title: 'Projects & AI Systems',
      subtitle: 'AI Interview Platform, Facial Stress Detection, BI KPI Dashboard',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      tag: '4 Featured Builds',
      gradient: 'from-blue-600/20 to-cyan-600/10 hover:border-blue-500/50',
      features: ['Live Interactive Simulators', 'Published Research Paper', 'Python & Machine Learning']
    },
    {
      id: 'experience',
      title: 'Corporate Internships',
      subtitle: 'Hands-on roles at Interlace IT (Solapur) & Kill Spiders (Institute)',
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      tag: '2 Industry Roles',
      gradient: 'from-indigo-600/20 to-purple-600/10 hover:border-indigo-500/50',
      features: ['Python & MySQL Engineering', 'Complex SQL & DB Design', 'Power BI & Data Cleansing']
    },
    {
      id: 'skills',
      title: 'Technical Capabilities',
      subtitle: 'Python, SQL, MySQL, Scikit-learn, Power BI, Data Annotation',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      tag: '5 Core Domains',
      gradient: 'from-emerald-600/20 to-teal-600/10 hover:border-emerald-500/50',
      features: ['Interactive Code Sandbox', 'Proficiency Matrix', 'Data Annotation & QA']
    },
    {
      id: 'certifications',
      title: 'Certifications & Honors',
      subtitle: 'IBM AI, NPTEL DBMS & Python, TCS CodeVita Global Rank 3458',
      icon: <Award className="w-5 h-5 text-amber-400" />,
      tag: '5 Verified Badges',
      gradient: 'from-amber-600/20 to-orange-600/10 hover:border-amber-500/50',
      features: ['TCS CodeVita Rank 3458', 'IBM SkillsBuild AI', 'NPTEL Elite Certifications']
    },
    {
      id: 'education',
      title: 'Education & Languages',
      subtitle: 'B.Tech CSE with 8.32 CGPA at Shree Siddheshwar Women\'s College',
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
      tag: 'Class of 2026',
      gradient: 'from-purple-600/20 to-pink-600/10 hover:border-purple-500/50',
      features: ['8.32 CGPA Academic Record', '4 Spoken Languages', 'Solapur, Maharashtra']
    },
    {
      id: 'contact',
      title: 'Resume & Direct Contact',
      subtitle: 'Download dual-format resumes and reach out directly',
      icon: <Mail className="w-5 h-5 text-rose-400" />,
      tag: 'Available for Hire',
      gradient: 'from-rose-600/20 to-red-600/10 hover:border-rose-500/50',
      features: ['Dual PDF Resumes', 'Direct Phone & Email', 'Signed Verification']
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed metadata */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-blue-400">
                <MapPin className="w-3.5 h-3.5" /> Solapur, Maharashtra
              </span>
              <span aria-hidden="true">·</span>
              <span>B.Tech CSE Graduate (2026)</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-mono-tabular">CGPA 8.32</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                Sakshi Shridhar Chinta
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-400">
                Computer Science & Engineering Graduate | AI/ML & Python Developer
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Passionate engineer with hands-on proficiency in <strong className="text-white">Python, MySQL, SQL, and AI/ML fundamentals</strong>. Experienced in designing robust relational database schemas, engineering machine learning classifiers, automating data pipelines, and building intuitive web and desktop applications. Author of a published research paper on AI interview platforms.
            </p>

            {/* Direct action triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('projects')}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 cursor-pointer overflow-hidden"
              >
                <span>Explore Projects & Demos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Get Resumes</span>
              </button>
            </div>

            {/* Quick contact tags */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href="mailto:chintasakshi30@gmail.com" className="hover:text-blue-400 transition-colors">
                  chintasakshi30@gmail.com
                </a>
              </span>
              <span aria-hidden="true">·</span>
              <span>📞 +91 9022511674</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">English · Hindi · Marathi · Telugu</span>
            </div>
          </div>

          {/* Right Column: High Fidelity Single Authentic Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              {/* Subtle ambient lighting */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-2xl">
                {/* Single Portrait Display Container */}
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-950">
                  <img
                    src={PORTFOLIO_DATA.personal.originalPhoto}
                    alt="Sakshi Shridhar Chinta"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for metadata legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 pt-12">
                    <div>
                      <h4 className="text-white font-bold text-base">Sakshi Shridhar Chinta</h4>
                      <p className="text-xs text-blue-300 font-medium">
                        B.Tech Computer Science & Engineering (2026)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card footer trust banner */}
                <div className="px-4 py-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Verified Candidate Profile
                  </span>
                  <span className="font-mono-tabular text-slate-400 text-[11px]">CGPA 8.32 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Metric Strip (Full-width below hero per design guidelines) */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 border-y border-slate-800/80">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-medium">Academic Excellence</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-white font-mono-tabular">8.32</span>
            <span className="text-xs text-slate-400">/ 10 CGPA</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">B.Tech Computer Science & Eng.</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-medium">TCS CodeVita Season 13</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 font-mono-tabular">#3458</span>
            <span className="text-xs text-slate-400">Worldwide</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">International Problem-Solving Rank</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-medium">Industry Internships</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400 font-mono-tabular">2</span>
            <span className="text-xs text-slate-400">Corporate Roles</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">Interlace IT & Kill Spiders (Institute)</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-medium">Published Research</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-purple-400 font-mono-tabular">1</span>
            <span className="text-xs text-slate-400">Paper Authored</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">AI Interview Preparation Platform</span>
        </div>
      </section>

      {/* Portfolio Section Portals */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Portfolio Highlights
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Explore Portfolio Sections
            </h2>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Select any card below to view detailed projects, experience, and skills</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {launchpadItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`relative rounded-xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer overflow-hidden group flex flex-col justify-between shadow-lg hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-blue-400 font-medium group-hover:underline">
                  View details
                </span>
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                  Open section →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight on Core Innovation: AI Interview Prep Platform & Research Paper */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-slate-800 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              Flagship Project Spotlight
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              AI Interview Preparation Platform
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Developed an intelligent, responsive web platform featuring algorithmic question categorization, dynamic code evaluation, and automated feedback. Sakshi authored a formal research paper on this platform detailing candidate evaluation algorithms and distributed question serving.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">Python</span>
              <span className="text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">JavaScript</span>
              <span className="text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">Machine Learning</span>
              <span className="text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded">HTML/CSS</span>
              <span className="text-blue-300 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded font-medium">Research Paper Published</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => navigateTo('projects')}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Try Live Interactive Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
              <img
                src={PORTFOLIO_DATA.projects[0].image}
                alt="AI Interview Preparation Platform Mockup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Ticker / Highlights */}
      <section className="space-y-4">
        <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold text-center">
          Core Technologies & Tooling Ecosystem
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          {[
            'Python 3',
            'SQL & MySQL',
            'Pandas',
            'NumPy',
            'Scikit-learn',
            'Matplotlib',
            'Power BI',
            'Excel & DAX',
            'Data Annotation',
            'JavaScript',
            'Git & GitHub',
            'VS Code',
            'MySQL Workbench',
            'Jupyter Notebook'
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:border-slate-700 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
