import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ArrowUpRight, 
  BookOpen, 
  Brain, 
  ChevronRight, 
  Database, 
  FileText, 
  Globe, 
  GraduationCap, 
  LayoutGrid, 
  Mail, 
  Microscope, 
  Network, 
  Search, 
  User,
  Presentation // Added for Teaching icon
} from 'lucide-react';

// --- 核心数据 (已同步 Google Scholar & Oxford Profile) ---

const PROFILE = {
  name: "Dr. Xiaomin (Billy) Zhong",
  role: "Health Data Epidemiologist",
  dept: "Nuffield Department of Population Health",
  uni: "University of Oxford",
  bio: "Leveraging large-scale health data to inform public health policy. Specialising in clinical risk prediction, cancer epidemiology, and the impact of global pandemics on disease burden.",
  email: "xiaomin.zhong@ndph.ox.ac.uk"
};

const STATS = [
  { label: "Citations", value: "105+", icon: <FileText size={16} /> },
  { label: "h-index", value: "7", icon: <Activity size={16} /> },
  { label: "Publications", value: "15+", icon: <BookOpen size={16} /> },
];

const PUBLICATIONS = [
  {
    id: 1,
    title: "Temporal trends in hospital-recorded pulmonary embolism (2008–2024)",
    journal: "The Lancet Regional Health–Europe",
    year: "2025",
    type: "Major Study",
    link: "https://scholar.google.com/scholar?q=Temporal+trends+in+hospital-recorded+pulmonary+embolism+in+England+before,+during+and+after+the+COVID-19+pandemic+(2008–2024)"
  },
  {
    id: 2,
    title: "Antibiotics for common infections in primary care & COVID-19 impact",
    journal: "Journal of the Royal Society of Medicine",
    year: "2025",
    type: "Risk Prediction",
    link: "https://scholar.google.com/scholar?q=Antibiotics+for+common+infections+in+primary+care+before,+during+and+after+the+COVID-19+pandemic"
  },
  {
    id: 3,
    title: "Risk of emergency hospital admission related to adverse events",
    journal: "BMC Medicine",
    year: "2024",
    type: "Methodology",
    link: "https://scholar.google.com/scholar?q=Risk+of+emergency+hospital+admission+related+to+adverse+events+after+antibiotic+treatment+in+adults+with+a+common+infection"
  },
  {
    id: 4,
    title: "Sepsis risks and outcomes: influence of health inequalities",
    journal: "Intl. Journal for Equity in Health",
    year: "2024",
    type: "Systematic Review",
    link: "https://scholar.google.com/scholar?q=Rapid+systematic+review+on+risks+and+outcomes+of+sepsis:+the+influence+of+risk+factors+associated+with+health+inequalities"
  }
];

const EXPERTISE = [
  { title: "Clinical Prediction", desc: "Developing risk scores using linked EHR data", icon: <Brain size={20} /> },
  { title: "Cancer Epidemiology", desc: "Big data oncology using CPRD & OpenSAFELY", icon: <Microscope size={20} /> },
  { title: "Health Informatics", desc: "Processing complex longitudinal datasets", icon: <Database size={20} /> },
  { title: "Global Health", desc: "Impact of pandemics on healthcare systems", icon: <Globe size={20} /> },
];

const TEACHING = [
  { course: "Health Data Science MSc", role: "Guest Lecturer", uni: "University of Manchester", year: "2022 - Present" },
  { course: "Global Health Science MSc", role: "Project Supervisor", uni: "University of Oxford", year: "2024 - Present" },
  { course: "Health Informatics PhD", role: "Co-Supervisor", uni: "University of Manchester", year: "2023 - 2024" }
];

// --- 组件 ---

