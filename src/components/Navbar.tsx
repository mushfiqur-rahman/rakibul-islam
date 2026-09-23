import React, { useState, useEffect } from 'react';
import { Search, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Leadership', href: '#leadership' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-serif font-bold tracking-tight text-slate-900 hover:text-blue-900 transition-colors whitespace-nowrap"
          >
            Md. Rakibul Islam
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-950 transition-colors py-1 relative hover:underline underline-offset-4 decoration-blue-600/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 hover:border-slate-300 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap"
              title="Search archive (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] text-slate-400 border border-slate-200 px-1 rounded bg-white">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-slate-300" />
              <span>Curriculum Vitae</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Curriculum Vitae</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
