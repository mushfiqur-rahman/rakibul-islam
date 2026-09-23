import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PUBLICATIONS_DATA, AWARDS_DATA, CERTIFICATIONS_DATA, MEMBERSHIPS_DATA, LEADERSHIP_DATA, CONFERENCES_DATA } from '../data/portfolioData';

interface CurriculumVitaeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumVitaeModal: React.FC<CurriculumVitaeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownCV = () => {
    return `# CURRICULUM VITAE
## ${PERSONAL_INFO.name}
**${PERSONAL_INFO.role}**
Location: ${PERSONAL_INFO.location} | Email: ${PERSONAL_INFO.email}
Profiles: ResearchGate (Md_Islam1028) | ORCID (0000-0003-1291-5059) | LinkedIn

### SUMMARY
${PERSONAL_INFO.bio}

### RESEARCH INTERESTS
${PERSONAL_INFO.researchInterests.join(', ')}

### EDUCATION
${EDUCATION_DATA.map(e => `* **${e.degree}** — ${e.institution} (${e.period})
  ${e.thesis ? `Thesis: ${e.thesis}` : ''}
  Result: ${e.result || ''}`).join('\n')}

### PEER-REVIEWED PUBLICATIONS
${PUBLICATIONS_DATA.map(p => `* ${p.authors.join(', ')} (${p.year}). "${p.title}." *${p.venue}*${p.volumeInfo ? `, ${p.volumeInfo}` : ''}.`).join('\n')}

### HONORS, AWARDS & FELLOWSHIPS
${AWARDS_DATA.map(a => `* **${a.title}** (${a.year}) — ${a.issuer}. ${a.description}`).join('\n')}

### PROFESSIONAL CERTIFICATIONS & TRAINING
${CERTIFICATIONS_DATA.slice(0, 15).map(c => `* **${c.name}** — ${c.issuer}${c.center ? ` (${c.center})` : ''}`).join('\n')}

### PROFESSIONAL MEMBERSHIPS
${MEMBERSHIPS_DATA.map(m => `* **${m.organization}** — ${m.chapter} (${m.role})`).join('\n')}

### LEADERSHIP & ACTIVITIES
${LEADERSHIP_DATA.map(l => `* **${l.title}**, ${l.organization} (${l.year})`).join('\n')}
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownCV());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-stone-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-stone-200 bg-stone-50 print:hidden">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-stone-700" />
            <span className="font-medium text-stone-900 text-sm">Curriculum Vitae — Academic & Research Profile</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Plaintext'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors ml-2"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Academic CV Document */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans text-stone-800 space-y-8 bg-white print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-stone-300 pb-6">
            <h1 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-stone-700 mt-1">
              {PERSONAL_INFO.role} · Green University of Bangladesh (CSE)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500 mt-2.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <a
                href="https://orcid.org/0000-0003-1291-5059"
                target="_blank"
                rel="noreferrer"
                className="text-stone-700 hover:underline"
              >
                ORCID: 0000-0003-1291-5059
              </a>
              <span>·</span>
              <a
                href="https://www.researchgate.net/profile/Md_Islam1028"
                target="_blank"
                rel="noreferrer"
                className="text-stone-700 hover:underline"
              >
                ResearchGate
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/md-rakibul-islam-37626a133/"
                target="_blank"
                rel="noreferrer"
                className="text-stone-700 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Academic Profile Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2 border-b border-stone-200 pb-1">
              Executive Summary & Academic Objectives
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2 border-b border-stone-200 pb-1">
              Primary Research Interests
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-700">
              {PERSONAL_INFO.researchInterests.map((interest, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-medium text-stone-900">
                    <span>{edu.degree}</span>
                    <span className="text-xs text-stone-500">{edu.period}</span>
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    {edu.institution}, {edu.location}
                    {edu.result && ` — ${edu.result}`}
                  </div>
                  {edu.thesis && (
                    <p className="text-xs text-stone-700 italic mt-1">
                      Thesis: "{edu.thesis}"
                    </p>
                  )}
                  {edu.concentration && (
                    <p className="text-xs text-stone-500 mt-0.5">
                      Concentration: {edu.concentration.join(', ')} · Minor: {edu.minor?.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Peer-Reviewed Publications
            </h2>
            <div className="space-y-3.5">
              {PUBLICATIONS_DATA.map((pub, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <p className="font-medium text-stone-900">
                    [{idx + 1}] {pub.authors.join(', ')} ({pub.year}). "{pub.title}."
                  </p>
                  <p className="text-xs text-stone-600 italic mt-0.5">
                    {pub.venue}{pub.volumeInfo ? `, ${pub.volumeInfo}` : ''}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Fellowships */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Honors, Fellowships & Scholarships
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {AWARDS_DATA.map((award, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-medium text-stone-900">{award.title}</span>
                    <span className="text-xs text-stone-600 block">{award.issuer} — {award.description}</span>
                  </div>
                  <span className="text-xs text-stone-500 shrink-0">{award.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications (Selection) */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Key Professional Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS_DATA.slice(0, 16).map((cert, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-stone-400 mt-0.5">•</span>
                  <div>
                    <span className="font-medium text-stone-800">{cert.name}</span>
                    <span className="text-stone-500 block text-[11px]">{cert.issuer}{cert.center ? ` · ${cert.center}` : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships & Societies */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Societies & Professional Memberships
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {MEMBERSHIPS_DATA.map((mem, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-stone-400 mt-0.5">•</span>
                  <div>
                    <span className="font-medium text-stone-800">{mem.organization}</span>
                    <span className="text-stone-500 block text-[11px]">{mem.chapter} ({mem.role})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 border-b border-stone-200 pb-1">
              Leadership & Community Engagement
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {LEADERSHIP_DATA.map((lead, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-medium text-stone-900">{lead.title}</span>
                    <span className="text-xs text-stone-600 block">{lead.organization}</span>
                  </div>
                  <span className="text-xs text-stone-500 shrink-0">{lead.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-stone-200 text-center text-xs text-stone-400">
            Certified Academic Curriculum Vitae · Md. Rakibul Islam · Dhaka, Bangladesh
          </div>
        </div>
      </div>
    </div>
  );
};
