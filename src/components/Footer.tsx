import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 py-12 text-neutral-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-neutral-200 text-sm">{PERSONAL_INFO.fullName}</span>
              <span className="text-neutral-500">/ AI Engineer</span>
            </div>
            <p className="text-neutral-500 text-[11px] font-sans max-w-sm">
              Production-oriented intelligent systems, state machines, and grounded AI architectures.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400">
            <a href="#home" className="hover:text-neutral-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-neutral-200 transition-colors">About</a>
            <a href="#what-i-build" className="hover:text-neutral-200 transition-colors">Specializations</a>
            <a href="#projects" className="hover:text-neutral-200 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neutral-200 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-neutral-200 transition-colors">Experience</a>
            <button onClick={onOpenResume} className="hover:text-neutral-200 transition-colors">
              Resume
            </button>
            <a href="#contact" className="hover:text-neutral-200 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quiet Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 gap-2">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Built with React, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Source truth:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:underline"
            >
              github.com/{PERSONAL_INFO.githubUsername}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
