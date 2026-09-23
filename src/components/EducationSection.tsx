import React from 'react';
import { GraduationCap, Award, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenDocument }) => {
  return (
    <section id="education" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Education & Formal Qualifications
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Undergraduate foundations in Computer Science & Engineering with specialization in network engineering, telecommunication protocols, and mathematical algorithm optimization.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-2xs hover:border-stone-300 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-stone-700 font-medium mt-0.5">
                    {item.institution} · <span className="text-stone-500 font-normal">{item.location}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded">
                    {item.period}
                  </span>
                  {item.result && (
                    <span className="font-sans text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                      {item.result}
                    </span>
                  )}
                </div>
              </div>

              {/* Thesis Callout for Undergraduate */}
              {item.thesis && (
                <div className="bg-stone-50 border border-stone-200/80 rounded-lg p-4 space-y-2">
                  <div className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    B.Sc Senior Thesis:
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-stone-900 leading-snug">
                    "{item.thesis}"
                  </p>
                  <p className="text-xs text-stone-500">
                    Associated Publication: Conference Paper (01) & Subsequent Journal Extension
                  </p>
                </div>
              )}

              {/* Concentrations and Minors */}
              {(item.concentration || item.minor) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  {item.concentration && (
                    <div className="space-y-1.5">
                      <span className="font-semibold text-stone-700 block">Concentration & Core Focus:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.concentration.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="bg-stone-100 text-stone-700 border border-stone-200 px-2 py-0.5 rounded text-[11px]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.minor && (
                    <div className="space-y-1.5">
                      <span className="font-semibold text-stone-700 block">Networking & Systems Minor:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.minor.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="bg-stone-100 text-stone-700 border border-stone-200 px-2 py-0.5 rounded text-[11px]"
                          >
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
                <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-stone-400 font-medium mr-1">Verified Credentials:</span>
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-stone-500" />
                      <span>{doc.title}</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
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
