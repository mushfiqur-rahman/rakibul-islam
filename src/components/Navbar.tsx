import React, { useState, useEffect } from 'react';
import { Search, FileText, Menu, X, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
    { name: 'Leadership', href: '#leadership' },
    { name: 'Awards', href: '#awards' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resources', href: '#resources' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-stone-50 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-serif font-bold text-sm tracking-tighter group-hover:bg-amber-800 transition-colors">
              RI
            </div>
            <div>
              <span className="font-serif font-semibold text-stone-900 text-base tracking-tight block group-hover:text-amber-900 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-stone-500 block -mt-0.5 tracking-tight font-sans">
                Academic Researcher · B.Sc CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-stone-950 transition-colors relative py-1 hover:underline underline-offset-4 decoration-amber-700/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center space-x-2.5">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-stone-600 bg-white border border-stone-200 hover:border-stone-300 hover:text-stone-900 rounded-lg transition-colors shadow-2xs"
              title="Search records (⌘K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-stone-400" />
              <span className="hidden sm:inline">Search archive</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] text-stone-400 border border-stone-200 px-1 rounded bg-stone-50">
                ⌘K
              </kbd>
            </button>

            {/* Curriculum Vitae Button */}
            <button
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 xl:hidden text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-stone-700 hover:bg-stone-100 hover:text-stone-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium"
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
