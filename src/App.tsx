/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Figma, 
  Code2, 
  Cpu, 
  Lightbulb, 
  ChevronRight, 
  Menu, 
  X,
  Send,
  Phone,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter">
          ANISHA<span className="text-accent-orange">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-accent-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-accent-orange text-white text-sm font-semibold hover:bg-accent-orange/80 transition-all glow-orange"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-accent-orange"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-brown/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for Opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I’m <span className="text-gradient">Anisha D’souza</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-8 font-light max-w-lg">
            BSc IT Graduate <span className="text-accent-orange mx-2">|</span> UI/UX Enthusiast <span className="text-accent-orange mx-2">|</span> Creative Thinker
          </p>
          <p className="text-white/40 mb-10 max-w-md leading-relaxed">
            A passionate designer and developer focused on creating meaningful digital experiences. I'm a fast learner with a creative soul, ready to build the future.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-accent-orange text-white font-bold flex items-center gap-2 hover:scale-105 transition-transform glow-orange"
            >
              View Projects <ChevronRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl glass text-white font-bold hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass p-4">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 relative group">
              <img 
                src="attachment/input_file_0.png" 
                alt="Anisha D'souza" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('picsum')) {
                    target.src = 'https://picsum.photos/seed/anisha/800/1000';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
              
              {/* Floating elements over the image */}
              <motion.div
                className="absolute top-6 right-6"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="glass p-3 rounded-xl">
                  <Figma size={24} className="text-accent-orange" />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-6 left-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="glass p-3 rounded-xl">
                  <Code2 size={24} className="text-accent-brown" />
                </div>
              </motion.div>
            </div>
          </div>
          {/* Decorative rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-accent-orange/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-accent-brown/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-display font-bold">About <span className="text-accent-orange">Me</span></h2>
            <div className="h-1 w-20 bg-accent-orange rounded-full" />
            <p className="text-white/70 text-lg leading-relaxed">
              I am a 2026 undergraduate from <span className="text-white font-semibold">SIES College, Nerul</span>, with a degree in <span className="text-white font-semibold">BSc IT</span>. My journey in technology is driven by a passion for blending technical efficiency with creative design.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              With a background in IT and a 3-month internship in UI/UX design, I've developed a keen eye for detail and a user-centric approach to problem-solving. I thrive in environments that challenge my creativity and adaptability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-2xl">
                <h4 className="text-accent-orange font-bold text-2xl mb-1">2026</h4>
                <p className="text-white/50 text-sm">Graduation Year</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <h4 className="text-accent-orange font-bold text-2xl mb-1">3mo+</h4>
                <p className="text-white/50 text-sm">Internship Exp.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4 group hover:glow-orange transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-xl font-bold">Creative</h4>
              <p className="text-white/40 text-sm">Thinking outside the box to find unique solutions.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4 group hover:glow-orange transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-brown/10 flex items-center justify-center text-accent-brown group-hover:bg-accent-brown group-hover:text-white transition-all">
                <Cpu size={32} />
              </div>
              <h4 className="text-xl font-bold">Fast Learner</h4>
              <p className="text-white/40 text-sm">Quickly adapting to new technologies and tools.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4 group hover:glow-orange transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                <Code2 size={32} />
              </div>
              <h4 className="text-xl font-bold">Detail Oriented</h4>
              <p className="text-white/40 text-sm">Focusing on precision in both design and code.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4 group hover:glow-orange transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-brown/10 flex items-center justify-center text-accent-brown group-hover:bg-accent-brown group-hover:text-white transition-all">
                <ExternalLink size={32} />
              </div>
              <h4 className="text-xl font-bold">Passionate</h4>
              <p className="text-white/40 text-sm">Dedicated to creating impactful digital experiences.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="text-accent-orange" />,
      skills: ['C', 'Python', 'Java']
    },
    {
      title: 'Web Dev',
      icon: <ExternalLink className="text-accent-brown" />,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'UI/UX Design',
      icon: <Figma className="text-accent-orange" />,
      skills: ['Wireframing', 'Prototyping', 'User Flows']
    },
    {
      title: 'Databases',
      icon: <Cpu className="text-accent-brown" />,
      skills: ['SQL', 'MongoDB']
    },
    {
      title: 'Testing & Analysis',
      icon: <ChevronRight className="text-accent-orange" />,
      skills: ['Manual Testing', 'Bug Reporting']
    },
    {
      title: 'Tools',
      icon: <Github className="text-accent-brown" />,
      skills: ['Git', 'GitHub', 'WordPress']
    },
    {
      title: 'Productivity',
      icon: <Lightbulb className="text-accent-orange" />,
      skills: ['MS Excel', 'MS PowerPoint']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-accent-brown" />,
      skills: ['Teamwork', 'Creativity', 'Adaptability']
    },
    {
      title: 'Languages',
      icon: <Mail className="text-accent-orange" />,
      skills: ['English (Fluent)', 'Hindi', 'Konkani']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-accent-orange">Skills</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and creative capabilities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/5 rounded-xl">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60 hover:border-accent-orange/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'Smart Timetable App',
      desc: 'An AI-powered smart timetable application designed to optimize student schedules efficiently.',
      tools: ['AI', 'Web Dev', 'Planning'],
      image: 'attachment/input_file_2.png',
      fallback: 'https://picsum.photos/seed/timetable/800/600',
      link: 'https://anishadsouza1207-star.github.io/smart-timetable-app/'
    },
    {
      name: 'Crochet Blossoms',
      desc: 'A beautiful business website built for a crochet brand, showcasing handmade products and brand story.',
      tools: ['Canva', 'Web Design', 'Branding'],
      image: 'attachment/input_file_1.png',
      fallback: 'https://picsum.photos/seed/crochet/800/600',
      link: 'https://crochetblossoms.my.canva.site/'
    },
    {
      name: 'Personal Portfolio Website',
      desc: 'A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.',
      tools: ['React', 'Tailwind', 'Motion'],
      image: 'attachment/input_file_3.png',
      fallback: 'https://picsum.photos/seed/portfolio/800/600',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-accent-orange">Projects</span></h2>
            <p className="text-white/50 max-w-xl">Showcasing my best work in design and development, where I bring ideas to life.</p>
          </div>
          <a href="#" className="text-accent-orange font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[2.5rem] overflow-hidden hover:glow-orange transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('picsum')) {
                      target.src = project.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-accent-orange/60 px-2 py-1 rounded bg-accent-orange/5">
                      {tool}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-orange transition-colors">{project.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold text-sm flex items-center gap-2 group/btn"
                >
                  View Project <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My <span className="text-accent-orange">Experience</span></h2>
          <p className="text-white/50">My professional growth and the milestones I've achieved.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 border-l-2 border-accent-orange/30 pb-12"
          >
            <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-orange glow-orange" />
            
            <div className="glass p-8 rounded-3xl relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent-orange">UI/UX Design Intern</h3>
                  <p className="text-white/70 font-medium">snatcho LLP</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-white/50 text-sm border border-white/5">
                  3 Months Duration
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-white/60 leading-relaxed">
                  During this intensive 3-month internship, I immersed myself in the world of user-centric design, working closely with senior designers to deliver high-quality digital products.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <ChevronRight size={16} className="text-accent-orange" /> Key Learnings
                    </h4>
                    <ul className="text-sm text-white/50 space-y-2">
                      <li>• Mastering Figma for high-fidelity prototyping</li>
                      <li>• Conducting user interviews and usability testing</li>
                      <li>• Understanding design systems and component libraries</li>
                      <li>• Collaborating in an agile development environment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <ChevronRight size={16} className="text-accent-orange" /> Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe XD', 'Miro', 'Notion', 'Slack'].map((tool) => (
                        <span key={tool} className="px-3 py-1 rounded-lg bg-white/5 text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-12 border-l-2 border-accent-orange/30"
          >
            <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-brown" />
            
            <div className="glass p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">BSc IT Undergraduate</h3>
                  <p className="text-white/70 font-medium">SIES College, Nerul</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-white/50 text-sm border border-white/5">
                  2022 - 2026
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Building a strong foundation in information technology, covering software development, database management, and networking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">Let’s build something <span className="text-gradient">amazing</span> together.</h2>
            <p className="text-white/50 text-lg mb-12 leading-relaxed">
              Whether you have a question or just want to say hi, my inbox is always open. I'm currently looking for new opportunities and would love to hear from you!
            </p>

            <div className="space-y-6">
              <a href="mailto:anishadsouza1207@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-xl font-medium">anishadsouza1207@gmail.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/anisha-d-souza-a3a151325" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-xl font-medium">anisha-dsouza</p>
                </div>
              </a>

              <a href="tel:9137079037" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-xl font-medium">+91 9137079037</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-[3rem]"
          >
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const mailtoLink = `mailto:anishadsouza1207@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-orange outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-orange outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-2">Message</label>
                <textarea 
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-orange outline-none transition-all resize-none"
                />
              </div>
              <button type="submit" className="w-full py-5 rounded-2xl bg-accent-orange text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all glow-orange">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Anisha D’souza. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/anishadsouza1207-star" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent-orange transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com/in/anisha-d-souza-a3a151325" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent-orange transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:anishadsouza1207@gmail.com" className="text-white/40 hover:text-accent-orange transition-colors"><Mail size={20} /></a>
        </div>
        
        <p className="text-white/40 text-sm font-display italic">
          Designed with ❤️ and Creativity
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-dark-bg selection:bg-accent-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
      {/* Custom Cursor Effect (Optional/Subtle) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
