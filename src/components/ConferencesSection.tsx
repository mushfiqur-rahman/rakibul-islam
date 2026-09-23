import React, { useState, useMemo } from 'react';
import { Globe, MapPin, Calendar, FileText, ExternalLink, Award, Search, Users } from 'lucide-react';
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
    <section id="conferences" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Global Engagement & Professional Dialogue
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Conferences, Summits & Workshops
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              International delegations across Harvard HPAIR (Malaysia), UN ESCAP (Bangkok), Seoul Youth Summit, and national network engineering symposiums.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-mono">
              {filteredConferences.length} events listed
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-100/70 p-2.5 rounded-xl border border-stone-200">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              All Events ({CONFERENCES_DATA.length})
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'international'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              International ({CONFERENCES_DATA.filter(c => c.category === 'international').length})
            </button>
            <button
              onClick={() => setFilter('national')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'national'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              National ({CONFERENCES_DATA.filter(c => c.category === 'national').length})
            </button>
            <button
              onClick={() => setFilter('competition')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'competition'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              Competitions ({CONFERENCES_DATA.filter(c => c.category === 'competition').length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search summit, city, topic..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs placeholder:text-stone-400 focus:outline-none focus:border-stone-400"
            />
          </div>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredConferences.map((conf) => (
            <div
              key={conf.id}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                    {conf.year}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>{conf.location}</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                  {conf.title}
                </h3>

                <p className="text-xs font-medium text-stone-700">
                  {conf.organization}
                </p>

                {conf.role && (
                  <p className="text-xs text-amber-900 font-medium bg-amber-50/80 px-2.5 py-1 rounded inline-block">
                    Role: {conf.role}
                  </p>
                )}

                {conf.description && (
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {conf.description}
                  </p>
                )}
              </div>

              {/* Documents attached */}
              {conf.documents.length > 0 && (
                <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
                  {conf.documents.map((doc, dIdx) => (
                    <button
                      key={dIdx}
                      onClick={() =>
                        onOpenDocument({
                          title: `${conf.title} — ${doc.title}`,
                          url: doc.url,
                          description: `${conf.organization} (${conf.year}) · Official document file.`
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
    </section>
  );
};
