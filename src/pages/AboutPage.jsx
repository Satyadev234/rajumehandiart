import { businessData } from '../data/businessData';
import { ArrowLeft, Award, Sparkles, Heart, ShieldCheck, MapPin } from 'lucide-react';
import rajuOwnerPortrait from '../assets/images/raju_owner_portrait_1792049880220.jpg';

export default function AboutPage({ onNavigateHome, onNavigateContact }) {
  const { contact } = businessData;

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#541820] hover:text-[#C5A15A] mb-8 transition-colors group focus-visible:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            The Atelier & Master Artisan
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A1017] mt-2">
            About {businessData.name}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#382326]/80 font-sans max-w-2xl mx-auto italic font-serif">
            "Preserving centuries of authentic henna heritage while handcrafting bespoke bridal narratives for every bride's special day."
          </p>
        </div>

        {/* Main Content Grid: Owner Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl p-6 sm:p-10 border border-[#E9D8B8] shadow-sm mb-16">
          {/* Owner Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#C5A15A]/40 aspect-[3/4] bg-[#3A1017]">
              <img
                src={rajuOwnerPortrait}
                alt="Raju - Master Mehndi Artist at work in Indirapuram Studio"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1017]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs uppercase tracking-widest text-[#E9D8B8] font-semibold">Master Artisan</p>
                <p className="text-lg font-serif text-white mt-0.5">{businessData.name}</p>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#3A1017] text-[#E9D8B8] p-4 rounded-xl shadow-lg border border-[#C5A15A] hidden sm:block">
              <p className="text-xs uppercase tracking-widest font-semibold">Specialisation</p>
              <p className="text-sm font-serif text-white mt-0.5">Bridal Marwadi & Portraits</p>
            </div>
          </div>

          {/* Story Text Column */}
          <div className="lg:col-span-7 space-y-6 text-[#382326]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3A1017] mb-3">
                Crafting Timeless Traditions with Grace & Precision
              </h2>
              <p className="text-sm sm:text-base text-[#382326]/85 leading-relaxed font-sans">
                Based in <span className="font-semibold text-[#541820]">{contact.address}</span>, <span className="font-semibold text-[#541820]">{businessData.name}</span> has grown into a premier bridal atelier known for exquisite fine-line craftsmanship, intricate Marwadi jaal work, and deeply personal portrait storytelling.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#382326]/85 leading-relaxed font-sans">
              Every celebration is unique. Our approach combines traditional Rajasthani design discipline with modern elegance, ensuring each stroke honours the cultural significance of the ritual while complementing the bride's personal aesthetic and bridal attire.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E9D8B8]/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5EEE6] text-[#541820] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#C5A15A]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#3A1017]">100% Organic Henna</h3>
                  <p className="text-xs text-[#382326]/75 mt-0.5">Pure natural leaves, chemical-free formulation for deep rich mahogany stains.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5EEE6] text-[#541820] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#C5A15A]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#3A1017]">Personalised Narratives</h3>
                  <p className="text-xs text-[#382326]/75 mt-0.5">Bespoke couple portraits and symbolic motifs woven into every bridal design.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5EEE6] text-[#541820] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A15A]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#3A1017]">Professional Hygiene</h3>
                  <p className="text-xs text-[#382326]/75 mt-0.5">Meticulous hygiene standards and premium application care throughout.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5EEE6] text-[#541820] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C5A15A]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#3A1017]">On-Location Travel</h3>
                  <p className="text-xs text-[#382326]/75 mt-0.5">Available across Indirapuram, Ghaziabad, Delhi-NCR, and destination venues.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-7 rounded bg-[#3A1017] text-[#F5EEE6] hover:bg-[#541820] transition-colors shadow"
              >
                Book Your Date
              </button>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-7 rounded bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors shadow"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
