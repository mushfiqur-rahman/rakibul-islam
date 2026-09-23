import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenDocument }) => {
  return (
    <section id="education" className="py-20 border-b border-slate-200/80 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight text-balance">
            Education & Formal Qualifications
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed text-balance">
            Undergraduate foundations in Computer Science & Engineering with specialization in network engineering, TCP/IP architectures, and cellular mobility optimization.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                    <span className="font-medium text-slate-800">{item.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="font-mono text-slate-600 font-medium">
                    {item.period}
                  </span>
                  {item.result && (
                    <>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="font-semibold text-blue-700">
                        {item.result}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Senior Thesis Callout */}
              {item.thesis && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    B.Sc Senior Thesis:
                  </div>
                  <p className="text-sm sm:text-base font-serif italic text-slate-900 leading-snug">
                    "{item.thesis}"
                  </p>
                  <p className="text-xs text-slate-500">
                    Supervisor: Prof. Dr. Md. Abdur Razzaque · Resulted in Elsevier Computer Communications journal publication.
                  </p>
                </div>
              )}

              {/* Concentrations and Minors */}
              {(item.concentration || item.minor) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  {item.concentration && (
                    <div className="space-y-1.5">
                      <span className="font-medium text-slate-500 uppercase tracking-wider block text-[11px]">
                        Concentration & Core Focus:
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-700">
                        {item.concentration.map((c, cIdx) => (
                          <span key={cIdx} className="after:content-['·'] last:after:content-[''] after:ml-2">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.minor && (
                    <div className="space-y-1.5">
                      <span className="font-medium text-slate-500 uppercase tracking-wider block text-[11px]">
                        Networking & Telecommunications Minor:
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-700">
                        {item.minor.map((m, mIdx) => (
                          <span key={mIdx} className="after:content-['·'] last:after:content-[''] after:ml-2">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Verified Documents */}
              {item.documents.length > 0 && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium mr-1">Verified Credentials:</span>
                  {item.documents.map((doc, dIdx) => (
                    <button
                      key={dIdx}
                      onClick={() =>
                        onOpenDocument({
                          title: `${item.degree} — ${doc.title}`,
                          url: doc.url,
                          description: `${item.institution} · Academic credential verification.`
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>{doc.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
