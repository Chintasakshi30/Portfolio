import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import {
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  FileText,
  Play,
  CheckCircle,
  BarChart3,
  ListTodo,
  Check,
  Plus,
  Trash2,
  RefreshCw,
  Search,
  Filter
} from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(PORTFOLIO_DATA.projects[0]);
  const [activeDemoTab, setActiveDemoTab] = useState<'preview' | 'interactive'>('preview');

  // Interactive AI Interview Simulator State
  const [selectedTopic, setSelectedTopic] = useState<'Python' | 'SQL' | 'DSA' | 'OOP'>('Python');
  const [userCode, setUserCode] = useState<string>(
`def count_vowels_consonants(text: str) -> dict:
    vowels = set("aeiouAEIOU")
    v_count = sum(1 for c in text if c in vowels)
    c_count = sum(1 for c in text if c.isalpha() and c not in vowels)
    return {"vowels": v_count, "consonants": c_count}`
  );
  const [evalResult, setEvalResult] = useState<{
    status: 'idle' | 'running' | 'success';
    score: number;
    feedback: string;
    complexity: string;
  }>({
    status: 'idle',
    score: 0,
    feedback: '',
    complexity: ''
  });

  // Interactive Stress Classifier State
  const [stressState, setStressState] = useState<'relaxed' | 'focused' | 'stressed'>('focused');

  // Interactive KPI Dashboard State
  const [selectedDept, setSelectedDept] = useState<'All' | 'Engineering' | 'Marketing' | 'Operations'>('All');

  // Interactive Task Manager State
  const [tasks, setTasks] = useState<{ id: number; title: string; priority: 'High' | 'Medium' | 'Low'; completed: boolean }[]>([
    { id: 1, title: 'Build normalized relational schema in MySQL', priority: 'High', completed: true },
    { id: 2, title: 'Train Scikit-learn facial landmark classifier', priority: 'High', completed: true },
    { id: 3, title: 'Deploy Power BI executive KPI dashboard', priority: 'Medium', completed: false },
    { id: 4, title: 'Format research paper submission draft', priority: 'Medium', completed: true }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const categories = ['All', 'AI/ML', 'Data Analytics', 'Python App'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const handleRunEvaluation = () => {
    setEvalResult({ status: 'running', score: 0, feedback: 'Evaluating algorithmic logic and syntax...', complexity: '' });
    setTimeout(() => {
      setEvalResult({
        status: 'success',
        score: 96,
        feedback: 'Clean vectorized logic. Time complexity O(N), auxiliary memory O(1). Passes all 8 internal test fixtures!',
        complexity: 'Time: O(N) | Space: O(1)'
      });
    }, 600);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTaskTitle.trim(), priority: 'Medium', completed: false }
    ]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" />
            Software Engineering & Research
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Featured Projects & Intelligent Systems
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Engineered software systems spanning AI/ML biometric classifiers, full-stack interview preparation tools, Power BI corporate dashboards, and Python desktop software.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Project Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Project Cards List */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Select Project for Live Analysis
          </h3>
          {filteredProjects.map((project) => {
            const isSelected = activeProject?.id === project.id;

            return (
              <div
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  setActiveDemoTab('preview');
                }}
                className={`p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900/90 border-blue-500/80 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-blue-400">
                    {project.category}
                  </span>
                  {project.hasResearchPaper && (
                    <span className="text-[11px] text-purple-300 font-medium bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
                      Research Paper
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Preview & Live Interactive Simulator */}
        <div className="lg:col-span-7">
          {activeProject && (
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
              {/* Top View Toggle */}
              <div className="px-6 py-3.5 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base text-white">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveDemoTab('preview')}
                    className={`px-3 py-1 rounded font-medium transition-all ${
                      activeDemoTab === 'preview'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Architecture & Preview
                  </button>
                  <button
                    onClick={() => setActiveDemoTab('interactive')}
                    className={`px-3 py-1 rounded font-medium flex items-center gap-1.5 transition-all ${
                      activeDemoTab === 'interactive'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Interactive Sandbox
                  </button>
                </div>
              </div>

              {/* Mode 1: Static Architecture & Screenshot Showcase */}
              {activeDemoTab === 'preview' && (
                <div className="p-6 space-y-6">
                  {/* High Fidelity Visual Preview */}
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video relative group">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                      <div className="text-xs text-slate-300">
                        <strong className="text-white block font-medium">{activeProject.subtitle}</strong>
                        <span>Production architecture and component implementation</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Technical Architecture & Implementation Details
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeProject.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-300"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Published Research Paper Callout */}
                  {activeProject.hasResearchPaper && (
                    <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                        <FileText className="w-4 h-4" />
                        Authored Research Publication
                      </div>
                      <p className="text-xs font-medium text-white italic">
                        "{activeProject.researchPaperTitle}"
                      </p>
                      <p className="text-[11px] text-purple-200/80">
                        Authored by Sakshi Shridhar Chinta. Details automated heuristic NLP evaluation pipelines and algorithmic question selection for technical candidates.
                      </p>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Stack & Tools Utilized
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Mode 2: Real Interactive Demo Simulator */}
              {activeDemoTab === 'interactive' && (
                <div className="p-6">
                  {activeProject.demoType === 'interview' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                          <Code2 className="w-4 h-4" /> Live AI Interview Question Evaluator
                        </span>
                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded border border-slate-800 text-[11px]">
                          {(['Python', 'SQL', 'DSA', 'OOP'] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTopic(t)}
                              className={`px-2 py-0.5 rounded transition-colors ${
                                selectedTopic === t ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <div className="text-slate-400 font-mono mb-1">Topic: {selectedTopic} &middot; Difficulty: Medium</div>
                        <div className="text-white font-medium">
                          {selectedTopic === 'Python' && 'Write a Python function to parse a string and return vowel and consonant counts.'}
                          {selectedTopic === 'SQL' && 'Write a SQL query using window function DENSE_RANK() to find highest paid employee per department.'}
                          {selectedTopic === 'DSA' && 'Implement an algorithm to detect a cycle in a singly linked list.'}
                          {selectedTopic === 'OOP' && 'Demonstrate encapsulation and abstract method implementation in a Shape hierarchy.'}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400">Interactive Solution Editor (Editable):</label>
                        <textarea
                          value={userCode}
                          onChange={(e) => setUserCode(e.target.value)}
                          rows={6}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-blue-300 focus:outline-none focus:border-blue-500 font-mono-tabular"
                          spellCheck={false}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={handleRunEvaluation}
                          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Run AI Evaluation</span>
                        </button>

                        <button
                          onClick={() => {
                            setUserCode(
`def count_vowels_consonants(text: str) -> dict:
    vowels = set("aeiouAEIOU")
    v_count = sum(1 for c in text if c in vowels)
    c_count = sum(1 for c in text if c.isalpha() and c not in vowels)
    return {"vowels": v_count, "consonants": c_count}`
                            );
                            setEvalResult({ status: 'idle', score: 0, feedback: '', complexity: '' });
                          }}
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                        >
                          <RefreshCw className="w-3 h-3" /> Reset Code
                        </button>
                      </div>

                      {evalResult.status !== 'idle' && (
                        <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/40 space-y-2 animate-in fade-in duration-200">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                              <Check className="w-4 h-4 text-emerald-400" /> Automated Assessment Output
                            </span>
                            {evalResult.status === 'success' && (
                              <span className="text-xs font-bold text-emerald-400 font-mono-tabular">
                                Score: {evalResult.score} / 100
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-300">{evalResult.feedback}</p>
                          {evalResult.complexity && (
                            <div className="text-[11px] font-mono text-blue-400">
                              Complexity Audit: {evalResult.complexity}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {activeProject.demoType === 'stress' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-blue-400">
                          Facial Landmark & Sentiment Classifier Simulation
                        </span>
                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded border border-slate-800 text-[11px]">
                          {(['relaxed', 'focused', 'stressed'] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setStressState(mode)}
                              className={`px-3 py-1 rounded capitalize font-medium transition-colors ${
                                stressState === mode
                                  ? 'bg-blue-600 text-white'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                          <span className="text-xs text-slate-400 block font-medium">Biometric Classification</span>
                          <div className="text-lg font-bold text-white capitalize flex items-center gap-2">
                            <span>Status: {stressState}</span>
                            <span className={`w-2.5 h-2.5 rounded-full ${
                              stressState === 'relaxed' ? 'bg-emerald-400' :
                              stressState === 'focused' ? 'bg-blue-400' : 'bg-rose-400'
                            }`} />
                          </div>

                          <div className="space-y-2 text-xs">
                            <div>
                              <div className="flex justify-between text-slate-400 mb-1">
                                <span>Eye Blink Frequency</span>
                                <span className="font-mono-tabular">
                                  {stressState === 'relaxed' ? '14 bpm (Normal)' : stressState === 'focused' ? '18 bpm (Active)' : '32 bpm (Elevated)'}
                                </span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full transition-all duration-300 ${
                                  stressState === 'relaxed' ? 'w-1/3 bg-emerald-400' :
                                  stressState === 'focused' ? 'w-1/2 bg-blue-400' : 'w-4/5 bg-rose-400'
                                }`} />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-slate-400 mb-1">
                                <span>Jaw / Brow Tension Index</span>
                                <span className="font-mono-tabular">
                                  {stressState === 'relaxed' ? '0.12' : stressState === 'focused' ? '0.45' : '0.89'}
                                </span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full transition-all duration-300 ${
                                  stressState === 'relaxed' ? 'w-[12%] bg-emerald-400' :
                                  stressState === 'focused' ? 'w-[45%] bg-blue-400' : 'w-[89%] bg-rose-400'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                          <span className="text-slate-400 block font-medium">Scikit-learn Model Inference</span>
                          <div className="font-mono text-emerald-400 bg-slate-900/90 p-2.5 rounded border border-slate-800 text-[11px] space-y-1">
                            <div>classifier.predict_proba(features)</div>
                            <div>- Relaxed: {stressState === 'relaxed' ? '88.4%' : '6.2%'}</div>
                            <div>- Focused: {stressState === 'focused' ? '82.1%' : '14.5%'}</div>
                            <div>- Stressed: {stressState === 'stressed' ? '91.8%' : '7.3%'}</div>
                          </div>
                          <p className="text-slate-400 text-[11px]">
                            Engineered by Sakshi using OpenCV facial contour extraction and supervised multi-class SVM/RandomForest classifiers.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.demoType === 'analytics' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-blue-400">
                          Power BI & SQL Metric Simulator
                        </span>
                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded border border-slate-800 text-[11px]">
                          {(['All', 'Engineering', 'Marketing', 'Operations'] as const).map((d) => (
                            <button
                              key={d}
                              onClick={() => setSelectedDept(d)}
                              className={`px-2.5 py-1 rounded transition-colors ${
                                selectedDept === d ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400">Headcount</span>
                          <div className="text-xl font-bold text-white font-mono-tabular mt-1">
                            {selectedDept === 'All' ? '1,248' : selectedDept === 'Engineering' ? '540' : selectedDept === 'Marketing' ? '320' : '388'}
                          </div>
                          <span className="text-[10px] text-emerald-400">+3.1% YoY</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400">Avg KPI Score</span>
                          <div className="text-xl font-bold text-white font-mono-tabular mt-1">
                            {selectedDept === 'All' ? '4.2 / 5' : selectedDept === 'Engineering' ? '4.6 / 5' : selectedDept === 'Marketing' ? '4.1 / 5' : '4.0 / 5'}
                          </div>
                          <span className="text-[10px] text-blue-400">Normalized Index</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-[11px] text-slate-400">Retention Rate</span>
                          <div className="text-xl font-bold text-white font-mono-tabular mt-1">
                            {selectedDept === 'All' ? '96.5%' : selectedDept === 'Engineering' ? '98.2%' : selectedDept === 'Marketing' ? '94.8%' : '95.1%'}
                          </div>
                          <span className="text-[10px] text-emerald-400">Stable</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <span className="text-slate-400 font-mono block mb-1">Generated SQL Query View:</span>
                        <pre className="font-mono text-[11px] text-blue-300 overflow-x-auto whitespace-pre font-mono-tabular">
{`SELECT department, COUNT(emp_id) as total_staff,
       ROUND(AVG(kpi_score), 2) as avg_kpi,
       SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) * 100.0 / COUNT(*) as retention_pct
FROM employee_performance_tbl
${selectedDept !== 'All' ? `WHERE department = '${selectedDept}'\n` : ''}GROUP BY department;`}
                        </pre>
                      </div>
                    </div>
                  )}

                  {activeProject.demoType === 'taskmanager' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-blue-400">
                          Python Tkinter OOP Architecture Simulator
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono-tabular">
                          {tasks.filter(t => t.completed).length} / {tasks.length} Completed
                        </span>
                      </div>

                      <form onSubmit={handleAddTask} className="flex gap-2">
                        <input
                          type="text"
                          value={newTaskTitle}
                          onChange={(e) => setNewTaskTitle(e.target.value)}
                          placeholder="Add new engineering task..."
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> Add
                        </button>
                      </form>

                      <div className="space-y-2 max-h-56 overflow-y-auto">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                              task.completed
                                ? 'bg-slate-950/40 border-slate-800/50 text-slate-500'
                                : 'bg-slate-950 border-slate-800 text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <button
                                onClick={() => toggleTask(task.id)}
                                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                                  task.completed
                                    ? 'bg-emerald-600 border-emerald-500 text-white'
                                    : 'border-slate-600 hover:border-slate-400'
                                }`}
                              >
                                {task.completed && <Check className="w-3 h-3" />}
                              </button>
                              <span className={task.completed ? 'line-through text-slate-500' : ''}>
                                {task.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-400 px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800">
                                {task.priority}
                              </span>
                              <button
                                onClick={() => deleteTask(task.id)}
                                className="text-slate-500 hover:text-rose-400 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
