/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AllProjects } from './components/AllProjects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'} transition-colors duration-200`}>
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. What I Build / Core Specializations */}
        <WhatIBuild />

        {/* 4. Featured Projects (Deep Dive Architecture & Flowcharts) */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. All Verified Repositories & Projects */}
        <AllProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Technical Stack & Tooling */}
        <Skills />

        {/* 7. Experience & Education */}
        <Experience />

        {/* 8. Hackathon Honors & Certifications */}
        <Certifications />

        {/* 9. GitHub Transparency & Live Repos */}
        <GitHubSection />

        {/* 10. Contact & Interactive Message Composer */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Project Deep Dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
