import { useState } from 'react';
import { businessData } from '../data/businessData';
import { extendedGalleryData } from '../data/extendedGalleryData';
import { ArrowLeft, Sparkles, MessageCircle, X, Eye, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onNavigateHome, onNavigateContact }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const getCategoryImages = (category) =>
    extendedGalleryData
      .filter((image) => image.category === category)
      .slice(0, 4)
      .map(({ image, title, alt }) => ({ url: image, title, alt }));

  // 6 Services with 4 curated images each
  const servicesList = [
    {
      id: 'bridal-mehandi',
      title: 'Bridal',
      tagline: 'The Crown Jewel of Bridal Artistry',
      description: 'Elaborate full-arm bridal designs featuring rich traditional Jaipuri motifs, delicate wrist cuffs, fine-line detailing, and blessed organic henna formulation for a deep, long-lasting mahogany stain.',
      badge: 'Most Popular',
      images: getCategoryImages('Bridal')
    },
    {
      id: 'portrait-mehandi',
      title: 'Portrait',
      tagline: 'Your Love Story Drawn in Henna',
      description: 'Exquisite miniature portraits of the bride and groom hand-drawn onto the palms with astonishing realism, capturing facial expressions, traditional attire, and emotional milestones.',
      badge: 'Bespoke Art',
      images: getCategoryImages('Portrait')
    },
    {
      id: 'mandala-mehandi',
      title: 'Mandala',
      tagline: 'Balanced Circular Henna Artistry',
      description: 'Intricate mandala mehndi patterns with balanced symmetry, fine-line detailing, and floral accents for a distinctive celebration look.',
      badge: 'Symmetrical Art',
      images: getCategoryImages('Mandala')
    },
    {
      id: 'engagement-mehandi',
      title: 'Engagement',
      tagline: 'Graceful Celebration of New Beginnings',
      description: 'Delicate, flowing engagement mehndi patterns designed specifically for ring ceremonies and roka functions, highlighting diamond rings and celebratory attire.',
      badge: 'Ring Ceremony',
      images: getCategoryImages('Engagement')
    },
    {
      id: 'festival-mehandi',
      title: 'Festival',
      tagline: 'Traditional Henna for Festive Celebrations',
      description: 'Celebrate festivals and cultural gatherings with elegant henna designs featuring traditional motifs, floral details, and rich, graceful patterns.',
      badge: 'Festive Designs',
      images: getCategoryImages('Festival')
    },
    {
      id: 'guest-arabic-mehandi',
      title: 'Guest',
      tagline: 'Flowing Trails for Family & Celebrations',
      description: 'Stunning Arabic vine trails, bold floral motifs, and quick-drying organic henna formulations tailored for wedding guests, family members, sangeet functions, and festive gatherings.',
      badge: 'Group & Festivities',
      images: getCategoryImages('Guest')
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#541820] hover:text-[#C5A15A] mb-8 transition-colors group focus-visible:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            Artistry & Specialisations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A1017] mt-2">
            Our Mehndi Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#382326]/80 font-sans max-w-2xl mx-auto">
            Traditional Rajasthani precision and contemporary bridal styles tailored for your celebration in Indirapuram, Ghaziabad & Delhi-NCR. Click any service to view its 4-photo gallery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setActiveModalService(service)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E9D8B8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
            >
              {/* Cover Image Preview (First image of the 4) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#3A1017]">
                <img
                  src={service.images[0].url}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C5A15A] text-[#3A1017]">
                  {service.badge}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#E9D8B8]">4 Photos</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#E9D8B8]">
                    <Eye className="w-3.5 h-3.5" /> View Gallery Popup
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#3A1017] group-hover:text-[#C5A15A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C5A15A] mt-1 mb-2.5">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#382326]/80 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9D8B8]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#541820] group-hover:underline">
                    Explore 4 Designs →
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateContact();
                    }}
                    className="text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded bg-[#3A1017] text-[#F5EEE6] hover:bg-[#C5A15A] hover:text-[#3A1017] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Call to action card for custom enquiries */}
          <div className="bg-gradient-to-br from-[#3A1017] to-[#541820] text-[#F5EEE6] rounded-2xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] block mb-2">
                Bespoke Requests
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Have a Unique Design in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#E9D8B8]/90 leading-relaxed">
                Whether it is a royal destination wedding, a themed family celebration, or personalised motifs, Raju mehandi Artist brings your vision to life.
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-lg bg-[#C5A15A] text-[#3A1017] hover:bg-[#E9D8B8] transition-colors shadow"
              >
                <span>Contact for Custom Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Image Gallery Popup Modal */}
        {activeModalService && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalService(null)}
          >
            <div
              className="bg-[#FDFBF7] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#C5A15A] shadow-2xl p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                aria-label="Close popup"
                className="absolute top-4 right-4 text-[#3A1017] hover:text-[#C5A15A] p-2 rounded-full bg-[#F5EEE6] hover:bg-[#3A1017] transition-colors focus-visible:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8 pr-10">
                <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A]">
                  Curated Gallery Popup
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3A1017] mt-1">
                  {activeModalService.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#382326]/80 mt-1 max-w-lg mx-auto">
                  {activeModalService.description}
                </p>
              </div>

              {/* 4 Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {activeModalService.images.map((imgObj, idx) => (
                  <div key={idx} className="group relative bg-[#F5EEE6] rounded-xl overflow-hidden border border-[#E9D8B8] shadow-sm aspect-[4/3]">
                    <img
                      src={imgObj.url}
                      alt={imgObj.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <p className="text-xs font-serif text-white font-medium">{imgObj.title}</p>
                      <p className="text-[10px] text-[#E9D8B8] uppercase tracking-wider">{activeModalService.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E9D8B8]">
                <a
                  href={businessData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold py-3 px-6 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire about {activeModalService.title} on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setActiveModalService(null);
                    onNavigateContact();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold py-3 px-6 rounded-lg bg-[#3A1017] text-[#F5EEE6] hover:bg-[#541820] transition-colors"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
