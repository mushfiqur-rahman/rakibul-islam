import React from 'react';
import { ExternalLink, FileText, ArrowRight, ShieldCheck, Award, Network, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDocument, onOpenCV }) => {
  return (
    <section id="about" className="relative pt-8 pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Header Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
                <span>Green University of Bangladesh</span>
                <span aria-hidden="true">·</span>
                <span>Department of Computer Science & Engineering</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-800 font-semibold">Dec 2020</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-stone-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-[11px] font-medium">
                  <MapPin className="w-3 h-3 text-amber-700" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.08]">
                Md. Rakibul Islam
              </h1>

              <p className="text-lg sm:text-xl text-stone-700 font-sans font-normal max-w-2xl leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Thesis Highlight Card */}
            <div className="bg-stone-100/80 rounded-xl p-5 border border-stone-200/90 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
                    Featured B.Sc Thesis & Research
                  </div>
                  <h2 className="text-sm sm:text-base font-medium text-stone-900 font-serif italic">
                    "{PERSONAL_INFO.thesisTitle}"
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span>Supervisor: Prof. Dr. Md. Abdur Razzaque</span>
                    <span aria-hidden="true">·</span>
                    <span>Published in Elsevier Computer Communications (2021)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      onOpenDocument({
                        title: PERSONAL_INFO.thesisTitle,
                        url: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view?usp=sharing",
                        description: "B.Sc Thesis Document & Associated 5G Mobility Paper."
                      })
                    }
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Thesis Document</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-xs"
              >
                <span>Peer-Reviewed Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#certifications"
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                <span>30+ Certifications & Credentials</span>
              </a>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-lg text-xs font-medium transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>Complete Academic CV</span>
              </button>
            </div>

            {/* Academic Profiles & Directory Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 block mb-2.5">
                Scholarly & Professional Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {PERSONAL_INFO.profiles.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-stone-600 hover:text-stone-900 bg-white border border-stone-200 hover:border-stone-300 rounded transition-colors"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Statistics & Snapshot */}
          <div className="lg:col-span-4 space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-2xs space-y-5">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-stone-500 border-b border-stone-100 pb-2">
                Academic & Professional Snapshot
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {PERSONAL_INFO.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      {s.value}
                    </div>
                    <div className="text-xs text-stone-500 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-2.5 text-xs text-stone-600">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-stone-800 shrink-0">Current Location:</span>
                  <span className="inline-flex items-center gap-1 font-medium text-stone-900">
                    <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-stone-800 shrink-0">B.Sc CSE:</span>
                  <span>Green University of Bangladesh (2020)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-stone-800 shrink-0">Founding Chair:</span>
                  <span>IEEE Computer Society SBC, GUB</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-stone-800 shrink-0">Global Member:</span>
                  <span>Internet Society (ISOC) #2176707</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-stone-800 shrink-0">Industry Certs:</span>
                  <span>Cisco CCNA, CyberOps, Red Hat OpenStack</span>
                </div>
              </div>
            </div>

            {/* Quick Research Topics Matrix */}
            <div className="bg-stone-100/70 rounded-xl p-5 border border-stone-200 space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 text-stone-600" />
                Core Technical Domains
              </span>

              <div className="flex flex-wrap gap-1.5">
                {PERSONAL_INFO.researchInterests.map((interest, i) => (
                  <span
                    key={i}
                    className="text-xs text-stone-700 bg-white border border-stone-200/90 px-2.5 py-1 rounded"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
