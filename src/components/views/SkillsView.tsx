import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  Code2,
  Database,
  Cpu,
  BarChart3,
  Wrench,
  Search,
  CheckCircle2,
  Terminal,
  FileCheck,
  Sparkles,
  Zap,
  Play,
  Layers,
  ArrowRight,
  Star,
  BrainCircuit,
  FileSpreadsheet,
  Table2,
  Server,
  GitBranch,
  Tag,
  Binary,
  LineChart,
  Braces,
  GitFork,
  Laptop,
  LayoutTemplate
} from 'lucide-react';

interface SkillItem {
  name: string;
  level: number;
  note?: string;
  categoryName: string;
  isSpecial?: boolean;
  highlightTag?: string;
  internshipUsed?: string;
}

export const SkillsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'mysql' | 'pandas'>('python');
  const [sandboxOutput, setSandboxOutput] = useState<string | null>(null);

  // Flatten and augment skills with special tags for Python & MySQL
  const allSkills: SkillItem[] = [
    {
      name: 'Python',
      level: 92,
      note: 'Core language for backend automation, algorithms, ML pipelines, and Tkinter GUI desktop apps.',
      categoryName: 'Programming & Core CS',
      isSpecial: true,
      highlightTag: 'Flagship Core Expertise',
      internshipUsed: 'Interlace IT & Kill Spiders (Institute)'
    },
    {
      name: 'MySQL',
      level: 89,
      note: 'Relational database schema modeling, indexing, foreign keys, normalization, and complex joins.',
      categoryName: 'Databases & SQL',
      isSpecial: true,
      highlightTag: 'Flagship Database Mastery',
      internshipUsed: 'Interlace IT (Solapur)'
    },
    {
      name: 'SQL',
      level: 88,
      note: 'Data retrieval, multi-table joins, subqueries, aggregations, and window functions.',
      categoryName: 'Databases & SQL',
      isSpecial: true,
      highlightTag: 'Core Querying',
      internshipUsed: 'Interlace IT & Kill Spiders'
    },
    {
      name: 'OOP (Object-Oriented Programming)',
      level: 88,
      note: 'Encapsulation, inheritance, modular class hierarchies, and event-driven architecture.',
      categoryName: 'Programming & Core CS'
    },
    {
      name: 'Data Structures & Algorithms',
      level: 84,
      note: 'Competitive problem-solving, algorithmic efficiency, TCS CodeVita Global Rank 3458.',
      categoryName: 'Programming & Core CS'
    },
    {
      name: 'JavaScript',
      level: 78,
      note: 'ES6+, asynchronous logic, DOM manipulation, and interactive web interfaces.',
      categoryName: 'Programming & Core CS'
    },
    {
      name: 'MySQL Workbench',
      level: 86,
      note: 'ER diagram modeling, query optimization execution plans, and schema migration.',
      categoryName: 'Databases & SQL'
    },
    {
      name: 'Relational Schema Design & Normalization',
      level: 88,
      note: '1NF, 2NF, 3NF schema structuring, primary/foreign key constraints, and integrity.',
      categoryName: 'Databases & SQL'
    },
    {
      name: 'Pandas & NumPy',
      level: 86,
      note: 'Dataframe manipulation, vectorized numerical operations, and missing data imputation.',
      categoryName: 'AI / ML Frameworks',
      internshipUsed: 'Kill Spiders (Institute)'
    },
    {
      name: 'Scikit-learn',
      level: 82,
      note: 'Supervised classification, model validation, metrics reporting, and hyperparameter tuning.',
      categoryName: 'AI / ML Frameworks'
    },
    {
      name: 'Matplotlib & Visualization',
      level: 84,
      note: 'Statistical plotting, distribution histograms, and multi-variable metric plots.',
      categoryName: 'AI / ML Frameworks'
    },
    {
      name: 'Machine Learning Fundamentals',
      level: 83,
      note: 'Feature extraction, confusion matrices, biometric sentiment analysis, and train/test splits.',
      categoryName: 'AI / ML Frameworks'
    },
    {
      name: 'Power BI',
      level: 85,
      note: 'Interactive corporate dashboards, DAX queries, metric cards, and departmental slicers.',
      categoryName: 'Data Tools & Operations',
      internshipUsed: 'Kill Spiders (Institute)'
    },
    {
      name: 'Microsoft Excel',
      level: 88,
      note: 'Advanced VLOOKUP/XLOOKUP, Pivot tables, conditional formatting, and trend analysis.',
      categoryName: 'Data Tools & Operations'
    },
    {
      name: 'Data Annotation & Labeling',
      level: 90,
      note: 'Rigorous bounding box annotation, text labeling, and classification for AI models.',
      categoryName: 'Data Tools & Operations'
    },
    {
      name: 'Quality Checking & KPI Reporting',
      level: 87,
      note: 'Dataset validation against enterprise guidelines, error detection, and KPI metrics.',
      categoryName: 'Data Tools & Operations'
    },
    {
      name: 'HTML5 & CSS3',
      level: 88,
      note: 'Semantic structure, flexbox, responsive styling, and modern web layouts.',
      categoryName: 'Web & Developer Tools'
    },
    {
      name: 'Git & GitHub',
      level: 83,
      note: 'Version control, repository branching, pull requests, and commit histories.',
      categoryName: 'Web & Developer Tools'
    },
    {
      name: 'VS Code & Jupyter Notebook',
      level: 90,
      note: 'Daily development IDE, iterative interactive Python notebooks, and debugging.',
      categoryName: 'Web & Developer Tools'
    }
  ];

  const categoryList: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'All', label: 'All Badges', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'Programming & Core CS', label: 'Programming', icon: <Code2 className="w-3.5 h-3.5 text-blue-400" /> },
    { id: 'Databases & SQL', label: 'Databases & SQL', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'AI / ML Frameworks', label: 'AI/ML Frameworks', icon: <BrainCircuit className="w-3.5 h-3.5 text-purple-400" /> },
    { id: 'Data Tools & Operations', label: 'Data Tools', icon: <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'Web & Developer Tools', label: 'Developer Tools', icon: <Wrench className="w-3.5 h-3.5 text-sky-400" /> }
  ];

  // Helper function returning specific SVG iconography for each skill badge
  const getSkillIcon = (name: string, category: string) => {
    switch (name) {
      case 'Python':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'OOP (Object-Oriented Programming)':
        return <Braces className="w-4 h-4 text-indigo-400" />;
      case 'Data Structures & Algorithms':
        return <GitFork className="w-4 h-4 text-amber-400" />;
      case 'JavaScript':
        return <Code2 className="w-4 h-4 text-yellow-400" />;
      case 'MySQL':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'SQL':
        return <Table2 className="w-4 h-4 text-teal-400" />;
      case 'MySQL Workbench':
        return <Server className="w-4 h-4 text-emerald-300" />;
      case 'Relational Schema Design & Normalization':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'Pandas & NumPy':
        return <Binary className="w-4 h-4 text-cyan-400" />;
      case 'Scikit-learn':
        return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      case 'Matplotlib & Visualization':
        return <LineChart className="w-4 h-4 text-pink-400" />;
      case 'Machine Learning Fundamentals':
        return <Cpu className="w-4 h-4 text-indigo-300" />;
      case 'Power BI':
        return <BarChart3 className="w-4 h-4 text-amber-400" />;
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'Data Annotation & Labeling':
        return <Tag className="w-4 h-4 text-cyan-300" />;
      case 'Quality Checking & KPI Reporting':
        return <FileCheck className="w-4 h-4 text-blue-400" />;
      case 'HTML5 & CSS3':
        return <LayoutTemplate className="w-4 h-4 text-orange-400" />;
      case 'Git & GitHub':
        return <GitBranch className="w-4 h-4 text-rose-400" />;
      case 'VS Code & Jupyter Notebook':
        return <Laptop className="w-4 h-4 text-sky-400" />;
      default:
        if (category === 'Programming & Core CS') return <Code2 className="w-4 h-4 text-blue-400" />;
        if (category === 'Databases & SQL') return <Database className="w-4 h-4 text-emerald-400" />;
        if (category === 'AI / ML Frameworks') return <BrainCircuit className="w-4 h-4 text-purple-400" />;
        if (category === 'Data Tools & Operations') return <BarChart3 className="w-4 h-4 text-amber-400" />;
        return <Wrench className="w-4 h-4 text-slate-400" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Programming & Core CS':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          dot: 'bg-blue-400',
          text: 'text-blue-400'
        };
      case 'Databases & SQL':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          dot: 'bg-emerald-400',
          text: 'text-emerald-400'
        };
      case 'AI / ML Frameworks':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          dot: 'bg-purple-400',
          text: 'text-purple-400'
        };
      case 'Data Tools & Operations':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          dot: 'bg-amber-400',
          text: 'text-amber-400'
        };
      case 'Web & Developer Tools':
        return {
          bg: 'bg-sky-500/10',
          border: 'border-sky-500/30',
          dot: 'bg-sky-400',
          text: 'text-sky-400'
        };
      default:
        return {
          bg: 'bg-slate-800',
          border: 'border-slate-700',
          dot: 'bg-slate-400',
          text: 'text-slate-400'
        };
    }
  };

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.categoryName === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleRunCode = (type: 'python' | 'mysql' | 'pandas') => {
    setSandboxOutput('Executing code engine...');
    setTimeout(() => {
      if (type === 'python') {
        setSandboxOutput(
`[Python 3.11 Runtime - Interlace IT Environment]
✓ Initialized Connection: mysql.connector (host='localhost', db='interlace_crm')
✓ Ingested batch: 120 validated event records in 0.042s
✓ Memory footprint: 1.4 MB | Process exit: 0 (SUCCESS)`
        );
      } else if (type === 'mysql') {
        setSandboxOutput(
`[MySQL 8.0 Server - Query Optimization Engine]
✓ Query parsed: EXPLAIN ANALYZE SELECT dept_name, AVG(kpi_score)...
✓ Execution plan: Index Scan on idx_department_kpi (Cost: 0.15)
✓ Result: 4 rows returned in 0.0018s. Zero full-table scan overhead.`
        );
      } else {
        setSandboxOutput(
`[Pandas & Scikit-learn Pipeline - Kill Spiders Institute]
✓ Raw records loaded: 1,248 rows × 12 features
✓ Imputed missing values via MedianStrategy
✓ Normalized feature vectors with StandardScaler()
✓ Model Accuracy: 94.2% on Test Split`
        );
      }
    }, 400);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Code2 className="w-3.5 h-3.5" />
            Interactive Skills Matrix
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Categorized Technical Skills & Stack
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Sleek categorized badges with embedded SVG iconography. Hover over any badge to inspect real-time proficiency indicators and engineering contexts—with dedicated spotlights on <strong className="text-blue-400">Python</strong> and <strong className="text-emerald-400">MySQL</strong>.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills, tools, or frameworks..."
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* FEATURED DUAL SPOTLIGHT: Python & MySQL Mastery Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Python Spotlight Card */}
        <div
          onMouseEnter={() => setHoveredSkill(allSkills[0])}
          className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 hover:border-blue-400 transition-all duration-200 group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:scale-105 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Python
                  </h3>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-blue-300 bg-blue-950 border border-blue-700/60 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-blue-400 text-blue-400" />
                    Specialized Focus
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Interlace IT & Kill Spiders (Institute) &middot; Primary Language
                </span>
              </div>
            </div>

            {/* Circular Proficiency Gauge */}
            <div className="relative flex items-center justify-center w-14 h-14 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500 transition-all duration-700"
                  strokeDasharray="92, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute font-display font-bold text-xs text-white font-mono-tabular">
                92%
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Mastery in object-oriented programming (OOP), algorithmic scripting, data wrangling pipelines with Pandas/NumPy, Scikit-learn machine learning classifiers, and Tkinter GUI desktop architecture.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1 mb-4">
            {['Scripting', 'OOP & Classes', 'Pandas & NumPy', 'Scikit-learn', 'Tkinter GUI', 'File I/O', 'Algorithm Design'].map((sub, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-blue-200 bg-blue-950/70 border border-blue-800/60 px-2 py-0.5 rounded flex items-center gap-1"
              >
                <Code2 className="w-3 h-3 text-blue-400" />
                <span>{sub}</span>
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-emerald-400 flex items-center gap-1 font-medium text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" /> High Corporate Usage
            </span>
            <button
              onClick={() => {
                setActiveCodeTab('python');
                handleRunCode('python');
              }}
              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Test Python Sandbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* MySQL Spotlight Card */}
        <div
          onMouseEnter={() => setHoveredSkill(allSkills[1])}
          className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/10 hover:border-emerald-400 transition-all duration-200 group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    MySQL & SQL
                  </h3>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950 border border-emerald-700/60 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                    Specialized Focus
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Interlace IT (Solapur) &middot; Relational Database Mastery
                </span>
              </div>
            </div>

            {/* Circular Proficiency Gauge */}
            <div className="relative flex items-center justify-center w-14 h-14 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-700"
                  strokeDasharray="89, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute font-display font-bold text-xs text-white font-mono-tabular">
                89%
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Hands-on expertise in relational database architecture, ER modeling, multi-table joins, subqueries, grouping sets, foreign key constraints, indexing for performance, and MySQL Workbench.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1 mb-4">
            {['ER Modeling', 'Normalization (1NF-3NF)', 'Complex Joins', 'Window Functions', 'MySQL Workbench', 'Indexing', 'Data Aggregation'].map((sub, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-emerald-200 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded flex items-center gap-1"
              >
                <Database className="w-3 h-3 text-emerald-400" />
                <span>{sub}</span>
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-emerald-400 flex items-center gap-1 font-medium text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" /> High Corporate Usage
            </span>
            <button
              onClick={() => {
                setActiveCodeTab('mysql');
                handleRunCode('mysql');
              }}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Test MySQL Sandbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORIZED INTERACTIVE SKILL BADGES */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-xl text-white">
              Categorized Skill Badges
            </h2>
            <p className="text-xs text-slate-400">
              Interactive badges with category SVG iconography. Hover over any badge to view real-time proficiency percentages.
            </p>
          </div>

          {/* Category Filter Tabs with SVG Icons */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto no-scrollbar">
            {categoryList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Badges Grid with Embedded SVG Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const isHovered = hoveredSkill?.name === skill.name;
            const isPythonOrMySQL = skill.name === 'Python' || skill.name === 'MySQL';
            const theme = getCategoryTheme(skill.categoryName);

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                  isPythonOrMySQL
                    ? 'bg-slate-900/90 border-blue-500/70 shadow-md shadow-blue-500/10'
                    : isHovered
                    ? 'bg-slate-900 border-blue-500/50 shadow-lg -translate-y-0.5'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Special Highlight Ribbon for Python & MySQL */}
                {isPythonOrMySQL && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">
                    PRIMARY STACK
                  </div>
                )}

                <div>
                  {/* Badge Header: Embedded SVG Icon + Skill Name + Level */}
                  <div className="flex items-start gap-2.5 mb-2.5">
                    {/* SVG Icon with category-tinted subtle container */}
                    <div className={`p-2 rounded-lg ${theme.bg} ${theme.border} border shrink-0 group-hover:scale-110 transition-transform`}>
                      {getSkillIcon(skill.name, skill.categoryName)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="font-display font-bold text-sm text-white group-hover:text-blue-400 transition-colors truncate">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono-tabular font-semibold shrink-0 ${
                          isPythonOrMySQL ? 'text-blue-300' : 'text-slate-400 group-hover:text-blue-400'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                        <span className="truncate">{skill.categoryName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Note (expanded on hover) */}
                  <p className="text-xs text-slate-400 leading-snug line-clamp-2 group-hover:line-clamp-none transition-all mt-1">
                    {skill.note}
                  </p>
                </div>

                {/* Hover-revealed animated progress bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Proficiency</span>
                    </span>
                    <span className="font-mono-tabular text-slate-300 font-medium">
                      {skill.level >= 90 ? 'Advanced' : skill.level >= 80 ? 'Proficient' : 'Competent'}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isPythonOrMySQL
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                          : 'bg-blue-600 group-hover:bg-cyan-400'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIVE INTERACTIVE CODE & QUERY SANDBOX: Test Sakshi's Python & MySQL Logic */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Live Python & MySQL Code Sandbox
              </h3>
              <p className="text-xs text-slate-400">
                Interactive production scripts authored and executed by Sakshi during her corporate internships
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => {
                  setActiveCodeTab('python');
                  setSandboxOutput(null);
                }}
                className={`px-3 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === 'python' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-blue-300" />
                <span>Python Pipeline</span>
              </button>
              <button
                onClick={() => {
                  setActiveCodeTab('mysql');
                  setSandboxOutput(null);
                }}
                className={`px-3 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === 'mysql' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-emerald-300" />
                <span>MySQL Query</span>
              </button>
              <button
                onClick={() => {
                  setActiveCodeTab('pandas');
                  setSandboxOutput(null);
                }}
                className={`px-3 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === 'pandas' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BrainCircuit className="w-3.5 h-3.5 text-purple-300" />
                <span>Pandas & ML</span>
              </button>
            </div>

            <button
              onClick={() => handleRunCode(activeCodeTab)}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shadow-emerald-600/20"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulate Run</span>
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Code Viewer */}
          <div className="lg:col-span-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto">
            {activeCodeTab === 'python' && (
              <pre className="text-blue-300 leading-relaxed font-mono-tabular">
{`# ====================================================================
# Sakshi Shridhar Chinta - Python Backend Automation Script
# Focus: Modular DB Ingestion & Validation @ Interlace IT
# ====================================================================

import mysql.connector
from datetime import datetime

class DatabaseIngestionService:
    def __init__(self, db_config: dict):
        self.connection = mysql.connector.connect(**db_config)
        self.cursor = self.connection.cursor(dictionary=True)

    def validate_and_insert(self, records: list) -> int:
        query = """
        INSERT INTO candidate_assessments (candidate_id, topic, score, status, evaluated_at)
        VALUES (%s, %s, %s, %s, %s)
        ON DUPLICATE KEY UPDATE score = VALUES(score), status = VALUES(status);
        """
        clean_batch = [
            (
                r['candidate_id'],
                r['topic'],
                round(float(r['score']), 2),
                'VERIFIED' if r['score'] >= 75 else 'RETRY',
                datetime.now()
            )
            for r in records if r.get('candidate_id')
        ]
        self.cursor.executemany(query, clean_batch)
        self.connection.commit()
        return self.cursor.rowcount`}
              </pre>
            )}

            {activeCodeTab === 'mysql' && (
              <pre className="text-emerald-300 leading-relaxed font-mono-tabular">
{`-- ====================================================================
-- Sakshi Shridhar Chinta - MySQL Analytical Query
-- Focus: Normalized Schema Performance & Window Analytics
-- ====================================================================

SELECT 
    d.department_name,
    e.employee_name,
    p.kpi_score,
    DENSE_RANK() OVER(
        PARTITION BY d.department_id 
        ORDER BY p.kpi_score DESC
    ) AS dept_rank,
    ROUND(AVG(p.kpi_score) OVER(PARTITION BY d.department_id), 2) AS dept_avg_score
FROM employees e
INNER JOIN departments d 
    ON e.department_id = d.department_id
INNER JOIN performance_metrics p 
    ON e.employee_id = p.employee_id
WHERE p.evaluation_period = 'Q3-2024'
ORDER BY d.department_name, dept_rank ASC;`}
              </pre>
            )}

            {activeCodeTab === 'pandas' && (
              <pre className="text-cyan-300 leading-relaxed font-mono-tabular">
{`# ====================================================================
# Sakshi Shridhar Chinta - Data Science & Preprocessing Pipeline
# Focus: Data Cleansing & Feature Engineering @ Kill Spiders (Institute)
# ====================================================================

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

def prepare_training_features(csv_filepath: str):
    df = pd.read_csv(csv_filepath)
    
    # 1. Impute missing numeric values with column median
    num_cols = df.select_dtypes(include=[np.number]).columns
    df[num_cols] = df[num_cols].fillna(df[num_cols].median())
    
    # 2. Extract feature matrix X and target y
    X = df.drop(columns=['target_stress_index'])
    y = df['target_stress_index']
    
    # 3. Scale continuous predictors
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    return train_test_split(X_scaled, y, test_size=0.2, random_state=42)`}
              </pre>
            )}
          </div>

          {/* Terminal Output */}
          <div className="lg:col-span-4 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-mono">Execution Console</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {sandboxOutput ? (
              <pre className="text-[11px] font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap">
                {sandboxOutput}
              </pre>
            ) : (
              <div className="py-8 text-center text-xs text-slate-500">
                Click <strong className="text-slate-300">"Simulate Run"</strong> above to test execution of the active snippet.
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="text-slate-300 font-semibold block mb-0.5">Key Capability Demonstrated:</span>
              {activeCodeTab === 'python' && 'Object-oriented database connector with batch validation and error handling.'}
              {activeCodeTab === 'mysql' && 'Multi-table INNER JOINs combined with DENSE_RANK() and PARTITION BY window functions.'}
              {activeCodeTab === 'pandas' && 'Automated statistical data cleaning, vectorization, and train/test feature scaling.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
