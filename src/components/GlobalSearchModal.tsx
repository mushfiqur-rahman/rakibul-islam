import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, FileText, Award, Calendar, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import {
  PUBLICATIONS_DATA,
  CERTIFICATIONS_DATA,
  CONFERENCES_DATA,
  RESOURCES_DATA,
  AWARDS_DATA,
  LEADERSHIP_DATA
} from '../data/portfolioData';

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Publication' | 'Certification' | 'Conference' | 'Resource' | 'Award' | 'Leadership';
  docUrl?: string;
  sectionId: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDocument
}) => {
  const [query, setQuery] = useState('');

  // Assemble all searchable records
  const allRecords = useMemo<SearchResultItem[]>(() => {
    const list: SearchResultItem[] = [];

    PUBLICATIONS_DATA.forEach(p => {
      list.push({
        id: `pub-${p.id}`,
        title: p.title,
        subtitle: `${p.venue} (${p.year}) · ${p.keywords.slice(0, 3).join(', ')}`,
        category: 'Publication',
        docUrl: p.docUrl,
        sectionId: 'research'
      });
    });

    CERTIFICATIONS_DATA.forEach(c => {
      list.push({
        id: `cert-${c.id}`,
        title: c.name,
        subtitle: `${c.issuer} ${c.center ? `· ${c.center}` : ''} · ${c.category}`,
        category: 'Certification',
        docUrl: c.docUrl,
        sectionId: 'certifications'
      });
    });

    CONFERENCES_DATA.forEach(c => {
      list.push({
        id: `conf-${c.id}`,
        title: c.title,
        subtitle: `${c.organization} (${c.year}) · ${c.location}`,
        category: 'Conference',
        docUrl: c.documents?.[0]?.url,
        sectionId: 'conferences'
      });
    });

    RESOURCES_DATA.forEach((r, idx) => {
      list.push({
        id: `res-${idx}`,
        title: r.title,
        subtitle: `${r.category} · ${r.description}`,
        category: 'Resource',
        docUrl: r.url,
        sectionId: 'resources'
      });
    });

    AWARDS_DATA.forEach((a, idx) => {
      list.push({
        id: `award-${idx}`,
        title: a.title,
        subtitle: `${a.issuer} (${a.year})`,
        category: 'Award',
        docUrl: a.docUrl,
        sectionId: 'awards'
      });
    });

    LEADERSHIP_DATA.forEach((l, idx) => {
      list.push({
        id: `lead-${idx}`,
        title: l.title,
        subtitle: `${l.organization} (${l.year})`,
        category: 'Leadership',
        docUrl: l.documents?.[0]?.url,
        sectionId: 'leadership'
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allRecords.slice(0, 8);
    const q = query.toLowerCase();
    return allRecords
      .filter(r => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q) || r.category.toLowerCase().includes(q))
      .slice(0, 15);
  }, [allRecords, query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    if (item.docUrl) {
      onSelectDocument({
        title: item.title,
        url: item.docUrl,
        description: item.subtitle
      });
    } else {
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Publication':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Certification':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200';
      case 'Conference':
        return 'text-sky-800 bg-sky-50 border-sky-200';
      case 'Resource':
        return 'text-indigo-800 bg-indigo-50 border-indigo-200';
      case 'Award':
        return 'text-purple-800 bg-purple-50 border-purple-200';
      default:
        return 'text-stone-700 bg-stone-100 border-stone-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-stone-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, 5G mobility, Cisco/Red Hat certs, conferences, LaTeX templates..."
            className="w-full bg-transparent text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[11px] font-mono text-stone-400 border border-stone-200 px-1.5 py-0.5 rounded bg-white shrink-0">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-stone-100 p-2">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group flex items-start justify-between p-3 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <div className="space-y-0.5 pr-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-stone-800 shrink-0 text-xs mt-1">
                  {item.docUrl ? (
                    <span className="flex items-center gap-1 text-[11px] text-amber-800 font-medium">
                      View Doc <ExternalLink className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-stone-500">
                      Jump to Section <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-xs text-stone-500">
              No matching records found for "{query}". Try searching "5G", "Cisco", "ICANN", "IEEE", or "Overleaf".
            </div>
          )}
        </div>

        {/* Quick Footer */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
          <span>{allRecords.length} indexed publications, certifications & resources</span>
          <span className="font-mono">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
