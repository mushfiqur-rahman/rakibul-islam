import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { EducationSection } from './components/EducationSection';
import { ConferencesSection } from './components/ConferencesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { AwardsSection } from './components/AwardsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FooterAndContact } from './components/FooterAndContact';
import { DocumentModal } from './components/DocumentModal';
import { CitationModal } from './components/CitationModal';
import { CurriculumVitaeModal } from './components/CurriculumVitaeModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PublicationItem } from './data/portfolioData';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    url: string;
    description?: string;
    issuer?: string;
    year?: string | number;
  } | null>(null);
  const [selectedCitationPub, setSelectedCitationPub] = useState<PublicationItem | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenDocument={(doc) => setSelectedDoc(doc)}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <ResearchSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
          onOpenCitation={(pub) => setSelectedCitationPub(pub)}
        />

        <EducationSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <ConferencesSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <CertificationsSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <LeadershipSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <AwardsSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <ProjectsSection
          onOpenDocument={(doc) => setSelectedDoc(doc)}
        />

        <ResourcesSection />

        <PhotoGallery />
      </main>

      {/* Contact and Footer */}
      <FooterAndContact onOpenCV={() => setIsCVOpen(true)} />

      {/* Interactive Modals */}
      <DocumentModal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        document={selectedDoc}
      />

      <CitationModal
        isOpen={!!selectedCitationPub}
        onClose={() => setSelectedCitationPub(null)}
        publication={selectedCitationPub}
      />

      <CurriculumVitaeModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDocument={(doc) => setSelectedDoc(doc)}
      />
    </div>
  );
}
