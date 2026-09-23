import React, { useState, useMemo } from 'react';
import { ALL_PROJECTS, Project } from '../data/portfolioData';
import { Github, Search, ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';

interface AllProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-agents', label: 'Agentic AI & LLMs' },
    { id: 'medical-rag', label: 'Medical AI & RAG' },
    { id: 'ml-vision', label: 'ML & Computer Vision' },
    { id: 'fullstack', label: 'Full-Stack & APIs' },
    { id: 'data-analytics', label: 'Data Analytics' },
  ];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.problem.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="all-projects" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            04. Complete Codebase
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            All Verified Projects &amp; Repositories
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            A comprehensive catalog of open-source repositories built and maintained by Rithiha on GitHub.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Control (Allowed per Frontend Constitution) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-neutral-800 text-emerald-300 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-150"
            >
              <div>
                
                {/* Header with Category & External Link */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono">
                  <span className="text-emerald-400 font-medium">
                    {project.categoryLabel}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="text-neutral-500 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-neutral-500 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-base font-bold text-neutral-100 group-hover:text-emerald-300 transition-colors cursor-pointer mb-2 font-sans tracking-tight"
                >
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-normal line-clamp-3 mb-4">
                  {project.problem}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="pt-3 border-t border-neutral-800/60 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neutral-400 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-950 border border-neutral-800/80 rounded text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-neutral-500 text-[10px]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2 text-center text-xs font-mono text-neutral-300 hover:text-white bg-neutral-950/70 hover:bg-neutral-800 rounded-md border border-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Detailed Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Result State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-neutral-800 rounded-xl bg-neutral-900/20">
            <p className="text-sm font-mono text-neutral-400">
              No repositories matched your search &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-emerald-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
