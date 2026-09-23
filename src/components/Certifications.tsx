import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            07. Verified Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Hackathons &amp; Technical Credentials
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Real-world competitive hackathon submissions, verified developer internships, and technical achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-emerald-400 font-semibold">{cert.issuer}</span>
                  <span className="text-neutral-500">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-neutral-100 font-sans tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {cert.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/70 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Status</span>
                <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
