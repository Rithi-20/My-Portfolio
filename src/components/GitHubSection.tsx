import React from 'react';
import { PERSONAL_INFO, FEATURED_PROJECTS } from '../data/portfolioData';
import { Github, GitBranch, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const topRepos = FEATURED_PROJECTS.slice(0, 4);

  return (
    <section className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            08. Codebase Transparency
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Source of Truth on GitHub
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Every project showcased on this portfolio is backed by public source code, commits, and verifiable documentation on GitHub.
          </p>
        </div>

        {/* GitHub Highlight Banner Card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 space-y-8">
          
          {/* Top Row: Profile Stats Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-100 font-mono">
                  @{PERSONAL_INFO.githubUsername}
                </h3>
                <p className="text-xs text-neutral-400">
                  AI Engineer &amp; Software Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <span className="text-xl font-bold text-neutral-100 block">
                  {PERSONAL_INFO.publicReposCount}
                </span>
                <span className="text-neutral-500">Public Repositories</span>
              </div>
              <div className="h-8 w-px bg-neutral-800" />
              <div>
                <span className="text-xl font-bold text-emerald-400 block">100%</span>
                <span className="text-neutral-500">Verified Code</span>
              </div>
              <div className="h-8 w-px bg-neutral-800" />
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors font-sans font-semibold whitespace-nowrap"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Repositories Preview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Pinned Flagship Repositories</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900/60 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-emerald-400 font-semibold group-hover:underline">
                        Rithi-20 / {repo.id}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-300 line-clamp-2 mb-3">
                      {repo.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-neutral-400">{repo.technologies[0]}</span>
                    <span>·</span>
                    <span>Public</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Languages distribution overview */}
          <div className="pt-2 border-t border-neutral-800 text-xs font-mono text-neutral-400 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-neutral-200 font-semibold">Primary Languages:</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Python</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> TypeScript</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400" /> JavaScript</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400" /> Java / C</span>
            </div>
            <span className="text-neutral-500">Source: github.com/Rithi-20</span>
          </div>

        </div>

      </div>
    </section>
  );
};
