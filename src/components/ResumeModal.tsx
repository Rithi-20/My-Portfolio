import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, FEATURED_PROJECTS } from '../data/portfolioData';
import { X, Printer, Download, Check, GraduationCap, Briefcase, Code2, Award, FileText } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF({
        unit: 'pt',
        format: 'letter',
      });

      const primaryColor: [number, number, number] = [16, 185, 129]; // emerald-500
      const darkColor: [number, number, number] = [20, 24, 33];
      const textColor: [number, number, number] = [50, 50, 50];
      const subtleColor: [number, number, number] = [100, 100, 100];

      let y = 45;

      // Header: Name & Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(...darkColor);
      doc.text(PERSONAL_INFO.fullName, 45, y);

      y += 18;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text(
        `${PERSONAL_INFO.headline}  |  BE Computer Science and Engineering`,
        45,
        y
      );

      // Contact Info Line
      y += 16;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(...subtleColor);
      doc.text(
        `Email: ${PERSONAL_INFO.email}   |   GitHub: ${PERSONAL_INFO.github}   |   LinkedIn: ${PERSONAL_INFO.linkedin}`,
        45,
        y
      );

      // Dividing Line
      y += 12;
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.75);
      doc.line(45, y, 567, y);

      // Section: Professional Summary
      y += 20;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...darkColor);
      doc.text('PROFESSIONAL SUMMARY', 45, y);

      y += 13;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textColor);
      const summaryText =
        'AI Engineer and Software Developer with BE in Computer Science and Engineering. Experienced across three internships (Fuzionest Private Limited, Edufyi Solutions, Techvolt Software) building production-grade web applications, Agentic AI state machines (LangGraph), context-grounded RAG architectures (FAISS + BM25), and machine learning anomaly detection pipelines. Actively maintains 28 verified public repositories.';
      const splitSummary = doc.splitTextToSize(summaryText, 520);
      doc.text(splitSummary, 45, y);
      y += splitSummary.length * 11 + 6;

      // Section: Core Technical Skills
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...darkColor);
      doc.text('TECHNICAL SKILLS', 45, y);

      y += 13;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...darkColor);
      doc.text('AI & Agentic Systems:', 45, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textColor);
      doc.text(
        'LangGraph (State Graphs), LangChain, Hybrid RAG (FAISS + BM25), Groq, Hugging Face, Llama 3.1, Qwen 2.5',
        160,
        y
      );

      y += 12;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text('Machine Learning & Vision:', 45, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textColor);
      doc.text(
        'Scikit-learn, Random Forest, SVM, OpenCV, Deep Learning embeddings, Pandas, NumPy',
        160,
        y
      );

      y += 12;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text('Languages & Frameworks:', 45, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textColor);
      doc.text('Python, TypeScript, JavaScript, FastAPI, Node.js, Express.js, React (Vite), Next.js', 160, y);

      y += 12;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text('Databases & Tools:', 45, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textColor);
      doc.text('PostgreSQL, SQLite (WAL Mode), MongoDB, Power BI, SQL, Git, Docker, REST APIs', 160, y);

      // Section: Internships & Work Experience
      y += 20;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...darkColor);
      doc.text('WORK & INTERNSHIP EXPERIENCE', 45, y);

      EXPERIENCE.forEach((exp) => {
        y += 14;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(...darkColor);
        doc.text(exp.role, 45, y);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...primaryColor);
        doc.text(` — ${exp.organization}`, 45 + doc.getTextWidth(exp.role), y);

        doc.setTextColor(...subtleColor);
        doc.text(exp.period, 567 - doc.getTextWidth(exp.period), y);

        y += 11;
        doc.setTextColor(...textColor);
        doc.setFontSize(8.5);
        doc.text(exp.description, 45, y);

        exp.bullets.slice(0, 2).forEach((bullet) => {
          y += 10;
          doc.text(`• ${bullet}`, 55, y);
        });
      });

      // Section: Key Featured Projects
      y += 20;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...darkColor);
      doc.text('KEY ENGINEERING PROJECTS', 45, y);

      FEATURED_PROJECTS.slice(0, 3).forEach((p) => {
        y += 14;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...darkColor);
        doc.text(p.title, 45, y);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...primaryColor);
        doc.text(` [${p.categoryLabel}]`, 45 + doc.getTextWidth(p.title), y);

        y += 11;
        doc.setTextColor(...textColor);
        doc.setFontSize(8.5);
        const pDesc = p.solution;
        const splitP = doc.splitTextToSize(pDesc, 520);
        doc.text(splitP, 45, y);
        y += splitP.length * 9.5;

        doc.setTextColor(...subtleColor);
        doc.setFontSize(8);
        doc.text(`Tech Stack: ${p.technologies.slice(0, 7).join(', ')}`, 45, y);
      });

      // Section: Education
      y += 20;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...darkColor);
      doc.text('EDUCATION', 45, y);

      y += 14;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...darkColor);
      doc.text('BE Computer Science and Engineering', 45, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...subtleColor);
      doc.text('Bachelor of Engineering (B.E.)', 567 - doc.getTextWidth('Bachelor of Engineering (B.E.)'), y);

      y += 11;
      doc.setTextColor(...textColor);
      doc.setFontSize(8.5);
      doc.text('Comprehensive technical training in Data Structures, AI, Machine Learning, and Software Systems.', 45, y);

      // Save Document
      doc.save('Rithiha_U_AI_Engineer_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('PDF generation error:', err);
      // Fallback to print
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Verified Candidate Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Visible Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto bg-neutral-950 text-neutral-200 font-sans space-y-6 text-sm">
          
          {/* Header */}
          <div className="border-b border-neutral-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-sm font-mono text-emerald-400 mt-0.5">
                  {PERSONAL_INFO.headline}
                </p>
                <p className="text-xs font-mono text-teal-400 mt-0.5">
                  BE Computer Science and Engineering
                </p>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save PDF</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-neutral-400 pt-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-neutral-200">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-200">
                LinkedIn Profile
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-neutral-200">
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
              AI Engineer and Software Developer with BE in Computer Science and Engineering. Experienced across three internships (Fuzionest Private Limited, Edufyi Solutions, Techvolt Software) building production-grade web applications, Agentic AI state machines (LangGraph), context-grounded RAG architectures (FAISS + BM25), and machine learning anomaly detection pipelines. Actively maintains 28 verified public repositories.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                <strong className="text-neutral-200 block mb-1">AI, LLMs &amp; Agents:</strong>
                <span className="text-neutral-400">
                  LangGraph (State Graphs), LangChain, Hybrid RAG (Dense FAISS + Lexical BM25), Groq, Hugging Face API, Llama 3.1, Qwen 2.5
                </span>
              </div>
              <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                <strong className="text-neutral-200 block mb-1">Machine Learning &amp; Vision:</strong>
                <span className="text-neutral-400">
                  Scikit-learn, Random Forest, SVM, OpenCV, Facial Feature Embeddings, Statistical Anomaly Detection
                </span>
              </div>
              <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                <strong className="text-neutral-200 block mb-1">Languages &amp; Backend:</strong>
                <span className="text-neutral-400">
                  Python, TypeScript, JavaScript, FastAPI, Node.js, Express.js, REST APIs, Cheerio Web Crawling
                </span>
              </div>
              <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                <strong className="text-neutral-200 block mb-1">Frontend &amp; Databases:</strong>
                <span className="text-neutral-400">
                  React (Vite), Next.js 14, Tailwind CSS, PostgreSQL, SQLite (WAL mode), MongoDB, Power BI, SQL
                </span>
              </div>
            </div>
          </div>

          {/* Internships & Work Experience */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Work &amp; Internship Experience
              </h2>
              <span className="text-xs font-mono text-neutral-500">3 Internships Completed</span>
            </div>
            
            <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="text-xs space-y-1.5 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80">
                  <div className="flex items-center justify-between text-neutral-200 font-semibold">
                    <span className="text-sm font-bold text-neutral-100">
                      {exp.role} — <span className="font-normal text-emerald-400">{exp.organization}</span>
                    </span>
                    <span className="font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc pl-4 text-neutral-400 space-y-0.5 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-950 rounded border border-neutral-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {FEATURED_PROJECTS.slice(0, 3).map((p) => (
                <div key={p.id} className="text-xs border-l-2 border-emerald-500/60 pl-3 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-200">{p.title}</span>
                    <span className="font-mono text-neutral-500">{p.categoryLabel}</span>
                  </div>
                  <p className="text-neutral-400">{p.solution}</p>
                  <p className="font-mono text-[11px] text-neutral-500">
                    Stack: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="text-xs flex items-center justify-between p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80">
                <div>
                  <strong className="text-neutral-100 text-sm block">{edu.degree}</strong>
                  <p className="text-neutral-400">{edu.field}</p>
                </div>
                <span className="font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Source: github.com/{PERSONAL_INFO.githubUsername}</span>
          <button
            onClick={handleDownloadPDF}
            className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1.5 font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Click to Download Rithiha_U_Resume.pdf</span>
          </button>
        </div>

      </div>
    </div>
  );
};
