import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [dispatchData, setDispatchData] = useState<{
    name: string;
    from: string;
    subject: string;
    body: string;
    gmailUrl: string;
    mailtoUrl: string;
  } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyFullMessage = () => {
    if (!dispatchData) return;
    const fullText = `From: ${dispatchData.name} <${dispatchData.from}>\nTo: ${PERSONAL_INFO.email}\nSubject: ${dispatchData.subject}\n\n${dispatchData.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanFrom = senderEmail.trim();
    const cleanName = name.trim();
    const cleanSubject = subject.trim() || 'AI Engineer Inquiry';

    // Format clear, unambiguous message with explicit Sender and Reply-To headers
    const formattedSubject = `Inquiry from ${cleanName} (${cleanFrom}): ${cleanSubject}`;
    const formattedBody = `From: ${cleanName} <${cleanFrom}>
Reply-To: ${cleanFrom}
To: ${PERSONAL_INFO.email}

--------------------------------------------------
MESSAGE:
${message.trim()}
--------------------------------------------------`;

    const encodedSubject = encodeURIComponent(formattedSubject);
    const encodedBody = encodeURIComponent(formattedBody);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&cc=${encodeURIComponent(cleanFrom)}&su=${encodedSubject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?cc=${encodeURIComponent(cleanFrom)}&subject=${encodedSubject}&body=${encodedBody}`;

    setDispatchData({
      name: cleanName,
      from: cleanFrom,
      subject: formattedSubject,
      body: formattedBody,
      gmailUrl,
      mailtoUrl,
    });
    setIsSent(true);

    // Attempt to trigger mailto as well
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Ignore if iframe blocks top-level mailto navigation
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-2">
            09. Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100 font-sans">
            Let&apos;s Build Something Intelligent
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Currently open to opportunities as an AI Engineer, ML Engineer, or Software Developer. Let&apos;s discuss how I can contribute to your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Feature */}
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-neutral-100 hover:text-emerald-300 transition-colors font-mono break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800/70 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-mono">Click to copy address</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded border border-neutral-700/60 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-between hover:border-neutral-700 hover:bg-neutral-900/70 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Professional Network
                  </span>
                  <span className="text-sm font-semibold text-neutral-100 group-hover:text-blue-300 transition-colors">
                    LinkedIn / Rithiha U
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
            </a>

            {/* GitHub Profile Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-between hover:border-neutral-700 hover:bg-neutral-900/70 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Open Source Code
                  </span>
                  <span className="text-sm font-semibold text-neutral-100 group-hover:text-emerald-300 transition-colors font-mono">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
            </a>

            <div className="p-4 rounded-lg bg-neutral-900/20 border border-neutral-800 text-xs text-neutral-400 space-y-1">
              <span className="font-mono text-neutral-300 font-semibold block">Response Time</span>
              <p>Typically replies within 24 hours for technical inquiries, interviews, and collaboration requests.</p>
            </div>

          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-100 font-sans tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your project details or inquiry. Your sender email address is captured and clearly formatted for direct reply.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Nishanth"
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 block">
                      Your Email <span className="text-emerald-400 font-medium">(Sender Address)</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. nishanthsrisai7220@gmail.com"
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Engineer Role Inquiry"
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/80 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400 block">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/80 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-neutral-400">
                    {senderEmail ? (
                      <span>
                        Sender verified: <strong className="text-emerald-400">{senderEmail}</strong>
                      </span>
                    ) : (
                      <span>Recipient: {PERSONAL_INFO.email}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              {/* Inquiry Dispatched Confirmation Screen */}
              {isSent && dispatchData && (
                <div className="mt-4 p-4 rounded-xl bg-neutral-950 border border-emerald-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Inquiry Formatted &amp; Ready to Dispatch!</span>
                  </div>

                  <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 text-xs font-mono space-y-1 text-neutral-300">
                    <p>
                      <span className="text-neutral-500">From (Your Email):</span>{' '}
                      <strong className="text-emerald-400">{dispatchData.from}</strong>
                    </p>
                    <p>
                      <span className="text-neutral-500">To:</span> {PERSONAL_INFO.email}
                    </p>
                    <p>
                      <span className="text-neutral-500">Subject:</span> {dispatchData.subject}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-400">
                    Choose how you want to send your message:
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                      href={dispatchData.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail Web</span>
                    </a>

                    <a
                      href={dispatchData.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>

                    <button
                      onClick={handleCopyFullMessage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors"
                    >
                      {copiedMsg ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Message Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
