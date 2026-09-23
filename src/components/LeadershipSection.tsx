import React from 'react';
import { Users, Shield, Globe, Award, FileText, ExternalLink, BookmarkCheck } from 'lucide-react';
import { LEADERSHIP_DATA, MEMBERSHIPS_DATA } from '../data/portfolioData';

interface LeadershipSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenDocument }) => {
  return (
    <section id="leadership" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Academic Leadership & Global Societies
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Leadership, Activities & Memberships
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Founding Chair of IEEE Computer Society SBC at GUB, global chapter memberships with the Internet Society (ISOC), and youth ambassador appointments.
          </p>
        </div>

        {/* Section 1: Leadership & Extracurricular Roles */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500 border-b border-stone-200 pb-2">
            Leadership Appointments & Extra-Curricular Engagements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEADERSHIP_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded text-[11px]">
                      {item.title}
                    </span>
                    <span className="font-mono text-stone-500 text-[11px]">{item.year}</span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-stone-900 leading-snug">
                    {item.organization}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {item.documents.length > 0 && (
                  <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
                    {item.documents.map((doc, dIdx) => (
                      <button
                        key={dIdx}
                        onClick={() =>
                          onOpenDocument({
                            title: `${item.title} — ${doc.title}`,
                            url: doc.url,
                            description: `${item.organization} · Official activity record.`
                          })
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-50 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-700 rounded text-xs transition-colors"
                      >
                        <FileText className="w-3 h-3 text-stone-500" />
                        <span>{doc.title}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Professional Memberships (Internet Society & IEEE) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Professional Society & Chapter Memberships
            </h3>
            <span className="text-xs text-stone-500 font-mono">
              Internet Society (ISOC) & IEEE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {MEMBERSHIPS_DATA.map((mem, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-2.5"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                      {mem.organization}
                    </span>
                    {mem.memberId && (
                      <span className="font-mono text-stone-500 text-[10px]">
                        ID: {mem.memberId}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-semibold text-stone-900 leading-snug">
                    {mem.chapter}
                  </h4>

                  <p className="text-xs text-stone-500">
                    Role: <span className="text-stone-700 font-medium">{mem.role}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  {mem.docUrl ? (
                    <button
                      onClick={() =>
                        onOpenDocument({
                          title: `${mem.organization} — ${mem.chapter}`,
                          url: mem.docUrl!,
                          description: `Official Membership Certificate / Confirmation.`
                        })
                      }
                      className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-medium transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Membership Doc</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </button>
                  ) : (
                    <span className="text-stone-400 text-xs italic">
                      Registered Global Member
                    </span>
                  )}
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
