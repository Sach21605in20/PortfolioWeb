import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Cpu, 
  Bot, 
  Rocket, 
  Terminal, 
  ShieldCheck, 
  BookOpen, 
  Globe, 
  ChevronRight,
  Database,
  Search,
  Binary,
  Zap,
  Target,
  Quote,
  ArrowUpRight,
  Monitor,
  Brain,
  Shield,
  Menu,
  X
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home", icon: <Zap className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <Quote className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <Rocket className="w-4 h-4" /> },
  { name: "Stack", href: "#stack", icon: <Code2 className="w-4 h-4" /> },
  { name: "Activities", href: "#activities", icon: <Monitor className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

const PROJECTS = [
  {
    title: "OrthoWatch – Clinical Monitoring",
    description: "A robust clinical recovery monitoring and risk alert platform. Architected a secure MVC + service layer with JWT-based RBAC authentication. Built a rule-based risk scoring engine that triggers automated alerts and SLA-driven escalation workflows. Integrated WhatsApp Cloud API for automated patient checklists, reminders, and wound image processing. Deployed as containerized services on AWS EC2 with Quartz-scheduled jobs for daily monitoring flows.",
    tags: ["Java 23", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS EC2", "WhatsApp API"],
    date: "2026",
    color: "bg-marty-orange",
    link: "https://github.com/Sach21605in20/OrthoWatch"
  },
  {
    title: "ADAS with Lane & Object Detection",
    description: "Advanced Driver Assistance System featuring Forward Collision Warning (FCWS) and Lane Departure Warning (LDWS). Integrated ByteTrack for multi-object tracking, enabling real-time trajectory estimation and directional analysis. Significantly optimized inference speed by applying FP16 quantization and converting models to TensorRT, achieving high-performance real-time processing on edge devices.",
    tags: ["Python", "OpenCV", "YOLO", "ByteTrack", "TensorRT", "C++"],
    date: "2025",
    color: "bg-marty-blue",
    link: "https://github.com/Sach21605in20/Vision-Guard-ADAS"
  },
  {
    title: "Text-to-SQL Query Generation",
    description: "An intelligent Retrieval-Augmented Generation (RAG) pipeline that converts natural language queries to complex SQL statements. Embedded database schema metadata using OpenAI embeddings and implemented FAISS-based semantic retrieval for schema grounding. Achieved 85% execution accuracy on multi-table joins and complex aggregation queries while minimizing hallucinatory column references through structured prompting.",
    tags: ["Python", "GPT-4", "LangChain", "FastAPI", "FAISS", "PostgreSQL"],
    date: "2025",
    color: "bg-marty-red",
    link: "https://github.com/Sach21605in20/Text2SQL"
  },
];

const TECH_STACK = {
  "Languages & Frameworks": ["Python", "SQL", "Java", "Spring Boot", "C++"],
  "Tools & Technologies": ["OpenCV", "YOLO", "PostgreSQL", "Docker", "AWS EC2", "Redis", "JWT"],
  "Hardware Skills": ["STM32", "Arduino"],
  "Domain Knowledge": ["DBMS", "System Design", "OOP", "Agentic AI", "Backend Development"],
  "Areas of Interest": ["Backend Development and Deployment", "Machine Learning", "Agentic AI"]
};

const PRINCIPLES = [
  "I build things to understand them — curiosity drives better code than deadlines.",
  "Every system has a weak point worth finding before someone else does.",
  "Good software isn't just functional — it's something you can hand off without an apology."
];

const COURSES = [
  { 
    title: "PostgreSQL for Everybody (Specialization)", 
    issuer: "University of Michigan", 
    date: "Mar 2025", 
    icon: <Database className="w-5 h-5 text-marty-orange" />,
    link: "https://coursera.org/share/6ec4e676247cf5a44d0ab2803a08df05"
  },
  { 
    title: "Python for Data Science, AI & Development", 
    issuer: "IBM", 
    date: "Aug 2025", 
    icon: <Binary className="w-5 h-5 text-marty-blue" />,
    link: "https://coursera.org/share/bed5ce0f2a9912fd2fd29c86f29ae8a1"
  }
];

const PUBLICATIONS = [
  {
    title: "Robust Federated Learning for Non-IID Medical Images with Trust-Guided Aggregation",
    conference: "2026 9th International Conference on Computational Intelligence in Data Science (ICCIDS)",
    link: "https://ieeexplore.ieee.org/document/11407810"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-marty-cream px-6 py-8 md:py-12 md:px-12 lg:px-16 xl:px-24 cursor-default overflow-x-hidden pt-16 md:pt-28">
      {/* Top Navigation Bar - Minimal Floating Capsule */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto
            flex items-center gap-2 md:gap-8 px-3 md:px-8 py-2 md:py-3 
            bg-white/80 backdrop-blur-lg border border-marty-dark/10
            rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            transition-all duration-500 ease-out
            ${isScrolled ? 'scale-95 py-1.5 md:py-2 bg-white/90 shadow-xl' : 'scale-100'}
          `}
        >
          <div className="flex items-center">
            <span className="font-display text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-marty-dark/70 whitespace-nowrap">
              Sachin
            </span>
          </div>
          
          <div className="h-3 w-[1px] bg-marty-dark/10"></div>

          <div className="flex items-center gap-0 md:gap-2 overflow-x-auto no-scrollbar sm:max-w-none">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-1.5 md:px-3 py-1 text-[8px] md:text-[10px] font-medium uppercase tracking-widest text-marty-dark/50 hover:text-marty-orange transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-marty-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>
        </motion.nav>
      </div>

      {/* Dynamic Background Element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 text-center flex items-center justify-center">
        <div className="text-[25vw] font-display uppercase leading-none select-none">SACHIN</div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        
        {/* Header / Intro Card */}
        <motion.header 
          id="home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8 bg-white border-4 border-marty-dark p-6 md:p-16 rounded-[2rem] pop-shadow flex flex-col justify-between min-h-[auto] md:min-h-[700px] relative z-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mb-4 md:mb-8 pb-2 md:pb-4 relative">
            <div className="flex-1 pt-2 md:pt-0">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-marty-orange border-2 border-marty-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#3A3A3A]"
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                <h2 className="font-mono text-[10px] md:text-sm uppercase tracking-tighter font-bold bg-marty-dark text-white px-3 py-1 rounded">
                  sachin.ramesh/_
                </h2>
              </div>
              <h1 className="text-5xl md:text-9xl font-display uppercase leading-[0.8] tracking-tighter jitter-hover cursor-pointer transition-colors hover:text-marty-orange selection:text-white">
                Sachin <br /> Ramesh
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute right-0 top-20 md:top-0 md:relative w-20 h-20 md:w-64 md:h-64 flex-shrink-0 pointer-events-none select-none order-2 opacity-30 md:opacity-100"
            >
              {/* Central Doodle Node */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-marty-cream border-2 border-dashed border-marty-dark/20 rounded-[3rem] -rotate-3"
              />

              {/* Doodle Cluster */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center opacity-10"
              >
                <div className="w-full h-full border-[1px] border-marty-dark rounded-full border-dashed" />
              </motion.div>

              {/* Interactive Icons (Floating) */}
              {[
                { Icon: Terminal, color: "text-marty-orange", top: "10%", left: "20%", rotate: -15, delay: 0 },
                { Icon: Code2, color: "text-marty-blue", top: "20%", left: "60%", rotate: 12, delay: 0.2 },
                { Icon: Cpu, color: "text-marty-dark", top: "50%", left: "15%", rotate: -8, delay: 0.4 },
                { Icon: Bot, color: "text-marty-red", top: "65%", left: "70%", rotate: 15, delay: 0.6 },
                { Icon: Zap, color: "text-marty-orange", top: "40%", left: "80%", rotate: -20, delay: 0.8 },
                { Icon: Binary, color: "text-marty-blue", top: "75%", left: "40%", rotate: 5, delay: 1.0 },
              ].map((doodle, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, i % 2 === 0 ? 15 : -15, 0]
                  }}
                  transition={{ 
                    delay: doodle.delay,
                    scale: { type: "spring" },
                    y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{ top: doodle.top, left: doodle.left }}
                  className={`absolute p-1.5 md:p-3 bg-white border-2 border-marty-dark rounded-lg md:rounded-xl shadow-[2px_2px_0px_0px_#3A3A3A] md:shadow-[4px_4px_0px_0px_#3A3A3A] ${doodle.color} pointer-events-auto cursor-pointer pop-transition hover:scale-125 hover:rotate-0`}
                >
                  <doodle.Icon className="w-3 h-3 md:w-5 md:h-5" />
                </motion.div>
              ))}

              {/* Hand-drawn SVG Ornaments */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 200">
                <motion.path
                  d="M20,100 Q60,40 100,100 T180,100"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 50] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#3A3A3A" strokeWidth="0.5" strokeDasharray="2,4" />
              </svg>
            </motion.div>
          </div>

          <div>
            <p className="text-xl md:text-3xl font-medium max-w-3xl leading-tight">
              A computer engineering student specializing in <span className="font-bold">Backend Systems</span> and researching <span className="font-bold">Agentic AI</span>. I build tools that reason, plan, and execute.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6 md:mt-12">
            <div className="flex flex-col xs:flex-row gap-4">
              <a href="mailto:sachinrc2006@gmail.com" className="flex-1 py-4 bg-marty-dark text-white rounded-2xl font-display text-2xl uppercase tracking-wider hover:bg-marty-orange pop-transition flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                Get in touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1sElD5Tkf2jGaVYVkekQTVH_2YshXkvL-/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-white border-4 border-marty-dark text-marty-dark rounded-2xl font-display text-2xl uppercase tracking-wider hover:bg-marty-blue hover:text-white pop-transition flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_#3A3A3A]"
              >
                <ArrowUpRight className="w-6 h-6" />
                Resume
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Sach21605in20" target="_blank" className="flex-1 p-4 bg-marty-cream border-2 border-marty-dark rounded-2xl pop-shadow-hover pop-transition flex items-center justify-center">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/sachin-ramesh-448a46317" target="_blank" className="flex-1 p-4 bg-marty-cream border-2 border-marty-dark rounded-2xl pop-shadow-hover pop-transition flex items-center justify-center">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://leetcode.com/u/__Sachin/" target="_blank" className="flex-1 p-4 bg-marty-cream border-2 border-marty-dark rounded-2xl pop-shadow-hover pop-transition flex items-center justify-center">
                <Terminal className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.header>

        {/* Right Column: Philosophy + Education */}
        <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 lg:gap-12 relative z-10">
          <motion.div 
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-marty-dark text-white p-6 md:p-8 rounded-[3rem] border-4 border-marty-dark flex flex-col justify-between shadow-[12px_12px_0px_0px_#FFAD87] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-marty-orange font-mono text-xs uppercase font-bold italic mb-6">
                <Quote className="w-4 h-4" />
                <span>Philosophy</span>
              </div>
              <div className="space-y-6">
                {PRINCIPLES.map((principle, idx) => (
                  <p 
                    key={idx} 
                    className="text-lg font-light leading-tight border-l-2 border-marty-orange pl-4 py-1 italic opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    "{principle}"
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-marty-orange flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-mono uppercase font-black tracking-widest opacity-40">Engineering Principles</p>
            </div>

            <div className="absolute -bottom-4 -right-4 font-display text-8xl text-white/5 select-none pointer-events-none uppercase italic">
              MIND
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="bg-white p-6 md:p-8 rounded-[3rem] border-4 border-marty-dark shadow-[12px_12px_0px_0px_#7C93C3] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-marty-blue rounded-xl flex items-center justify-center text-white border-2 border-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="font-display text-3xl uppercase tracking-tight">Education</h2>
            </div>
            
            <div className="space-y-4 text-lg font-medium leading-tight">
              <div>
                <span className="font-mono text-[10px] uppercase font-black opacity-40 block mb-1">Institution</span>
                <p className="font-bold">Amrita School Of Engineering, Chennai</p>
                <p className="text-sm opacity-80">B.Tech in Computer and Communication Engineering</p>
                <p className="text-xs opacity-60 mt-1">Focus on Scalable Architectures & AI</p>
              </div>
              
              <div>
                <span className="font-mono text-[10px] uppercase font-black opacity-40 block mb-1">Status</span>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-marty-blue" />
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="lg:col-span-12 h-16 bg-marty-dark border-y-4 border-marty-dark flex items-center overflow-hidden -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 relative group">
          <div className="marquee-content font-display text-white text-3xl uppercase tracking-tighter px-4 group-hover:[animation-play-state:paused] cursor-pointer">
            Agentic AI • Distributed Systems • Vulnerability Patching • Python • Java • Machine Learning • Agentic AI • Distributed Systems • Vulnerability Patching • Python • Java • Machine Learning •
          </div>
        </div>

        {/* VulScan AI (Current Work) Section */}
        <motion.section 
          id="research"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 bg-white border-4 border-marty-dark p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] pop-shadow-orange relative overflow-hidden"
        >
          {/* Section Ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-marty-orange opacity-5 -rotate-12 translate-x-12 -translate-y-12"></div>

          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-marty-dark rounded-xl border-2 border-marty-dark flex items-center justify-center shadow-[4px_4px_0px_0px_#FFAD87]">
                  <ShieldCheck className="text-marty-orange w-7 h-7" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase font-black opacity-40 block tracking-widest text-marty-orange">In progress: VulScan AI</span>
                  <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none">Current Work</h2>
                </div>
              </div>

              <div className="space-y-6 text-xl md:text-2xl font-medium leading-[1.1] max-w-2xl">
                <p>
                  Engineering <span className="text-marty-orange font-bold">VulScan AI</span> — an autonomous, reasoning-driven agent for end-to-end vulnerability detection and remediation.
                </p>
                <p className="opacity-70 text-lg md:text-xl">
                  Moving beyond static analysis into iterative patching that understands contextual dependency histories and legacy code patterns.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a 
                  href="https://github.com/Sach21605in20/Code-Vulnerability-Detection" 
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 bg-marty-dark text-white rounded-2xl font-display text-xl uppercase tracking-wider hover:bg-marty-orange pop-transition"
                >
                  <Github className="w-6 h-6" />
                  Visit Repo
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 grid grid-cols-1 gap-4">
              <div className="p-8 bg-marty-cream border-2 border-marty-dark rounded-[2rem] pop-shadow-orange flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-marty-dark flex items-center justify-center text-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A] group-hover:bg-marty-orange group-hover:text-white transition-colors">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase leading-none mb-1">Multi-Step Reasoning</h4>
                  <p className="text-sm opacity-60 leading-tight">Autonomous pathfinding for complex bug chains.</p>
                </div>
              </div>
              
              <div className="p-8 bg-white border-2 border-marty-dark rounded-[2rem] pop-shadow-blue flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-marty-cream border-2 border-marty-dark flex items-center justify-center text-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A] group-hover:bg-marty-blue group-hover:text-white transition-colors">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase leading-none mb-1">CVE Semantic Search</h4>
                  <p className="text-sm opacity-60 leading-tight">Mapping vulnerabilities to fix-patterns instantly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 font-display text-[10rem] text-marty-dark opacity-[0.02] select-none pointer-events-none uppercase italic">
            SECURE
          </div>
        </motion.section>

        <div id="projects" className="lg:col-span-12 flex flex-col gap-8 md:gap-16 mt-4 md:mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-2 md:mb-4"
          >
             <Rocket className="w-8 h-8 md:w-10 md:h-10 text-marty-orange" />
             <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tight">Main Projects</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative group cursor-pointer ${idx === 0 ? 'lg:col-span-2' : ''}`}
              >
                {/* Type 1: Folder Style */}
                {idx === 0 && (
                  <div className="absolute -top-6 left-8 bg-marty-orange border-b-0 border-4 border-marty-dark px-6 py-2 rounded-t-3xl font-display text-white text-xs md:text-sm tracking-widest uppercase z-0">
                    Master_Record_01
                  </div>
                )}

                {/* Type 2: Clipped Tech Style Accessory */}
                {idx === 1 && (
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-marty-dark border-4 border-white rotate-12 flex items-center justify-center z-20 shadow-lg">
                    <Cpu className="w-10 h-10 text-white -rotate-12" />
                  </div>
                )}

                {/* Type 3: Tape/Sticker Accessory */}
                {idx === 2 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-sm border-2 border-marty-dark/20 -rotate-2 z-20 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-marty-dark/10"></div>
                  </div>
                )}

                <div className={`
                  p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-4 border-marty-dark pop-shadow-hover pop-transition flex flex-col justify-between relative z-10 overflow-hidden min-h-[350px] md:min-h-[450px]
                  ${p.color}
                `}>
                  {/* Decorative Backgrounds per type */}
                  {idx === 1 && (
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  )}
                  {idx === 2 && (
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_4px_at_center,#000_1px,transparent_0)] bg-[size:16px_16px]"></div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                      <div className="flex-1">
                        <span className="font-mono text-[10px] uppercase font-black opacity-60 mb-2 block tracking-tighter">DATA ENTRY // 0{idx + 1}</span>
                        <h3 className="font-display text-4xl md:text-7xl text-white uppercase leading-[0.85] tracking-tight group-hover:translate-x-2 transition-transform">{p.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        {p.link && (
                          <a href={p.link} target="_blank" className="p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border-2 border-marty-dark hover:bg-marty-dark hover:text-white transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_#3A3A3A] md:shadow-[6px_6px_0px_0px_#3A3A3A]">
                            <Github className="w-5 h-5 md:w-6 md:h-6" />
                          </a>
                        )}
                        <div className="bg-white text-marty-dark px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-black border-2 border-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A] md:shadow-[6px_6px_0px_0px_#3A3A3A] flex flex-col items-center">
                          <span className="font-mono text-[8px] md:text-xs leading-none mb-1 opacity-50">YEAR</span>
                          <span className="font-display text-xl md:text-3xl leading-none">{p.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg md:text-2xl font-medium text-white mb-8 md:mb-12 leading-tight opacity-90 group-hover:opacity-100 transition-opacity max-w-4xl">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 relative z-10">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs font-black uppercase bg-white text-marty-dark border-2 border-marty-dark px-4 py-2 rounded-xl hover:bg-marty-dark hover:text-white transition-all cursor-default shadow-[3px_3px_0px_0px_#3A3A3A]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic Numbering */}
                  <div className="absolute -bottom-10 -right-4 font-display text-[15rem] text-white/10 select-none pointer-events-none italic uppercase">
                    0{idx + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Full Width Bento Section */}
        <motion.section 
          id="stack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 bg-marty-orange p-6 md:p-10 rounded-[2rem] md:rounded-[4rem] border-4 border-marty-dark shadow-[12px_12px_0px_0px_#3A3A3A] relative overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-marty-dark rounded-xl md:rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
                  <Code2 className="w-6 h-6 md:w-8 md:h-8 text-marty-orange" />
                </div>
                <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-marty-dark">Skills</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TECH_STACK).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  whileHover={{ y: -5, rotate: idx % 2 === 0 ? 1 : -1 }}
                  className={`
                    p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-4 border-marty-dark transition-all duration-300
                    ${idx === 0 ? 'lg:col-span-2 bg-white' : idx === 4 ? 'md:col-span-2 lg:col-span-1 bg-marty-blue text-white' : 'bg-marty-cream'}
                    shadow-[6px_6px_0px_0px_#3A3A3A] md:shadow-[8px_8px_0px_0px_#3A3A3A] flex flex-col gap-4 group
                  `}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`
                      font-display text-xl md:text-2xl uppercase tracking-tight
                      ${idx === 4 ? 'text-white' : 'text-marty-dark'}
                    `}>{category}</h4>
                    <Zap className={`w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity ${idx === 4 ? 'text-white' : 'text-marty-orange'}`} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span 
                        key={item} 
                        className={`
                          px-4 py-1.5 border-2 border-marty-dark rounded-xl text-xs font-bold font-mono shadow-[3px_3px_0px_0px_#3A3A3A] transition-all
                          ${idx === 4 ? 'bg-white text-marty-dark hover:bg-marty-orange hover:text-white' : 'bg-white text-marty-dark hover:bg-marty-blue hover:text-white'}
                        `}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-marty-dark/10 flex items-center justify-between">
             <div className="flex items-center gap-4">
               <span className="text-[10px] font-mono font-black uppercase opacity-40 italic">Technical Architect Portfolio</span>
               <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i <= 3 ? 'bg-marty-dark' : 'bg-white opacity-40'}`}></div>)}
               </div>
             </div>
             <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-marty-dark animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-white border border-marty-dark"></div>
             </div>
          </div>
        </motion.section>

        {/* Courses & Research Section */}
        <motion.section 
          id="activities"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Courses Column */}
          <div className="md:col-span-7 bg-white border-4 border-marty-dark p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] pop-shadow-blue flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 bg-marty-blue text-white rounded-xl flex items-center justify-center border-2 border-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A]">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tight">Certified Courses</h2>
            </div>
            
            <div className="space-y-4">
              {COURSES.map((course, idx) => (
                <motion.a 
                  key={idx}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 md:p-5 bg-marty-cream border-2 border-marty-dark rounded-2xl hover:bg-marty-blue hover:text-white transition-all group cursor-pointer"
                >
                  <div className="p-2 md:p-3 bg-white border-2 border-marty-dark rounded-xl group-hover:scale-110 transition-transform shadow-[3px_3px_0px_0px_#3A3A3A]">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                       <h3 className="font-display text-lg md:text-xl uppercase leading-tight mb-1">{course.title}</h3>
                       <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex items-center gap-2 opacity-60 font-mono text-[9px] md:text-[10px] font-black uppercase">
                      <span>{course.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-current"></span>
                      <span>{course.date}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Research Column */}
          <div className="md:col-span-5 bg-white border-4 border-marty-dark p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] pop-shadow flex flex-col justify-between h-full group hover:bg-marty-dark hover:text-white transition-colors duration-500">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-marty-orange text-white rounded-xl flex items-center justify-center border-2 border-marty-dark shadow-[4px_4px_0px_0px_#3A3A3A]">
                  <Brain className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tight">Research Work</h2>
              </div>

              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg md:text-2xl font-bold leading-tight group-hover:text-marty-orange transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-tight">
                    {pub.conference}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4">
               <a 
                 href={PUBLICATIONS[0].link} 
                 target="_blank"
                 className="flex items-center justify-between p-4 bg-marty-orange text-white rounded-2xl border-2 border-marty-dark font-display text-xl uppercase tracking-wider hover:bg-white hover:text-marty-orange pop-transition shadow-[6px_6px_0px_0px_#3A3A3A]"
               >
                 <span>View Publication</span>
                 <ArrowUpRight className="w-6 h-6" />
               </a>
               <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase opacity-40">
                  <span>IEEE Xplore Digital Library</span>
                  <div className="w-12 h-[1px] bg-current"></div>
                  <span>2026</span>
               </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section / Footer */}
        <motion.footer 
          id="contact" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 py-16 md:py-24 bg-marty-red border-t-8 border-marty-dark -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 px-6 md:px-12 lg:px-16 xl:px-24 text-white relative overflow-hidden mt-8 md:mt-12"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-display text-7xl md:text-12xl uppercase tracking-tight leading-[0.8] mb-8 md:mb-12">
                CONTACT <br /> ME
              </h2>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] md:text-[10px] uppercase font-black opacity-60 mb-2 tracking-widest">Location</span>
                  <div className="flex items-center gap-2 font-display text-xl md:text-2xl uppercase">
                     <Globe className="w-4 h-4 md:w-5 md:h-5 text-marty-cream" />
                     Chennai, India
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/Sach21605in20', icon: <Github /> },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sachin-ramesh-448a46317', icon: <Linkedin /> },
                  { name: 'LeetCode', url: 'https://leetcode.com/u/__Sachin/', icon: <Terminal /> },
                  { name: 'Email', url: 'mailto:sachinrc2006@gmail.com', icon: <Mail /> }
                ].map(social => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    className="flex items-center justify-between p-4 md:p-6 bg-white/10 border-2 border-white/20 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white hover:text-marty-red pop-transition group"
                  >
                    <div className="flex items-center gap-3">
                      {social.icon}
                      <span className="font-display text-xl md:text-2xl uppercase tracking-wider">{social.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-12 border-t border-white/20 font-mono text-[10px] font-black uppercase opacity-60">
                 <p>© 2026 SACHIN RAMESH — ALL RIGHTS RESERVED.</p>
                 <p className="flex items-center gap-2">
                   BUILT WITH CURIOSTY <Rocket className="w-3 h-3" />
                 </p>
              </div>
            </div>
          </div>

          {/* Large Background Element */}
          <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none select-none">
             <div className="text-[30vw] font-display uppercase leading-none">SACHIN</div>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}
