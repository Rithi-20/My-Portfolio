import React from 'react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, Bot, Cpu, ShieldCheck, GitFork, Star, Database, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
              03. Flagship Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
              Featured AI &amp; Software Projects
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-2xl">
              Production-oriented AI systems engineered for real-world reliability: LangGraph state machines, context-grounded medical RAG, and statistical machine learning ensembles.
            </p>
          </div>

          <a
            href="#all-projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
          >
            <span>View all 14 repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const isTopFlagship = index < 2; // Top 2 AI projects receive expansive spotlight visual architecture
            return (
              <div
                key={project.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isTopFlagship
                    ? 'border-emerald-500/30 bg-white dark:bg-gradient-to-b dark:from-neutral-900/90 dark:to-neutral-950 p-6 sm:p-8 shadow-xl dark:shadow-black/20 shadow-neutral-200/50'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 sm:p-7 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 shadow-sm'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Narrative */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Category & Status */}
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                      <span className="text-neutral-600 dark:text-neutral-400">Production Architecture</span>
                      {isTopFlagship && (
                        <>
                          <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                          <span className="text-amber-600 dark:text-amber-400/90 font-medium">Flagship AI</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 font-sans tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem → Solution Structured Story */}
                    <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      <div>
                        <strong className="text-red-600 dark:text-red-400/90 font-semibold font-mono text-xs uppercase tracking-wide block mb-1">
                          The Challenge
                        </strong>
                        <p>{project.problem}</p>
                      </div>

                      <div className="pt-2">
                        <strong className="text-emerald-600 dark:text-emerald-400/90 font-semibold font-mono text-xs uppercase tracking-wide block mb-1">
                          The Engineering Solution
                        </strong>
                        <p>{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack List */}
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm whitespace-nowrap"
                      >
                        <span>Inspect Architecture &amp; Features</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60 rounded-md transition-colors whitespace-nowrap"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-md transition-colors whitespace-nowrap"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Interactive Visual Architecture Card */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-5 space-y-4 shadow-sm dark:shadow-inner">
                      
                      {/* Architecture Top Bar */}
                      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/80 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-900 dark:text-neutral-300 font-semibold">
                          <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>Dataflow Architecture</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500">Live Graph</span>
                      </div>

                      {/* Visual Flow Nodes */}
                      {project.architecture ? (
                        <div className="space-y-2 font-mono text-xs">
                          {project.architecture.nodes.slice(0, 5).map((node, nIdx) => (
                            <div
                              key={nIdx}
                              className="p-2.5 rounded-lg bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-neutral-800 dark:text-neutral-300 hover:border-emerald-500/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors shadow-xs"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="w-4 h-4 rounded-full bg-neutral-100 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold shrink-0">
                                  {nIdx + 1}
                                </span>
                                <span className="truncate text-[11px] text-neutral-800 dark:text-neutral-200">{node}</span>
                              </div>
                              <span className="text-[10px] text-emerald-600 dark:text-emerald-500/80 uppercase font-mono font-bold">
                                OK
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-xs font-mono text-neutral-500">
                          Architecture specs verified in repository
                        </div>
                      )}

                      {/* Brief Architecture Annotation */}
                      {project.architecture && (
                        <p className="text-[11px] font-mono text-neutral-400 italic pt-1">
                          {project.architecture.description}
                        </p>
                      )}

                      {/* Quick Action Preview */}
                      <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span>Tested &amp; Auditable</span>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="text-emerald-400 hover:underline"
                        >
                          View Full Details →
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
