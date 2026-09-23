import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check, ArrowUp, FileText, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterAndContactProps {
  onOpenCV: () => void;
}

export const FooterAndContact: React.FC<FooterAndContactProps> = ({ onOpenCV }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-xs text-stone-400 font-sans">
                {PERSONAL_INFO.role} · Green University of Bangladesh
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed pr-6">
              Dedicated to academic research in 5G cellular network mobility management, E-MOORA handover algorithms, and enterprise network security. Founding Chair of IEEE CS Student Branch Chapter at GUB.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-xs font-medium border border-stone-700 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Academic CV</span>
              </button>
            </div>
          </div>

          {/* Column 2: Direct Contact & Location */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block">
              Contact & Inquiries
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[11px] text-stone-400">Primary Contact:</div>
                <div className="flex items-center justify-between bg-stone-800/80 p-2 rounded border border-stone-700/60 font-mono text-[11px]">
                  <span className="truncate mr-2">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={() => handleCopyEmail(PERSONAL_INFO.email)}
                    className="p-1 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] text-stone-400">Secondary Email:</div>
                <div className="bg-stone-800/50 p-2 rounded border border-stone-800 font-mono text-[11px] text-stone-400">
                  {PERSONAL_INFO.secondaryEmail}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Scholarly Network Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block">
              Academic & Social Repositories
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {PERSONAL_INFO.profiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-stone-800/50 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors border border-stone-800"
                >
                  <span className="truncate">{p.name}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500 shrink-0 ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>© {new Date().getFullYear()} Md. Rakibul Islam. Original archive © Rakibul Islam 2022.</p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              B.Sc in Computer Science and Engineering · Green University of Bangladesh
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors border border-stone-700/60"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
