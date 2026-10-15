import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { businessData } from '../data/businessData';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryPhone, whatsappUrl } = businessData.contact;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="flex flex-col items-center gap-3" aria-label="Contact options">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            title="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={`tel:${primaryPhone}`}
            aria-label="Call us"
            title="Call"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#541820] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A15A] text-[#3A1017] shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#541820] focus-visible:ring-offset-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
