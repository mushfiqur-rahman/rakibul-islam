import React, { useState } from 'react';
import { Camera, MapPin, Calendar, X, Sparkles } from 'lucide-react';
import { GALLERY_EVENTS } from '../data/portfolioData';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof GALLERY_EVENTS)[0] | null>(null);

  // Gradient / illustration cards with academic conference motifs
  const getGradientForCategory = (cat: string) => {
    switch (cat) {
      case 'Leadership':
        return 'from-amber-800 to-stone-900';
      case 'International Summit':
        return 'from-sky-900 to-indigo-950';
      case 'Research Presentation':
        return 'from-stone-800 to-zinc-900';
      case 'Academic Training':
        return 'from-emerald-900 to-stone-900';
      default:
        return 'from-neutral-800 to-stone-900';
    }
  };

  return (
    <section id="photos" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              Academic Journey & Visual Archive
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Photo Gallery & Event Moments
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Memories from international summits in Kuala Lumpur, Harvard HPAIR delegations, IEEE student branch founding ceremonies, and computing symposiums.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            {GALLERY_EVENTS.length} Featured Moments
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedPhoto(event)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white hover:border-stone-400 transition-all shadow-2xs hover:shadow-xs flex flex-col"
            >
              {/* Event Visual Backdrop */}
              <div
                className={`h-40 bg-gradient-to-br ${getGradientForCategory(
                  event.category
                )} p-4 flex flex-col justify-between text-stone-200 relative overflow-hidden`}
              >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                <div className="flex items-center justify-between text-[11px] font-medium z-10">
                  <span className="bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded text-white/90">
                    {event.category}
                  </span>
                  <span className="font-mono text-white/80">{event.year}</span>
                </div>

                <div className="z-10">
                  <span className="text-[11px] text-white/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-sm leading-snug group-hover:text-amber-900 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>View Details</span>
                  <span className="font-mono">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for photo detail */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden">
              <div
                className={`h-48 bg-gradient-to-br ${getGradientForCategory(
                  selectedPhoto.category
                )} p-6 flex flex-col justify-between text-white`}
              >
                <div className="flex justify-between items-center">
                  <span className="bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-medium">
                    {selectedPhoto.category} · {selectedPhoto.year}
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1 text-white/80 hover:text-white rounded-md hover:bg-black/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <div className="text-xs text-white/80 flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedPhoto.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold leading-tight">
                    {selectedPhoto.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedPhoto.description}
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs text-stone-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700">Event Location:</span>
                    <span>{selectedPhoto.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700">Period:</span>
                    <span>{selectedPhoto.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700">Category:</span>
                    <span>{selectedPhoto.category}</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
