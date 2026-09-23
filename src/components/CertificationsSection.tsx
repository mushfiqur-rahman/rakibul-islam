import React, { useState, useMemo } from 'react';
import { FileText, ExternalLink, Search, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

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
    <section id="certifications" className="py-20 border-b border-slate-200/80 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 block">
              Accreditations & Professional Training
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight text-balance">
              Certifications & Industry Credentials
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed text-balance">
              Verified certifications spanning Cisco enterprise networking, Red Hat Linux administration, IEEE technical credentials, APNIC routing security, and ICANN Internet governance.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            {CERTIFICATIONS_DATA.length} Total Verified Credentials
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-2 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="flex flex-wrap items-center gap-1">
            {(['All', 'Cisco & Linux', 'IEEE', 'APNIC', 'ICANN', 'BYLCx'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setIssuerFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  issuerFilter === tab
                    ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certification, code..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                {/* Clean unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">
                    {cert.issuer}
                    {cert.code && ` · ${cert.code}`}
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {cert.name}
                </h3>

                {cert.center && (
                  <p className="text-xs text-slate-500">
                    Training Center: {cert.center}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                {cert.docUrl ? (
                  <button
                    onClick={() =>
                      onOpenDocument({
                        title: cert.name,
                        url: cert.docUrl!,
                        description: `Issued by ${cert.issuer}${cert.center ? ` (${cert.center})` : ''} · Verified Certificate.`
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                ) : (
                  <span className="text-slate-400 text-xs italic">
                    Accredited Course / Training
                  </span>
                )}

                <span title="Verified by Issuing Authority" className="flex items-center gap-1 text-[11px] text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
