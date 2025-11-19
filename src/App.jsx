import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight, 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Hash,
  Coffee,
  Monitor,
  Activity,
  Dna,
  Database,
  Microscope,
  BookOpen,
  Landmark
} from 'lucide-react';

// --- Data Sourced from Oxford Population Health Profile ---

const PUBLICATIONS = [
  {
    id: 1,
    title: "Pulmonary Embolism Trends (2008-2024)",
    excerpt: "Temporal trends in hospital-recorded pulmonary embolism in England before, during and after the COVID-19 pandemic. Published in Lancet Reg Health Eur (2025).",
    date: "2025",
    tags: ["Epidemiology", "COVID-19", "Lancet"],
    readTime: "Journal Article"
  },
  {
    id: 2,
    title: "Antimicrobial Resistance & Primary Care",
    excerpt: "Antibiotics for common infections in primary care: cohort study of extent of prescribing based on risks of infection-related hospital admissions.",
    date: "2025",
    tags: ["Public Health", "Risk Prediction"],
    readTime: "JRSM"
  },
  {
    id: 3,
    title: "Sepsis Risk Factors & Inequalities",
    excerpt: "Rapid systematic review on risks and outcomes of sepsis: the influence of risk factors associated with health inequalities.",
    date: "2024",
    tags: ["Sepsis", "Health Equity"],
    readTime: "Int J Equity Health"
  }
];

// Updated colors to match Oxford/OxPop theme (Cyan/Blue/Indigo)
const RESEARCH_AREAS = [
  {
    id: 1,
    title: "RISK_PREDICTION_MODELS",
    category: "Clinical Informatics",
    description: "Developing personalised risk scores integrating age, sex, clinical history, and socioeconomic status to aid clinical decision-making systems.",
    tech: ["Linked Data", "Machine Learning", "KSS"],
    color: "border-cyan-300 shadow-cyan-300/50" // Was Lime
  },
  {
    id: 2,
    title: "BIG_DATA_ONCOLOGY",
    category: "Cancer Epidemiology",
    description: "Leveraging population-level datasets (CPRD, OpenSAFELY) to investigate cancer outcomes and inform public health policy.",
    tech: ["OpenSAFELY", "CPRD", "Statistics"],
    color: "border-blue-500 shadow-blue-500/50" // Was Pink, now Oxford Blue
  },
  {
    id: 3,
    title: "PANDEMIC_IMPACT",
    category: "Infectious Disease",
    description: "Quantifying the impact of COVID-19 on disease burden, including cardiovascular disease and infection-related hospital admissions.",
    tech: ["Longitudinal Study", "Health Records"],
    color: "border-indigo-400 shadow-indigo-400/50" // Was Cyan
  }
];

const EXPERTISE = [
  { name: "Health Informatics", level: 95, icon: <Database size={16} /> },
  { name: "Epidemiology", level: 90, icon: <Microscope size={16} /> },
  { name: "Risk Modelling", level: 85, icon: <Activity size={16} /> },
  { name: "R / Python", level: 88, icon: <Code size={16} /> }
];

// --- Components ---

const GlitchText = ({ text, color = "text-white" }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block">
      <span className={`relative z-10 ${color} font-mono font-bold tracking-tighter`}>{text}</span>
      {glitching && (
        <>
          <span className={`absolute top-0 left-[2px] z-0 opacity-70 ${color} animate-pulse`}>{text}</span>
          <span className={`absolute -top-[2px] -left-[2px] z-0 text-cyan-300 opacity-70`}>{text}</span>
          <span className={`absolute top-[2px] left-[2px] z-0 text-blue-700 opacity-70`}>{text}</span>
        </>
      )}
    </div>
  );
};

