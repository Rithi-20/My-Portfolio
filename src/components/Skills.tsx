import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Terminal, Layers, Database, Shield, BarChart, Server, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <Terminal className="w-4 h-4 text-teal-400" />;
      case 2:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 3:
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 4:
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 5:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 6:
        return <BarChart className="w-4 h-4 text-teal-400" />;
      case 7:
        return <Wrench className="w-4 h-4 text-neutral-400" />;
      default:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            05. Technical Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Technical Stack &amp; Tooling
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            A verified inventory of technologies, frameworks, and tools used across my GitHub repositories. No arbitrary percentages—only real code experience.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(idx)}
                  <h3 className="text-sm font-bold font-sans text-neutral-100 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 mb-4 font-normal">
                  {category.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 border border-neutral-800/90 rounded-md hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Code-Backed</span>
                <span className="text-emerald-500/80">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
