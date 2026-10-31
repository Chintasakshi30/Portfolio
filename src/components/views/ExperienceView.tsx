import React, { useState } from 'react';
import { PORTFOLIO_DATA, Internship } from '../../data/portfolioData';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  Database,
  Code,
  Layers,
  ArrowRight,
  TrendingUp,
  Terminal
} from 'lucide-react';

export const ExperienceView: React.FC = () => {
  const [selectedInternship, setSelectedInternship] = useState<Internship>(PORTFOLIO_DATA.internships[0]);

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          Professional Experience
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Corporate Internships & Industry Experience
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Practical corporate training in software engineering, database normalization, automated Python scripting, and executive business analytics.
        </p>
      </div>

      {/* Experience Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Timeline Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Internship Positions
          </h3>

          {PORTFOLIO_DATA.internships.map((internship) => {
            const isSelected = selectedInternship.id === internship.id;

            return (
              <div
                key={internship.id}
                onClick={() => setSelectedInternship(internship)}
                className={`p-5 rounded-xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1 text-blue-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" /> {internship.location}
                  </span>
                  <span className="font-mono-tabular flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {internship.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white">
                  {internship.role}
                </h3>
                <h4 className="text-sm font-medium text-slate-300">
                  {internship.company}
                </h4>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {internship.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {internship.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Quick Stats banner */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Internship Impact Summary
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Database Queries</span>
                <span className="font-bold text-white text-base font-mono-tabular">150+</span>
                <span className="text-slate-500 block text-[10px]">Optimized & Executed</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Python Modules</span>
                <span className="font-bold text-white text-base font-mono-tabular">25+</span>
                <span className="text-slate-500 block text-[10px]">Scripts & Pipelines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Breakdown of Responsibilities & Artifacts */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40 font-medium">
                  {selectedInternship.company}
                </span>
                <span className="font-mono-tabular">{selectedInternship.period} &middot; {selectedInternship.location}</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white mt-2">
                {selectedInternship.role}
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedInternship.summary}
              </p>
            </div>

            {/* Core Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Responsibilities & Deliverables
              </h3>
              <div className="space-y-2.5">
                {selectedInternship.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Measurable Milestones
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedInternship.achievements.map((ach, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-800/30 text-xs text-slate-300"
                  >
                    <span className="text-blue-400 font-semibold block mb-1">Milestone #{i + 1}</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Sample: SQL & Python Architecture */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                Executed Pipeline Sample ({selectedInternship.company})
              </h3>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                {selectedInternship.id === 'interlace' ? (
                  <pre className="text-[11px] text-blue-300 leading-relaxed">
{`# Sample Python & MySQL Connector & Pipeline Script (Interlace IT)
import mysql.connector
from datetime import datetime

def batch_insert_records(connection, dataset):
    cursor = connection.cursor()
    query = """
    INSERT INTO system_logs (event_type, payload, status, created_at)
    VALUES (%s, %s, %s, %s)
    """
    data = [(item['event'], item['data'], 'VALIDATED', datetime.now()) for item in dataset]
    cursor.executemany(query, data)
    connection.commit()
    print(f"Successfully normalized and committed {cursor.rowcount} records.")`}
                  </pre>
                ) : (
                  <pre className="text-[11px] text-emerald-300 leading-relaxed">
{`-- Complex Analytical Query for KPI Trend Extraction (Kill Spiders Institute)
WITH MonthlyMetrics AS (
  SELECT emp_id,
         DATE_TRUNC('month', review_date) as review_month,
         AVG(rating) OVER(PARTITION BY department) as dept_avg,
         rating - AVG(rating) OVER(PARTITION BY department) as rating_variance
  FROM performance_reviews
)
SELECT emp_id, review_month, ROUND(rating_variance, 2)
FROM MonthlyMetrics
WHERE rating_variance >= 0.5;`}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
