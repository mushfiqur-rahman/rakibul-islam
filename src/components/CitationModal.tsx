import React, { useState } from 'react';
import { X, Copy, Check, Quote, BookOpen } from 'lucide-react';
import { PublicationItem } from '../data/portfolioData';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  publication: PublicationItem | null;
}

export const CitationModal: React.FC<CitationModalProps> = ({ isOpen, onClose, publication }) => {
  const [tab, setTab] = useState<'bibtex' | 'apa' | 'ieee'>('bibtex');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !publication) return null;

  const authorsText = publication.authors.join(', ');

  const apaCitation = `${authorsText} (${publication.year}). ${publication.title}. ${publication.venue}${
    publication.volumeInfo ? `, ${publication.volumeInfo}` : ''
  }.${publication.doiOrUrl ? ` ${publication.doiOrUrl}` : ''}`;

  const ieeeCitation = `${authorsText}, "${publication.title}," ${publication.venue}, ${
    publication.volumeInfo ? `${publication.volumeInfo}, ` : ''
  }${publication.year}.${publication.doiOrUrl ? ` doi: ${publication.doiOrUrl}` : ''}`;

  const currentCitation = tab === 'bibtex' ? publication.bibtex : tab === 'apa' ? apaCitation : ieeeCitation;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-sm sm:text-base leading-tight">
                Cite Publication
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 truncate max-w-sm sm:max-w-md">
                {publication.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-4 border-b border-stone-200 bg-white">
          <button
            onClick={() => setTab('bibtex')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-colors ${
              tab === 'bibtex'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            BibTeX
          </button>
          <button
            onClick={() => setTab('apa')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-colors ${
              tab === 'apa'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            APA
          </button>
          <button
            onClick={() => setTab('ieee')}
            className={`pb-2.5 px-3 text-xs font-medium border-b-2 transition-colors ${
              tab === 'ieee'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            IEEE
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6">
          <div className="relative bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed max-h-72 selection:bg-amber-800">
            <pre className="whitespace-pre-wrap">{currentCitation}</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-50 border-t border-stone-200">
          <span className="text-xs text-stone-500 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Standard Academic Citation Format
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-stone-600 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-300" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
