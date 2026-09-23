import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, FileText, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/10'
            : 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-md shadow-neutral-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single Wordmark Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
          <span className="font-mono text-sm tracking-wider font-bold text-neutral-100">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono text-neutral-500 font-normal">/ AI Eng.</span>
        </a>

        {/* Zone 2: Clean 4-6 Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-100 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-800/50"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-800/50"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-800/50"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-neutral-950 bg-neutral-100 hover:bg-white rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-neutral-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 text-center text-xs font-medium text-neutral-950 bg-neutral-100 rounded-md"
            >
              View Verified Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
