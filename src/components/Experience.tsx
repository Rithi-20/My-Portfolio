import React from 'react';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            06. Professional Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Practical development roles and foundational academic training in software engineering and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Experience Timeline Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-6">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Development &amp; Engineering Experience</span>
            </div>

            <div className="relative pl-6 border-l border-neutral-800 space-y-10">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />

                  {/* Period & Type */}
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400/90">{exp.type}</span>
                  </div>

                  {/* Role & Org */}
                  <h3 className="text-lg font-bold text-neutral-100 font-sans tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mb-3">
                    {exp.organization}
                  </p>

                  {/* Narrative */}
                  <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 text-xs text-neutral-400 mb-4">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-6">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              <span>Education</span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-4"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span className="text-teal-400 font-semibold">Undergraduate Degree</span>
                    <span>{edu.period}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-100 font-sans tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {edu.field}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/70 pt-3">
                    {edu.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Learning Philosophy Box */}
              <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/20 text-xs text-neutral-400 space-y-2">
                <span className="font-mono text-neutral-200 font-semibold uppercase tracking-wider block text-[11px]">
                  Continuous Technical Evolution
                </span>
                <p>
                  Regularly contributing to open-source codebases, tracking modern research in Agentic AI (LangGraph, Tool Calling), and benchmarking retrieval architectures (FAISS, BM25, Chroma).
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