const Card = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-[#002147]/40 backdrop-blur-md border border-blue-900/30 p-6 rounded-2xl hover:border-teal-400/50 hover:bg-[#002147]/60 transition-all duration-500 group relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 blur-[50px] group-hover:bg-teal-400/20 transition-colors duration-500"></div>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
    <div className="w-1 h-6 bg-teal-400 rounded-full"></div>
    {children}
  </h2>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 pb-20">
      {/* 动态背景网格 */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
           style={{ 
             backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-6 pt-12 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* --- Header / Hero Section --- */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Name Card */}
          <Card className="lg:col-span-2 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-xs font-mono text-teal-400 mb-6">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                OPEN TO COLLABORATION
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2">
                {PROFILE.name.split('(')[0]}
              </h1>
              <p className="text-xl text-blue-200/80 font-light">{PROFILE.role}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-400 border-t border-blue-900/50 pt-6 mt-6">
              <GraduationCap size={16} className="text-teal-500" />
              {PROFILE.dept}, {PROFILE.uni}
            </div>
          </Card>

          {/* Stats & Quick Info */}
          <div className="grid grid-rows-2 gap-6">
            <Card className="flex flex-col justify-center">
              <p className="text-sm text-slate-400 mb-4">Research Impact</p>
              <div className="flex justify-between">
                {STATS.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-blue-300/60 flex items-center justify-center gap-1 mt-1">
                      {s.icon} {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="flex items-center justify-between group cursor-pointer hover:bg-teal-900/20">
              <div>
                <p className="text-sm text-slate-400">Contact</p>
                <p className="text-white font-mono text-sm mt-1">{PROFILE.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-black transition-colors">
                <Mail size={18} />
              </div>
            </Card>
          </div>
        </header>

        {/* --- Navigation Tabs --- */}
        <div className="flex gap-8 mb-12 border-b border-blue-900/30 pb-1 overflow-x-auto">
          {['overview', 'publications', 'teaching', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                activeTab === tab ? 'text-teal-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* --- Main Content Area --- */}
        <main className="min-h-[400px]">
          
          {/* VIEW 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <SectionTitle>About Me</SectionTitle>
                <p className="text-lg text-slate-300 leading-relaxed font-light mb-8">
                  {PROFILE.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EXPERTISE.map((exp, i) => (
                    <div key={i} className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/30 hover:border-teal-500/30 transition-colors">
                      <div className="text-teal-400 mb-3">{exp.icon}</div>
                      <h3 className="text-white font-medium mb-1">{exp.title}</h3>
                      <p className="text-xs text-slate-400">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {/* Decorative Visual for 'Data Science' */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-600/10 rounded-3xl blur-xl"></div>
                <Card className="h-full flex flex-col justify-center items-center text-center border-dashed border-blue-800 bg-transparent">
                   <Network size={64} className="text-blue-700 mb-6 opacity-50" />
                   <h3 className="text-xl text-white font-light">Network Analysis &<br/>Population Health</h3>
                   <p className="text-sm text-slate-500 mt-4 max-w-xs">Visualizing complex disease pathways through large-scale electronic health records.</p>
                </Card>
              </div>
            </div>
          )}

          {/* VIEW 2: PUBLICATIONS */}
          {activeTab === 'publications' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SectionTitle>Selected Publications</SectionTitle>
              <div className="grid gap-4">
                {PUBLICATIONS.map((pub) => (
                  <a 
                    key={pub.id} 
                    href={pub.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group block"
                  >
                    <Card className="flex flex-col md:flex-row md:items-center justify-between gap-6 hover:scale-[1.01] transition-transform">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-teal-400 px-2 py-0.5 bg-teal-950/50 rounded border border-teal-900">{pub.year}</span>
                          <span className="text-xs text-slate-500 uppercase tracking-wider">{pub.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-slate-400 italic font-serif">{pub.journal}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                        <ArrowUpRight size={20} />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="https://scholar.google.com/citations?user=rSH7qsgAAAAJ&hl=en" target="_blank" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Search size={16} /> View full list on Google Scholar
                </a>
              </div>
            </div>
          )}

          {/* VIEW 3: TEACHING (Newly Added) */}
          {activeTab === 'teaching' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SectionTitle>Teaching Experience</SectionTitle>
              <div className="grid gap-4">
                {TEACHING.map((item, index) => (
                  <Card key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-900/30 rounded-lg text-teal-400 shrink-0 mt-1 group-hover:bg-teal-500/20 transition-colors">
                         <Presentation size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl text-white font-bold mb-1">{item.course}</h3>
                        <p className="text-teal-300 font-medium">{item.role}</p>
                        <div className="flex items-center gap-3 text-sm text-slate-500 mt-2">
                          <span>{item.uni}</span>
                          <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                          <span className="font-mono">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 4: PROJECTS (Placeholder for now) */}
          {activeTab === 'projects' && (
            <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-500">
              <div className="inline-block p-6 rounded-full bg-blue-900/20 mb-6">
                <LayoutGrid size={48} className="text-blue-500" />
              </div>
              <h3 className="text-2xl text-white font-light mb-2">Research Projects</h3>
              <p className="text-slate-400">Detailed case studies and codebase access coming soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
