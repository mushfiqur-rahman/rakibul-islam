import React, { useState, useMemo } from 'react';
import { MapPin, FileText, ExternalLink, Search } from 'lucide-react';
import { CONFERENCES_DATA, ConferenceItem } from '../data/portfolioData';

interface ConferencesSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const ConferencesSection: React.FC<ConferencesSectionProps> = ({ onOpenDocument }) => {
  const [filter, setFilter] = useState<'all' | 'international' | 'national' | 'competition'>('all');
  const [search, setSearch] = useState('');

  const filteredConferences = useMemo(() => {
    return CONFERENCES_DATA.filter((item) => {
      const matchesCategory = filter === 'all' || item.category === filter;
      const matchesSearch =
        !search.trim() ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.organization.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section id="conferences" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block">
              Global Engagement & Professional Dialogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight text-balance">
              Conferences, Summits & Workshops
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed text-balance">
              International delegations across Harvard HPAIR (Kuala Lumpur), UN ESCAP (Bangkok), Seoul Youth Summit, and national network engineering symposiums.
            </p>
          </div>

          <span className="text-xs text-slate-500 font-mono">
            {filteredConferences.length} Events Listed
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200/80">
          {/* Functional Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1">
            {(['all', 'international', 'national', 'competition'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                  filter === tab
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'all' ? 'All Events' : tab}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search summit, city, topic..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredConferences.map((conf) => (
            <div
              key={conf.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-medium text-slate-700">
                    {conf.year}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{conf.location}</span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  {conf.title}
                </h3>

                <p className="text-xs font-medium text-slate-700">
                  {conf.organization}
                </p>

                {conf.role && (
                  <p className="text-xs text-blue-900 font-medium">
                    Role: <span className="font-semibold">{conf.role}</span>
                  </p>
                )}

                {conf.description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {conf.description}
                  </p>
                )}
              </div>

              {/* Documents attached */}
              {conf.documents.length > 0 && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {conf.documents.map((doc, dIdx) => (
                    <button
                      key={dIdx}
                      onClick={() =>
                        onOpenDocument({
                          title: `${conf.title} — ${doc.title}`,
                          url: doc.url,
                          description: `${conf.organization} (${conf.year}) · Official documentation.`
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                    >
                      <FileText className="w-3 h-3 text-slate-400" />
                      <span>{doc.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
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
