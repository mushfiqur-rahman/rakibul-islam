import React, { useState } from 'react';
import { BookOpen, ExternalLink, Quote, FileText, ChevronDown, ChevronUp, Network, Award, ShieldCheck } from 'lucide-react';
import { PUBLICATIONS_DATA, PublicationItem, PERSONAL_INFO } from '../data/portfolioData';

interface ResearchSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
  onOpenCitation: (pub: PublicationItem) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  onOpenDocument,
  onOpenCitation
}) => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    palas2021multicriteria: true // open first by default
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="research" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Scholarly Contributions
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Research & Publications
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Focusing on multi-criteria handover optimization in dense 5G heterogeneous networks, cellular mobility management algorithms, and wireless IoT architectures.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.researchgate.net/profile/Md_Islam1028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <span>ResearchGate</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
            <a
              href="https://scholar.google.com/scholar?scilib=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Research Domains Grid */}
        <div className="bg-stone-100/70 border border-stone-200 rounded-xl p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-stone-600" />
            Active Research Directions & Theoretical Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {PERSONAL_INFO.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-lg p-3 flex items-start gap-2 shadow-2xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-1.5 shrink-0" />
                <span className="font-medium text-stone-800 leading-snug">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {PUBLICATIONS_DATA.map((pub, idx) => {
            const isExpanded = !!expandedAbstracts[pub.id];
            const isJournal = pub.type === 'journal';
            const isConference = pub.type === 'conference';

            return (
              <div
                key={pub.id}
                className="bg-white rounded-xl border border-stone-200 p-6 sm:p-7 shadow-2xs hover:border-stone-300 transition-all space-y-4"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-stone-700">
                      {isJournal ? 'Peer-Reviewed Journal' : isConference ? 'IEEE Conference Paper' : 'Accepted Paper'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-stone-600">{pub.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="italic">{pub.venue}</span>
                  </div>

                  {pub.volumeInfo && (
                    <span className="text-xs font-mono text-stone-500">
                      {pub.volumeInfo}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
                    {pub.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 mt-1.5">
                    {pub.authors.map((author, aIdx) => {
                      const isRakib = author.includes('Md. Rakibul Islam') || author.includes('Islam, M.R.');
                      return (
                        <span key={aIdx}>
                          {isRakib ? (
                            <strong className="text-stone-950 font-semibold underline decoration-amber-600/50">
                              {author}
                            </strong>
                          ) : (
                            <span>{author}</span>
                          )}
                          {aIdx < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Abstract Preview */}
                <div className="space-y-2">
                  <button
                    onClick={() => toggleAbstract(pub.id)}
                    className="flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-stone-50 rounded-lg text-xs sm:text-sm text-stone-700 leading-relaxed border border-stone-200/80">
                      <p>{pub.abstract}</p>
                      {pub.keywords && (
                        <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="font-medium text-stone-500">Keywords:</span>
                          {pub.keywords.map((kw, kIdx) => (
                            <span
                              key={kIdx}
                              className="text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded text-[11px]"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.docUrl && (
                      <button
                        onClick={() =>
                          onOpenDocument({
                            title: pub.title,
                            url: pub.docUrl!,
                            description: `${pub.venue} (${pub.year}) · Full document file.`
                          })
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Document / Paper</span>
                      </button>
                    )}

                    {pub.doiOrUrl && (
                      <a
                        href={pub.doiOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors shadow-2xs"
                      >
                        <span>Elsevier / DOI</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenCitation(pub)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Quote className="w-3.5 h-3.5 text-amber-800" />
                    <span>Cite Paper (BibTeX / APA)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Memorial University of Newfoundland (MUN) Yaffle Network Card */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
              International Research Network
            </span>
            <h4 className="text-base font-medium text-stone-900 font-serif">
              Memorial University of Newfoundland (MUN.ca) Yaffle Research Profile
            </h4>
            <p className="text-xs text-stone-500">
              Verified institutional researcher identity registered in the MUN Yaffle research repository (Profile #5405).
            </p>
          </div>

          <a
            href="https://mun.yaffle.ca/people/5405"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shrink-0 shadow-2xs"
          >
            <span>Open Yaffle Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
