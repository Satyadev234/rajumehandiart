import { useState } from 'react';
import { extendedGalleryData } from '../data/extendedGalleryData';
import { businessData } from '../data/businessData';
import { Plus, Check, MessageCircle, X, ZoomIn, ArrowLeft } from 'lucide-react';

export default function GalleryPage({ onNavigateHome }) {
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Bridal', 'Engagement', 'Portrait', 'Mandala', 'Festival', 'Guest'];

  const filteredImages = activeCategory === 'All' 
    ? extendedGalleryData 
    : extendedGalleryData.filter(item => item.category === activeCategory);

  const toggleSelect = (e, url) => {
    e.stopPropagation();
    setSelectedUrls(prev => 
      prev.includes(url) ? prev.filter(item => item !== url) : [...prev, url]
    );
  };

  const handleWhatsAppSubmit = () => {
    if (selectedUrls.length === 0) {
      alert('Please select at least one image using the plus button before submitting to WhatsApp.');
      return;
    }

    // Format message with ONLY image URLs as requested
    const text = 
      `*Selected Mehndi Design URLs - Raju Mehandi Art*\n\n` +
      selectedUrls.join('\n');

    const url = `https://wa.me/${businessData.contact.whatsappInternational}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-32 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#541820] hover:text-[#C5A15A] mb-6 transition-colors group focus-visible:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-8">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            Curated Masterpieces ({extendedGalleryData.length} Designs)
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3A1017] mt-1">
            Raju Mehandi Art Gallery
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#382326]/80 font-sans max-w-xl mx-auto">
            Browse our extensive collection. Click any photo to view in large size, or tap the plus button (+) to add designs to your enquiry cart.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-wider px-3.5 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-[#3A1017] text-[#F5EEE6] font-semibold shadow-sm'
                  : 'bg-[#F5EEE6] text-[#382326]/80 hover:bg-[#E9D8B8]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredImages.map((item) => {
            const isSelected = selectedUrls.includes(item.image);
            return (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative bg-[#F5EEE6] rounded-lg overflow-hidden border border-[#E9D8B8]/80 shadow-xs hover:shadow-md transition-all cursor-pointer aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                  <span className="text-[10px] text-[#E9D8B8] font-sans truncate">{item.category}</span>
                  <span className="text-xs text-white font-serif truncate">{item.title}</span>
                </div>

                {/* Plus / Selection Button */}
                <button
                  type="button"
                  onClick={(e) => toggleSelect(e, item.image)}
                  aria-label={isSelected ? 'Remove image from cart' : 'Add image to cart'}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md focus-visible:outline-none ${
                    isSelected
                      ? 'bg-[#25D366] text-white ring-2 ring-white'
                      : 'bg-black/55 text-white hover:bg-[#3A1017] hover:text-[#E9D8B8]'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4" />}
                </button>

                {/* Zoom Indicator Icon on Hover */}
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart / Selection Action Bar at Bottom */}
        {selectedUrls.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#3A1017] text-[#F5EEE6] px-6 py-3.5 rounded-full shadow-2xl border border-[#C5A15A] flex items-center gap-4 sm:gap-6 animate-in slide-in-from-bottom-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <span className="w-6 h-6 rounded-full bg-[#C5A15A] text-[#3A1017] font-bold flex items-center justify-center text-xs">
                {selectedUrls.length}
              </span>
              <span>Designs Selected</span>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Submit URLs to WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedUrls([])}
              className="text-xs text-[#E9D8B8] hover:text-white underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
                className="absolute -top-12 right-0 text-white hover:text-[#C5A15A] p-2 focus-visible:outline-none"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="bg-[#1a0509] rounded-xl overflow-hidden border border-[#C5A15A]/40 shadow-2xl max-h-[80vh] flex flex-col">
                <div className="overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={lightboxImage.largeImage || lightboxImage.image}
                    alt={lightboxImage.alt}
                    className="max-h-[70vh] w-auto object-contain rounded"
                  />
                </div>
                <div className="p-4 bg-[#3A1017] flex items-center justify-between border-t border-[#C5A15A]/30">
                  <div>
                    <h3 className="text-sm font-serif text-[#F5EEE6] font-medium">{lightboxImage.title}</h3>
                    <p className="text-[11px] text-[#C5A15A] uppercase tracking-wider">{lightboxImage.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => toggleSelect(e, lightboxImage.image)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded transition-colors ${
                      selectedUrls.includes(lightboxImage.image)
                        ? 'bg-[#25D366] text-white'
                        : 'bg-[#C5A15A] text-[#3A1017] hover:bg-[#E9D8B8]'
                    }`}
                  >
                    {selectedUrls.includes(lightboxImage.image) ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Photo URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