const BrutalistCard = ({ children, className = "", borderColor = "border-white", hoverColor = "group-hover:bg-white" }) => {
  return (
    <div className={`group relative transition-transform duration-200 hover:-translate-y-2 hover:translate-x-2 ${className}`}>
      {/* Shadow Block - Updated to Blue/Navy tones */}
      <div className={`absolute inset-0 bg-slate-950 translate-x-2 translate-y-2 border-2 ${borderColor} opacity-40 group-hover:opacity-100 transition-opacity duration-200`}></div>
      <div className={`relative h-full bg-slate-900 border-2 ${borderColor} p-6 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        {children}
      </div>
    </div>
  );
};

const NavItem = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300
      ${active 
        ? 'bg-cyan-300 text-slate-950 translate-x-1 -translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800'}
    `}
  >
    {label}
    {active && <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-700" />}
  </button>
);

export default function AvantGardeBlog() {
  const [activeTab, setActiveTab] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'publications':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-center space-x-4 mb-8">
              <BookOpen className="text-blue-500" size={32} />
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">Publications</span>
              </h2>
            </div>
            
            <div className="grid gap-8">
              {PUBLICATIONS.map((post) => (
                <div key={post.id} className="group relative border-b-2 border-slate-800 pb-8 hover:border-cyan-300 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row justify-between md:items-end mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <span className="font-mono text-sm text-slate-500 mt-2 md:mt-0">{post.date} • {post.readTime}</span>
                  </div>
                  <p className="text-slate-400 text-lg max-w-2xl font-serif leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-3 mt-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-300 transition-all duration-300" size={32} />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'research':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
             <div className="flex items-center space-x-4 mb-12">
              <Dna className="text-cyan-300" size={32} />
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Research <span className="text-cyan-300">Areas</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {RESEARCH_AREAS.map((project) => (
                <BrutalistCard key={project.id} borderColor={project.color.split(' ')[0]} className="min-h-[320px]">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2 border ${project.color.split(' ')[0]} text-white`}>
                      <Activity size={20} />
                    </div>
                    <ExternalLink className="text-white hover:text-cyan-300 cursor-pointer" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                  <span className="inline-block px-2 py-0.5 bg-white text-black text-xs font-bold uppercase mb-4">
                    {project.category}
                  </span>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 absolute bottom-6 left-6 right-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-slate-500 border-b border-slate-800 pb-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </BrutalistCard>
              ))}
            </div>
          </div>
        );

      default: // Home
        return (
          <div className="flex flex-col justify-center min-h-[60vh] animate-in fade-in duration-700">
            <div className="border-l-4 border-blue-700 pl-6 md:pl-12 py-2 mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                HEALTH DATA<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">EPIDEMIOLOGIST</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-300 font-serif leading-relaxed">
                  Leveraging large-scale health data to inform public health policy. Specialising in <span className="text-white underline decoration-blue-600 decoration-2 underline-offset-4">clinical risk prediction</span> and <span className="text-white underline decoration-cyan-500 decoration-2 underline-offset-4">cancer epidemiology</span>.
                </p>
                <p className="text-slate-400 text-sm font-mono">
                  BSc (Peking), MSc & PhD (Manchester). Currently at Applied Health Research Unit, Oxford Population Health.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                   <button 
                     onClick={() => setActiveTab('research')}
                     className="group flex items-center space-x-2 bg-white text-slate-950 px-6 py-3 font-bold hover:bg-cyan-300 transition-colors"
                   >
                     <span>VIEW RESEARCH</span>
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                   </button>
                   <div className="flex space-x-4">
                      <a href="mailto:xiaomin.zhong@ndph.ox.ac.uk" className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                        <Mail size={24} />
                      </a>
                      {/* Placeholder links based on typical academic profiles */}
                      <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={24}/>
                   </div>
                </div>
              </div>

              {/* Stats / Info Block */}
              <div className="bg-slate-900 border border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <Landmark size={100} className="text-blue-800"/>
                </div>
                <h3 className="font-mono text-cyan-300 mb-6 text-sm uppercase tracking-widest">Expertise Matrix</h3>
                <div className="space-y-4 relative z-10">
                  {EXPERTISE.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between text-sm text-white mb-1 font-mono">
                        <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 w-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 group-hover:bg-cyan-300 transition-colors duration-300" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-neutral-200 selection:bg-cyan-300 selection:text-slate-950 font-sans overflow-x-hidden">
      
      {/* Background Noise/Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* Cursor Follower (Desktop only) - Adjusted to Blue/Cyan glow */}
      <div 
        className="fixed w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 border-x border-slate-900 min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-20 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3 mb-6 md:mb-0 self-start">
            {/* Logo Box - Cyan background for high vis */}
            <div className="w-10 h-10 bg-cyan-300 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,33,71,1)]">
              <Monitor className="text-slate-950" size={24} />
            </div>
            <div className="flex flex-col">
              <GlitchText text="DR. XIAOMIN_Z" color="text-white text-2xl" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Oxford, UK</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 bg-slate-900/50 p-2 backdrop-blur-sm border border-slate-800">
            <NavItem label="About" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavItem label="Research" active={activeTab === 'research'} onClick={() => setActiveTab('research')} />
            <NavItem label="Publications" active={activeTab === 'publications'} onClick={() => setActiveTab('publications')} />
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 font-mono">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Xiaomin Zhong. Academic Portfolio.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:xiaomin.zhong@ndph.ox.ac.uk" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
              <Mail size={14} /> Contact via Oxford Mail
            </a>
            <span className="text-slate-700">|</span>
            <span className="hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer">
              <Landmark size={14} /> NDPH
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}
