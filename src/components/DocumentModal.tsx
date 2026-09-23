import React, { useState } from 'react';
import { ExternalLink, X, Copy, Check, FileText, ShieldCheck, Download } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: {
    title: string;
    url: string;
    type?: string;
    description?: string;
    issuer?: string;
    year?: string | number;
  } | null;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose, document }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !document) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(document.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert Google Drive view URL to embeddable preview if possible
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      const parts = url.split('/file/d/');
      if (parts[1]) {
        const fileId = parts[1].split('/')[0];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return null;
  };

  const embedUrl = getEmbedUrl(document.url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-base leading-tight">
                {document.title}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                Verified Academic Document / Certificate
                {document.year && ` · ${document.year}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {document.description && (
            <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-3.5 rounded-lg border border-stone-200">
              {document.description}
            </p>
          )}

          {/* Drive Preview iframe */}
          {embedUrl ? (
            <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-100 h-96 relative">
              <iframe
                src={embedUrl}
                title={document.title}
                className="w-full h-full border-0"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="p-8 text-center bg-stone-50 border border-stone-200 rounded-lg">
              <FileText className="w-12 h-12 text-stone-400 mx-auto mb-3" />
              <p className="text-sm text-stone-700 font-medium">Document hosted on Google Drive</p>
              <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
                Click below to open and review the full resolution certified document or download it directly.
              </p>
            </div>
          )}

          {/* Document Link Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3.5 flex items-center justify-between text-xs text-stone-600 font-mono break-all">
            <span className="truncate mr-2">{document.url}</span>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-stone-200 hover:border-stone-300 rounded text-stone-700 text-xs font-sans shrink-0 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-50 border-t border-stone-200">
          <p className="text-xs text-stone-500">
            Hosted on secure Google Drive repository
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href={document.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors shadow-xs"
            >
              <span>Open Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
