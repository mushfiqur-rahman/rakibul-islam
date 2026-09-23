import React, { useState } from 'react';
import { BookMarked, Terminal, FileCode, ExternalLink, Download } from 'lucide-react';
import { RESOURCES_DATA, ResourceItem } from '../data/portfolioData';

interface ResourcesSectionProps {
  onOpenDocument?: (doc: { title: string; url: string; description?: string }) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Cloud Shell' | 'LaTeX' | 'Publishing Template'>('all');

  const filteredResources = RESOURCES_DATA.filter((r) => {
    if (activeTab === 'all') return true;
    return r.category === activeTab;
  });

  return (
    <section id="resources" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5" />
              Academic Tooling & Open Guides
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Resources & Research Toolkits
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Curated LaTeX templates for Green University students, IEEE/Elsevier publication packages, and Google Cloud Shell networking cheatsheets.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
            {(['all', 'LaTeX', 'Cloud Shell', 'Publishing Template'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab === 'all' ? 'All Resources' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                    {item.category}
                  </span>
                  {item.category === 'Cloud Shell' ? (
                    <Terminal className="w-3.5 h-3.5 text-stone-500" />
                  ) : (
                    <FileCode className="w-3.5 h-3.5 text-stone-500" />
                  )}
                </div>

                <h3 className="text-sm font-semibold text-stone-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span>Open Resource / Template</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
