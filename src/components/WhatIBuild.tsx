import React from 'react';
import { WHAT_I_BUILD } from '../data/portfolioData';
import { Bot, Database, ShieldCheck, Activity, Layers, BarChart3 } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Bot className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="what-i-build" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            02. Core Specializations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            What I Build
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Specialized engineering capabilities backed by open-source implementations and production architectures.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_BUILD.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-neutral-800/90 bg-neutral-900/30 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-800/70 border border-neutral-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-2 font-sans tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Unboxed Metadata Tags */}
              <div className="pt-5 mt-5 border-t border-neutral-800/60 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-neutral-400">
                {item.tags.map((tag, tagIdx) => (
                  <React.Fragment key={tag}>
                    <span className="text-neutral-300 hover:text-emerald-300 transition-colors">
                      {tag}
                    </span>
                    {tagIdx < item.tags.length - 1 && (
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
