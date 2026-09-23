import React from 'react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Github, FileText, CheckCircle2, ArrowDown, Briefcase, GraduationCap, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden border-b border-neutral-800/60"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f242d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[20rem] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono">{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.1] text-balance">
              AI Engineer &amp; <br />
              <span className="text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 inline-block">
                Software Developer
              </span>
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl font-normal">
              Building intelligent, production-grade applications by fusing Agentic AI, context-grounded RAG architectures, Large Language Models, and resilient full-stack systems.
            </p>

            {/* Technical Sub-row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-500 pt-1">
              <span className="text-neutral-300">LangGraph</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">Hybrid RAG</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">FastAPI</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">Python</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">React</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">Scikit-learn</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-150 shadow-md shadow-emerald-950/40 whitespace-nowrap"
              >
                View Projects
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 rounded-lg transition-all duration-150 whitespace-nowrap shadow-xs"
              >
                <Github className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>GitHub Profile</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 bg-white dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800/80 rounded-lg transition-all duration-150 whitespace-nowrap shadow-xs"
              >
                <FileText className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>Resume View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Profile & Verified Experience Showcase Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-xl dark:shadow-2xl p-6 space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/80 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.fullName}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full border-2 border-emerald-500/60 object-cover bg-neutral-800 shadow-md"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans tracking-tight">
                      {PERSONAL_INFO.fullName}
                    </h2>
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      {PERSONAL_INFO.headline}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>BE Computer Science &amp; Engineering</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">
                    {PERSONAL_INFO.publicReposCount}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Repos</span>
                </div>
              </div>

              {/* Verified Internships Spotlight */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-300">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Verified Internships</span>
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-500/90 font-medium">3 Completed</span>
                </div>

                <div className="space-y-2">
                  {EXPERIENCE.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-xs"
                    >
                      <div className="space-y-0.5">
                        <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 block">
                          {exp.role}
                        </span>
                        <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans">
                          {exp.organization}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400/90 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technical Highlights */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800/80 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                  Core Specializations
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                    <span className="truncate">LangGraph Agents</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0" />
                    <span className="truncate">Hybrid RAG</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0" />
                    <span className="truncate">FastAPI &amp; React</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                    <span className="truncate">ML Ensembles</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Code-Backed Portfolio</span>
                </span>
                <a
                  href="#experience"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline transition-colors font-medium"
                >
                  View Timeline →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <span>DISCOVER MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
