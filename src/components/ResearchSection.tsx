import React, { useState } from 'react';
import { ExternalLink, Quote, FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react';
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
    palas2021multicriteria: true // open first paper abstract by default
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  /**
   * Calculates estimated reading time based on abstract word count
   * Standard academic reading speed: ~200 words per minute
   */
  const getReadingTime = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return { minutes: 1, words: 0 };
    const words = trimmed.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return { minutes, words };
  };

  return (
    <section id="research" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block">
              Scholarly Contributions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight text-balance">
              Peer-Reviewed Research & Publications
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed text-balance">
              Investigating 5G cellular network mobility management, E-MOORA multi-criteria handover optimization, and low-power IoT architectures.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.researchgate.net/profile/Md_Islam1028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
            >
              <span>ResearchGate</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://scholar.google.com/scholar?scilib=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Research Domains Grid */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Active Research Directions & Theoretical Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {PERSONAL_INFO.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-lg px-3 py-2.5 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span className="font-medium text-slate-800 leading-snug">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {PUBLICATIONS_DATA.map((pub) => {
            const isExpanded = !!expandedAbstracts[pub.id];
            const isJournal = pub.type === 'journal';
            const isConference = pub.type === 'conference';
            const { minutes: readMinutes, words: abstractWordCount } = getReadingTime(pub.abstract);

            return (
              <article
                key={pub.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all space-y-5"
              >
                {/* Clean Unboxed Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">
                      {isJournal ? 'Peer-Reviewed Journal' : isConference ? 'IEEE Conference Paper' : 'Accepted Paper'}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-mono text-slate-600">{pub.year}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-600">{pub.venue}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    {/* Estimated Reading Time Display */}
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{readMinutes} min read</span>
                      <span className="text-slate-400 font-mono text-[11px]">({abstractWordCount} words)</span>
                    </span>
                  </div>

                  {pub.volumeInfo && (
                    <span className="text-xs font-mono text-slate-500">
                      {pub.volumeInfo}
                    </span>
                  )}
                </div>

                {/* Title and Authors */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug text-balance">
                    {pub.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-slate-600">
                    {pub.authors.map((author, aIdx) => {
                      const isRakib = author.includes('Md. Rakibul Islam') || author.includes('Islam, M.R.');
                      return (
                        <span key={aIdx}>
                          {isRakib ? (
                            <strong className="text-slate-950 font-semibold underline decoration-blue-600/50 underline-offset-2">
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

                {/* Abstract Preview with Reading Time indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <span className="text-xs text-slate-400">
                      Estimated abstract reading time: ~{readMinutes} min
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="p-5 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed border border-slate-200/80 space-y-3">
                      <p>{pub.abstract}</p>

                      {pub.keywords && (
                        <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-medium text-slate-500">Keywords:</span>
                          {pub.keywords.map((kw, kIdx) => (
                            <span
                              key={kIdx}
                              className="text-slate-700 text-xs after:content-[','] last:after:content-[''] font-mono"
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
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.docUrl && (
                      <button
                        onClick={() =>
                          onOpenDocument({
                            title: pub.title,
                            url: pub.docUrl!,
                            description: `${pub.venue} (${pub.year}) · Full verified document.`
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-300" />
                        <span>View Document</span>
                      </button>
                    )}

                    {pub.doiOrUrl && (
                      <a
                        href={pub.doiOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                      >
                        <span>Elsevier / DOI</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenCitation(pub)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Quote className="w-3.5 h-3.5 text-blue-700" />
                    <span>Cite Paper (BibTeX / APA)</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Memorial University of Newfoundland (MUN) Yaffle Network Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 block">
              International Institutional Registry
            </span>
            <h4 className="text-base font-serif font-bold text-slate-900">
              Memorial University of Newfoundland (MUN.ca) Yaffle Research Profile
            </h4>
            <p className="text-xs text-slate-500">
              Verified institutional researcher identity registered in the MUN Yaffle research portal (Profile #5405).
            </p>
          </div>

          <a
            href="https://mun.yaffle.ca/people/5405"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shrink-0 shadow-2xs"
          >
            <span>Open Yaffle Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
