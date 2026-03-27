import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Code, 
  ExternalLink, 
  ChevronRight, 
  Globe, 
  MapPin, 
  Calendar,
  Search,
  Award
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: ReactNode, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl mb-12 flex items-center gap-3">
        <span className="text-accent font-mono text-lg opacity-50">#</span>
        {title}
      </h2>
      {children}
    </motion.div>
  </section>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "News", href: "#news" },
    { name: "Education", href: "#education" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-accent/10 selection:text-accent">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#top" 
            className="font-serif text-xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            ZIYANG LIU
          </motion.a>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>
          <button className="md:hidden text-primary">
            <Search size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for Collaboration
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9]">
              Ziyang <br />
              <span className="text-accent italic">Liu</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
              Ph.D. Student · Collaborative Researcher <br />
              <span className="font-medium text-primary">Institute of Science Tokyo · Sophia University</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="mailto:shiyo.lzy@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/10">
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-surface transition-all duration-300">
                <FileText size={18} />
                <span>Curriculum Vitae</span>
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="https://github.com/ziyangliu-research" target="_blank" className="text-secondary hover:text-primary transition-colors">
                  <Github size={22} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Globe size={22} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-accent/10 rounded-[40px] rotate-6"></div>
            <div className="absolute inset-0 bg-surface border border-border rounded-[40px] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/ziyang/800/800" 
                alt="Ziyang Liu" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              I am currently a Ph.D. student at the <span className="text-primary font-medium">Institute of Science Tokyo</span> and a collaborative researcher at <span className="text-primary font-medium">Sophia University</span>. My research focuses on the intersection of human-computer interaction and collaborative technologies.
            </p>
            <p>
              With a background in computer science and a passion for designing systems that empower human collaboration, I explore how digital tools can facilitate more effective and meaningful interactions in both professional and educational settings.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["HCI", "Collaborative Systems", "CSCW", "User Experience", "AI for Research"].map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-accent" />
                Location
              </h3>
              <p className="text-secondary">Tokyo, Japan</p>
            </div>
            <div className="card">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Globe size={18} className="text-accent" />
                Languages
              </h3>
              <p className="text-secondary">English (Fluent), Japanese (Advanced), Chinese (Native)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* News Section */}
      <Section id="news" title="News" className="bg-surface/50">
        <div className="max-w-3xl">
          {[
            { date: "Mar 2026", content: "Presented our latest work on collaborative interfaces at CHI 2026." },
            { date: "Jan 2026", content: "Joined the Institute of Science Tokyo as a Ph.D. candidate." },
            { date: "Nov 2025", content: "Awarded the Best Paper Honorable Mention at CSCW 2025." },
            { date: "Sep 2025", content: "Started a research collaboration with Sophia University." },
          ].map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest mb-1 block">{item.date}</span>
              <p className="text-primary font-medium">{item.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education & Positions">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" />
              Education
            </h3>
            {[
              { degree: "Ph.D. in Computer Science", school: "Institute of Science Tokyo", year: "2026 - Present" },
              { degree: "M.S. in Information Systems", school: "Sophia University", year: "2023 - 2025" },
              { degree: "B.S. in Software Engineering", school: "Placeholder University", year: "2019 - 2023" },
            ].map((edu, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p className="text-sm text-secondary">{edu.school}</p>
                  <p className="text-xs text-accent font-mono mt-1">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <Briefcase className="text-accent" />
              Positions
            </h3>
            {[
              { role: "Collaborative Researcher", org: "Sophia University", year: "2025 - Present" },
              { role: "Research Assistant", org: "HCI Lab, Tokyo", year: "2024 - 2025" },
              { role: "Software Engineer Intern", org: "Tech Corp", year: "Summer 2022" },
            ].map((pos, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">{pos.role}</h4>
                  <p className="text-sm text-secondary">{pos.org}</p>
                  <p className="text-xs text-accent font-mono mt-1">{pos.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research Interests" className="bg-surface/50">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Human-Computer Interaction", 
              desc: "Exploring how humans interact with digital systems and designing more intuitive interfaces.",
              icon: <Globe className="text-accent" />
            },
            { 
              title: "Collaborative Systems", 
              desc: "Building tools that facilitate group work and shared understanding across distances.",
              icon: <Code className="text-accent" />
            },
            { 
              title: "AI-Augmented Research", 
              desc: "Leveraging large language models to assist researchers in literature review and data analysis.",
              icon: <BookOpen className="text-accent" />
            },
          ].map((item, i) => (
            <div key={i} className="card group">
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications">
        <div className="space-y-8">
          {[
            { 
              title: "Designing Collaborative Interfaces for Remote Research Teams", 
              authors: "Ziyang Liu, Jane Doe, John Smith", 
              venue: "CHI 2026", 
              year: "2026",
              tags: ["Conference", "HCI"],
              link: "#"
            },
            { 
              title: "Understanding Synchronous Collaboration in Virtual Environments", 
              authors: "Ziyang Liu, Alice Wong", 
              venue: "CSCW 2025", 
              year: "2025",
              tags: ["Conference", "CSCW"],
              award: "Best Paper Honorable Mention",
              link: "#"
            },
            { 
              title: "A Survey of Multi-User Interaction Techniques in AR", 
              authors: "Ziyang Liu, et al.", 
              venue: "IEEE VR 2024", 
              year: "2024",
              tags: ["Journal", "AR"],
              link: "#"
            },
          ].map((pub, i) => (
            <div key={i} className="group relative p-6 rounded-2xl border border-border hover:bg-surface transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map(tag => <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-accent">{tag}</span>)}
                    {pub.award && <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500 flex items-center gap-1"><Award size={10} /> {pub.award}</span>}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{pub.title}</h3>
                  <p className="text-sm text-secondary italic">{pub.authors}</p>
                  <p className="text-sm font-medium">{pub.venue}, {pub.year}</p>
                </div>
                <a href={pub.link} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="bg-surface/50">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "CollabCanvas", 
              desc: "A real-time collaborative whiteboard for research brainstorming with integrated AI assistance.",
              tech: ["React", "WebSockets", "Gemini API"],
              image: "https://picsum.photos/seed/collab/800/450"
            },
            { 
              title: "ResearchFlow", 
              desc: "An automated pipeline for managing academic literature and generating summaries.",
              tech: ["Python", "FastAPI", "Next.js"],
              image: "https://picsum.photos/seed/research/800/450"
            },
          ].map((project, i) => (
            <div key={i} className="card p-0 overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map(t => <span key={t} className="text-[10px] font-mono bg-surface px-2 py-1 rounded border border-border">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer id="contact" className="bg-primary text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tighter">Let's <span className="text-accent italic">Connect</span></h2>
              <p className="text-gray-400 max-w-md leading-relaxed">
                I'm always open to discussing research collaborations, speaking opportunities, or just chatting about HCI and technology.
              </p>
              <div className="space-y-4">
                <a href="mailto:shiyo.lzy@gmail.com" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                  <Mail className="text-accent" />
                  shiyo.lzy@gmail.com
                </a>
                <div className="flex gap-6 pt-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-serif">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {navItems.map(item => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-accent" />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  © 2026 ZIYANG LIU. Built with React & Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
