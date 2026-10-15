import { useState } from 'react';
import { businessData } from '../data/businessData';
import { MessageCircle, Send, CheckCircle2, AlertCircle, Loader2, ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage({ onNavigateHome }) {
  const { contact, policies } = businessData;

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
    date: '',
    requirement: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 1. WhatsApp Action
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.date) {
      alert('Please fill in your Name, Phone Number, and Date before sending on WhatsApp.');
      return;
    }

    const text = 
      `*New Booking / Enquiry - Raju mehandi Artist*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.number}\n` +
      `📍 *Location:* ${formData.location || 'Not specified'}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `💬 *Custom Requirement:* ${formData.requirement || 'None'}`;

    const url = `https://wa.me/${contact.whatsappInternational}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 2. Web3Forms Email Action
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.date) {
      alert('Please fill in your Name, Phone Number, and Date before sending the email enquiry.');
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6d817d39-3ef2-4c69-9b33-43e42bd9cbf1',
          subject: `New Bridal/Event Booking Enquiry from ${formData.name}`,
          from_name: 'Raju mehandi Artist Website',
          name: formData.name,
          phone: formData.number,
          location: formData.location || 'Not specified',
          date: formData.date,
          message: formData.requirement || 'No custom requirement specified.',
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', number: '', location: '', date: '', requirement: '' });
      } else {
        throw new Error(result.message || 'Failed to send message via Web3Forms.');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#541820] hover:text-[#C5A15A] mb-8 transition-colors group focus-visible:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            Atelier Enquiries & Bookings
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A1017] mt-2">
            Contact Raju mehandi Artist
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#382326]/80 font-sans max-w-xl mx-auto">
            Fill out your celebration details below to connect instantly via WhatsApp or send a secure email enquiry.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E9D8B8] shadow-lg space-y-8">
          {/* Success Banner */}
          {status.success && (
            <div className="bg-[#102F28] text-[#F7E9D8] p-4 rounded-lg flex items-center gap-3 border border-[#C6A05C]">
              <CheckCircle2 className="w-5 h-5 text-[#C6A05C] shrink-0" />
              <div>
                <p className="font-semibold text-sm">Enquiry Sent Successfully!</p>
                <p className="text-xs text-[#F7E9D8]/80 mt-0.5">Thank you for reaching out. Raju mehandi Artist will get back to you shortly.</p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {status.error && (
            <div className="bg-[#541820] text-white p-4 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#E9D8B8] shrink-0" />
              <div>
                <p className="font-semibold text-sm">Submission Error</p>
                <p className="text-xs text-white/80 mt-0.5">{status.error}</p>
              </div>
            </div>
          )}

          {/* Interactive Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#541820] mb-2">
                  Your Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFBF7] border border-[#E9D8B8] text-sm text-[#382326] focus:outline-none focus:ring-2 focus:ring-[#C5A15A]"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-xs uppercase tracking-wider font-semibold text-[#541820] mb-2">
                  Phone Number / WhatsApp <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFBF7] border border-[#E9D8B8] text-sm text-[#382326] focus:outline-none focus:ring-2 focus:ring-[#C5A15A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-xs uppercase tracking-wider font-semibold text-[#541820] mb-2">
                  Event Location / Venue
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Shakti Khand I, Indirapuram, Ghaziabad"
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFBF7] border border-[#E9D8B8] text-sm text-[#382326] focus:outline-none focus:ring-2 focus:ring-[#C5A15A]"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-xs uppercase tracking-wider font-semibold text-[#541820] mb-2">
                  Booking Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFBF7] border border-[#E9D8B8] text-sm text-[#382326] focus:outline-none focus:ring-2 focus:ring-[#C5A15A]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="requirement" className="block text-xs uppercase tracking-wider font-semibold text-[#541820] mb-2">
                Custom Requirement / Design Notes
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows="4"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Mention bridal package choice, number of guests, or special design preferences..."
                className="w-full px-4 py-3 rounded-lg bg-[#FDFBF7] border border-[#E9D8B8] text-sm text-[#382326] focus:outline-none focus:ring-2 focus:ring-[#C5A15A]"
              ></textarea>
            </div>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E9D8B8]/60">
              <p className="text-xs text-[#382326]/70">
                <span className="font-semibold text-[#541820]">Policy:</span> {policies.advancePayment}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                {/* Web3Forms Email Button */}
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={status.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-lg bg-[#3A1017] text-[#F5EEE6] hover:bg-[#541820] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] disabled:opacity-50"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send via Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E9D8B8]/60 text-xs">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#541820] block mb-0.5">Phone Contact</span>
                <a href={`tel:${contact.primaryPhone}`} className="text-[#382326] font-medium hover:text-[#C5A15A]">
                  +91 {contact.primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#541820] block mb-0.5">Email Address</span>
                <a href={`mailto:${contact.email}`} className="text-[#382326] font-medium hover:text-[#C5A15A]">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#541820] block mb-0.5">Studio Address</span>
                <p className="text-[#382326] leading-relaxed">{contact.address}</p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="pt-4 border-t border-[#E9D8B8]/60">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#541820] mb-3 flex items-center justify-between">
              <span>Studio Location Map</span>
              <a
                href="https://maps.google.com/?q=Raju+Mehandi+Artist+Indirapuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-sans font-medium text-[#C5A15A] hover:underline normal-case tracking-normal"
              >
                Open in Google Maps ↗
              </a>
            </h3>
            <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden border border-[#E9D8B8] shadow-sm bg-[#F5EEE6]">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Raju mehandi Artist Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
