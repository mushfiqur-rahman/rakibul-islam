import React from 'react';
import { Terminal, Shield, Cpu, FileText, ExternalLink, Download } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenDocument: (doc: { title: string; url: string; description?: string }) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDocument }) => {
  return (
    <section id="portfolio" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            Engineering Implementations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Portfolio & Systems Engineering Projects
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Applied network architectures including enterprise firewall configurations in Cisco Packet Tracer, 5G cellular handover algorithmic simulation, and low-power IoT sensing nodes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                    {proj.category}
                  </span>
                  <span className="font-mono text-stone-400 text-xs">Project {idx + 1}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tools */}
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                    Technologies & Protocols:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono text-stone-700 bg-stone-50 border border-stone-200/90 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              {proj.docUrl && (
                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={() =>
                      onOpenDocument({
                        title: proj.title,
                        url: proj.docUrl!,
                        description: `${proj.category} · Project topology & simulation documentation.`
                      })
                    }
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Project File / Blueprint</span>
                    <ExternalLink className="w-3 h-3 ml-1 text-stone-300" />
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
