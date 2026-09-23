import React, { useState, useMemo } from 'react';
import { ShieldCheck, Award, FileText, ExternalLink, Search, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA, CertificationItem } from '../data/portfolioData';

interface CertificationsSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenDocument }) => {
  const [issuerFilter, setIssuerFilter] = useState<'All' | 'Cisco & Linux' | 'IEEE' | 'APNIC' | 'ICANN' | 'BYLCx'>('All');
  const [query, setQuery] = useState('');

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS_DATA.filter((cert) => {
      let matchesIssuer = true;
      if (issuerFilter === 'Cisco & Linux') {
        matchesIssuer = ['Cisco', 'Red Hat', 'MikroTik'].includes(cert.issuer);
      } else if (issuerFilter === 'IEEE') {
        matchesIssuer = cert.issuer === 'IEEE';
      } else if (issuerFilter === 'APNIC') {
        matchesIssuer = cert.issuer === 'APNIC';
      } else if (issuerFilter === 'ICANN') {
        matchesIssuer = cert.issuer === 'ICANN';
      } else if (issuerFilter === 'BYLCx') {
        matchesIssuer = cert.issuer === 'BYLCx' || cert.issuer === 'Govt';
      }

      const matchesSearch =
        !query.trim() ||
        cert.name.toLowerCase().includes(query.toLowerCase()) ||
        cert.category.toLowerCase().includes(query.toLowerCase()) ||
        (cert.code && cert.code.toLowerCase().includes(query.toLowerCase())) ||
        (cert.center && cert.center.toLowerCase().includes(query.toLowerCase()));

      return matchesIssuer && matchesSearch;
    });
  }, [issuerFilter, query]);

  return (
    <section id="certifications" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Accreditations & Professional Training
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Verified certifications spanning Cisco enterprise networking, Red Hat Linux administration, IEEE technical credentials, APNIC routing security, and ICANN Internet governance.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500">
            {CERTIFICATIONS_DATA.length} Total Verified Credentials
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-100/70 p-2.5 rounded-xl border border-stone-200">
          <div className="flex flex-wrap items-center gap-1">
            {(['All', 'Cisco & Linux', 'IEEE', 'APNIC', 'ICANN', 'BYLCx'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setIssuerFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  issuerFilter === tab
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certification, code..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs placeholder:text-stone-400 focus:outline-none focus:border-stone-400"
            />
          </div>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                    {cert.issuer}
                    {cert.code && ` · ${cert.code}`}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-stone-900 leading-snug">
                  {cert.name}
                </h3>

                {cert.center && (
                  <p className="text-xs text-stone-500">
                    Training Center: {cert.center}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                {cert.docUrl ? (
                  <button
                    onClick={() =>
                      onOpenDocument({
                        title: cert.name,
                        url: cert.docUrl!,
                        description: `Issued by ${cert.issuer}${cert.center ? ` (${cert.center})` : ''} · Verified Certificate.`
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-medium transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                ) : (
                  <span className="text-stone-400 text-xs italic">
                    Accredited Course / Training
                  </span>
                )}

                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
