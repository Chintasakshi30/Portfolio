import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  ExternalLink,
  Linkedin,
  FileText,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeResumeIndex, setActiveResumeIndex] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const currentResume = PORTFOLIO_DATA.personal.resumes[activeResumeIndex];

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <Mail className="w-3.5 h-3.5" />
          Direct Engagement
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Contact & Verified Resumes
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          Get in touch with Sakshi Shridhar Chinta for full-time software engineering, AI/ML development, and data analytics roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Dual Resumes */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Cards */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-display font-bold text-lg text-white">
              Contact Information
            </h3>

            {/* Email Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Email</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Phone / Mobile</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors font-mono-tabular"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Current Location</span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {PORTFOLIO_DATA.personal.location}
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-slate-500">Open to Relocation</span>
            </div>
          </div>

          {/* Official Resume Downloads */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-white">
                Download Official Resumes
              </h3>
              <FileDown className="w-4 h-4 text-blue-400" />
            </div>

            <p className="text-xs text-slate-400">
              Two curated resume variants provided in attachments, formatted for automated ATS parsing:
            </p>

            <div className="space-y-3">
              {PORTFOLIO_DATA.personal.resumes.map((resume, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    activeResumeIndex === idx
                      ? 'bg-slate-950 border-blue-500/70 shadow-md'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {resume.title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        {resume.badge} &middot; PDF Format
                      </span>
                    </div>

                    <a
                      href={resume.url}
                      download={resume.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-400 truncate max-w-[200px]">
                      {resume.filename}
                    </span>
                    <button
                      onClick={() => setActiveResumeIndex(idx)}
                      className="text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Embedded PDF Preview & Direct Message Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Resume PDF Embedded Viewer Container */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-white font-display">
                  Live Document Viewer: {currentResume.title}
                </span>
              </div>
              <a
                href={currentResume.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
              >
                <span>Fullscreen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="h-[460px] bg-slate-950 relative">
              <iframe
                src={currentResume.url}
                title="Resume PDF Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>

          {/* Interactive Message Dispatch Form */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-display font-bold text-lg text-white">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Message Prepared!
                </div>
                <p>
                  Thank you! Your inquiry has been processed. You can also reach Sakshi directly via email at <strong className="text-white">chintasakshi30@gmail.com</strong> or phone at <strong className="text-white">+91 9022511674</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 text-xs text-emerald-400 underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Your Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Subject / Role Opportunity</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer / Python Developer Position"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the role, team, or project requirements..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Sakshi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
