import React from 'react';
import { Award, Gift, Plane, GraduationCap, FileText, ExternalLink } from 'lucide-react';
import { AWARDS_DATA, AwardItem } from '../data/portfolioData';

interface AwardsSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onOpenDocument }) => {
  const getIcon = (type: AwardItem['type']) => {
    switch (type) {
      case 'award':
        return <Award className="w-4 h-4 text-amber-700" />;
      case 'fellowship':
        return <Gift className="w-4 h-4 text-emerald-700" />;
      case 'grant':
        return <Plane className="w-4 h-4 text-sky-700" />;
      case 'scholarship':
        return <GraduationCap className="w-4 h-4 text-indigo-700" />;
    }
  };

  const getBadgeClass = (type: AwardItem['type']) => {
    switch (type) {
      case 'award':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'fellowship':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'grant':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'scholarship':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
    }
  };

  return (
    <section id="awards" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Distinctions & Academic Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Awards, Grants & Scholarships
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            National IEEE awards for student branch excellence, Ministry of ICT cloud fellowship, international airline travel grants, and postgraduate scholarship offers.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS_DATA.map((award, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold border ${getBadgeClass(award.type)}`}>
                    {getIcon(award.type)}
                    <span className="capitalize">{award.type}</span>
                  </span>
                  <span className="font-mono text-stone-500 text-[11px]">{award.year}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                  {award.title}
                </h3>

                <p className="text-xs font-medium text-stone-700">
                  {award.issuer}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {award.description}
                </p>

                {award.amountOrBenefit && (
                  <div className="text-xs font-mono text-stone-800 bg-stone-50 border border-stone-200 p-2 rounded">
                    Benefit / Stipend: <strong className="font-semibold">{award.amountOrBenefit}</strong>
                  </div>
                )}
              </div>

              {award.docUrl && (
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() =>
                      onOpenDocument({
                        title: award.title,
                        url: award.docUrl!,
                        description: `${award.issuer} · Verified award certificate / letter.`
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-medium transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Award Certificate / Letter</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
