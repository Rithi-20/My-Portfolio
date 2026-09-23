import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, ArrowRight, CheckCircle, Cpu, Database, Server, Terminal, Shield } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title Area */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 font-sans tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-emerald-400/90 font-mono mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>The Technical Solution</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Flowchart */}
          {project.architecture && (
            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Execution Architecture &amp; Dataflow</span>
                </h3>
                <span className="text-xs font-mono text-neutral-500">Node Pipeline</span>
              </div>

              {/* Interactive Flow Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.architecture.nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center justify-between gap-2 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neutral-800 text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="truncate">{node}</span>
                    </div>
                    {idx < (project.architecture?.nodes.length ?? 0) - 1 && (
                      <ArrowRight className="w-3 h-3 text-neutral-600 hidden md:block shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs text-neutral-400 italic pt-1 border-t border-neutral-800/80">
                {project.architecture.description}
              </p>
            </div>
          )}

          {/* Verified Features from Repository README */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Key Features (Verified from Repository)</span>
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Technologies */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Verified Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-neutral-200 bg-neutral-800/70 border border-neutral-700/60 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Direct CTA Footer */}
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400">
              Source of truth: <span className="text-neutral-200">github.com/Rithi-20/{project.id}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Application</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
