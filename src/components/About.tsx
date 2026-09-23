import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, Database, Server, Code, Sparkles, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            01. Background &amp; Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Engineering Systems that Bridge AI Models and Real-World Execution
          </h2>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 text-base leading-relaxed font-normal">
            <p>
              I am an <strong className="text-neutral-100 font-medium">AI Engineer and Software Developer</strong> dedicated to turning state-of-the-art AI research into resilient, production-ready software systems. My work centers on solving concrete engineering challenges: eliminating LLM hallucinations in high-stakes domains, automating intricate business logic via state machines, and connecting autonomous agents to real-world databases and web APIs.
            </p>

            <p>
              Across my GitHub repositories, you will find end-to-end applications: from pharmaceutical quality-assurance copilots using <strong className="text-neutral-100 font-medium">LangGraph state graphs</strong> to clinical medical retrieval systems employing <strong className="text-neutral-100 font-medium">hybrid dense-sparse (FAISS + BM25) search</strong>, to real-time network anomaly detection pipelines pairing Random Forest and SVM classifiers.
            </p>

            <p>
              I take pride in writing clean, well-architected Python and TypeScript, designing deterministic intent planners, and ensuring every system I build has verified data grounding, auditable database persistence, and a polished user interface.
            </p>

            {/* Core Philosophy Banner */}
            <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-300 space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold block">
                Engineering Principle
              </span>
              <p className="italic text-neutral-200">
                &ldquo;Learn deeply, write rigorous code, ground every AI output in source truth, and build software that withstands real-world conditions.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Card: Profile Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-6">
              
              {/* Profile Avatar & Quick Bio */}
              <div className="flex items-center gap-4">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full border-2 border-emerald-500/50 object-cover bg-neutral-800"
                  onError={(e) => {
                    // Fallback to stylized monogram if avatar fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-lg font-bold text-neutral-100">{PERSONAL_INFO.fullName}</h3>
                  <p className="text-xs font-mono text-neutral-400">AI Engineer &amp; Software Developer</p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                    <span>GitHub: @{PERSONAL_INFO.githubUsername}</span>
                    <span aria-hidden="true">·</span>
                    <span>28 Repositories</span>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                <div className="flex items-start gap-3">
                  <Bot className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200">Agentic State Graphs</h4>
                    <p className="text-xs text-neutral-400">State machines, router nodes, tool execution, and conversational human-in-the-loop edits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Database className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200">Context-Grounded RAG</h4>
                    <p className="text-xs text-neutral-400">Hybrid dense (FAISS) and sparse (BM25) vector retrieval with strict refusal guardrails.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Server className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200">Production Backend &amp; Data</h4>
                    <p className="text-xs text-neutral-400">FastAPI, Node.js, SQLite WAL mode, PostgreSQL, Cheerio web crawling, and Power BI analytics.</p>
                  </div>
                </div>
              </div>

              {/* Verified Links */}
              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore GitHub Repos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
