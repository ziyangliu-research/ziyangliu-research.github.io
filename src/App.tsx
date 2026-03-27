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
    { name: "News", href: "#news" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-accent/10 selection:text-accent">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#top" 
            className="font-serif text-lg font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            ZIYANG LIU
          </motion.a>
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link text-xs uppercase tracking-widest">
                {item.name}
              </a>
            ))}
          </div>
          <button className="md:hidden text-primary">
            <Search size={18} />
          </button>
        </div>
      </nav>

      {/* Hero & Profile Integrated */}
      <section id="top" className="pt-24 pb-12 md:pt-36 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            className="flex-[2] space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-tight">
                Ziyang <span className="text-accent italic">Liu</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                Ph.D. Student @ <span className="text-primary font-medium">Institute of Science Tokyo</span> <br className="hidden md:block" />
                Collaborative Researcher @ <span className="text-primary font-medium">Sophia University</span>
              </p>
            </div>

            <div className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl space-y-4">
              <p>
                I am a Ph.D. student at the <span className="text-primary font-medium">Institute of Science Tokyo</span> and a collaborative researcher at <span className="text-primary font-medium">Sophia University</span>. My research focuses on the intersection of human-computer interaction and collaborative technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HCI", "Collaborative Systems", "CSCW", "User Experience", "AI for Research"].map(tag => (
                  <span key={tag} className="badge text-[9px]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border">
              <div className="space-y-4">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-wider flex items-center gap-2 text-accent">
                  <GraduationCap size={18} />
                  Education
                </h3>
                <div className="space-y-2">
                  {[
                    { degree: "Ph.D. in Computer Science", school: "Institute of Science Tokyo", year: "2026 - Present" },
                    { degree: "M.S. in Information Systems", school: "Sophia University", year: "2023 - 2025" },
                  ].map((edu, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-bold">{edu.degree}</p>
                      <p className="text-secondary text-xs">{edu.school} · {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-wider flex items-center gap-2 text-accent">
                  <Briefcase size={18} />
                  Positions
                </h3>
                <div className="space-y-2">
                  {[
                    { role: "Collaborative Researcher", org: "Sophia University", year: "2025 - Present" },
                    { role: "Research Assistant", org: "HCI Lab, Tokyo", year: "2024 - 2025" },
                  ].map((pos, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-bold">{pos.role}</p>
                      <p className="text-secondary text-xs">{pos.org} · {pos.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[320px] mx-auto md:mx-0">
              <div className="absolute inset-0 bg-accent/5 rounded-3xl rotate-3"></div>
              <div className="absolute inset-0 bg-surface border border-border rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src="https://picsum.photos/seed/ziyang/600/600" 
                  alt="Ziyang Liu" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-5 px-2">
              <div className="space-y-2">
                <h4 className="text-sm md:text-base font-bold uppercase text-accent tracking-wider">Contact & Location</h4>
                <div className="space-y-2 pt-1">
                  <a href="mailto:shiyo.lzy@gmail.com" className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors">
                    <Mail size={14} />
                    shiyo.lzy@gmail.com
                  </a>
                  <p className="flex items-center gap-2 text-sm text-secondary">
                    <MapPin size={14} />
                    Tokyo, Japan
                  </p>
                  <p className="flex items-center gap-2 text-sm text-secondary">
                    <Globe size={14} />
                    EN, JP, CN
                  </p>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/ziyangliu-research" target="_blank" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <FileText size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section - Compact */}
      <Section id="news" title="Recent News" className="bg-surface/30">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            { date: "Mar 2026", content: "Presented our work at CHI 2026." },
            { date: "Jan 2026", content: "Joined Institute of Science Tokyo." },
            { date: "Nov 2025", content: "Best Paper Honorable Mention @ CSCW 2025." },
            { date: "Sep 2025", content: "Collaboration with Sophia University." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest pt-1 shrink-0">{item.date}</span>
              <p className="text-sm text-primary">{item.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications">
        <div className="space-y-4">
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
            <div key={i} className="group p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-white transition-all duration-300">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    {pub.tags.map(tag => <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-accent">{tag}</span>)}
                    {pub.award && <span className="text-[9px] uppercase tracking-widest font-bold text-orange-500 flex items-center gap-1"><Award size={10} /> {pub.award}</span>}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors leading-tight">{pub.title}</h3>
                  <p className="text-xs text-secondary italic">{pub.authors}</p>
                  <p className="text-xs font-medium">{pub.venue}, {pub.year}</p>
                </div>
                <a href={pub.link} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shrink-0">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section - Research Results Focus */}
      <Section id="projects" title="Research Projects">
        <div className="grid md:grid-cols-2 gap-6">
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
            <div key={i} className="card p-0 overflow-hidden flex flex-row h-40">
              <div className="w-1/3 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-2/3 p-4 space-y-2 flex flex-col justify-center">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-secondary text-xs leading-relaxed line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tech.map(t => <span key={t} className="text-[9px] font-mono bg-surface px-1.5 py-0.5 rounded border border-border">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* News Section - Compact */}
      <Section id="news" title="Recent News" className="bg-surface/30">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            { date: "Mar 2026", content: "Presented our work at CHI 2026." },
            { date: "Jan 2026", content: "Joined Institute of Science Tokyo." },
            { date: "Nov 2025", content: "Best Paper Honorable Mention @ CSCW 2025." },
            { date: "Sep 2025", content: "Collaboration with Sophia University." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest pt-1 shrink-0">{item.date}</span>
              <p className="text-sm text-primary">{item.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section - Streamlined */}
      <footer id="contact" className="bg-primary text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-serif tracking-tighter">Let's <span className="text-accent italic">Connect</span></h2>
            <p className="text-gray-400 text-sm">Tokyo, Japan · shiyo.lzy@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:shiyo.lzy@gmail.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Mail size={18} />
            </a>
            <a href="https://github.com/ziyangliu-research" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Globe size={18} />
            </a>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 ZIYANG LIU
          </p>
        </div>
      </footer>
    </div>
  );
}
