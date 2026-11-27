import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VenomButton } from './VenomButton';
import { SITE, SOCIALS, WHATSAPP_URL } from '../data/portfolioData';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
        .fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo(cardRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open user's mail client with the message pre-filled
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(`Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-28 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Section Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-14 z-10">
        <span className="text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-6 h-6 object-contain" />
          Get In Touch
        </span>
        <h2
          className="text-5xl md:text-7xl font-black tracking-tight uppercase text-white"
        >
          CONTACT.
        </h2>
        <div className="w-20 h-1.5 bg-[#a31515] mt-3 rounded-full" />
      </div>

      {/* Card Form */}
      <div className="relative w-full max-w-4xl z-10">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${SITE.name} on WhatsApp`}
          className="whatsapp-card glass glass-hover mb-8 flex items-center gap-4 rounded-3xl px-6 py-5 md:px-8 relative z-10"
        >
          <span className="whatsapp-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">WhatsApp</span>
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-gray-100">{SITE.phone}</span>
          </span>
          <span className="whatsapp-cta ml-auto hidden shrink-0 text-xs font-bold uppercase tracking-wider sm:block">Chat now →</span>
        </a>
        <a
          href={`tel:+${SITE.phone}`}
          className="glass glass-hover mb-8 flex items-center gap-4 rounded-3xl px-6 py-5 md:px-8 relative z-10"
        >
          <span className="glass-chip grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-red-500">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Call</span>
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-gray-100">{SITE.phone}</span>
          </span>
        </a>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {SOCIALS.map((social) => {
            const isGithub = social.id === 'github';
            const displayUrl = social.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on ${social.label}`}
                className="glass glass-hover group flex items-center gap-4 rounded-3xl px-6 py-5 md:px-7"
              >
                <span className="glass-chip grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-red-500">
                  {isGithub ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{social.label}</span>
                  <span className="truncate text-sm sm:text-base font-extrabold text-gray-100 group-hover:text-white transition-colors">
                    {displayUrl}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 group-hover:text-red-400 transition-colors" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <div className="red-halo" style={{ inset: '-14% -10%' }} aria-hidden="true" />
      <div
        ref={cardRef}
        className="glass glass-panel-card w-full p-8 md:p-14 rounded-3xl relative z-10"
      >
        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="glass-red w-16 h-16 text-white rounded-full flex items-center justify-center text-3xl font-black mb-4 animate-bounce">
              ✓
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-3">
              Message Dispatched!
            </h3>
            <p className="text-lg text-gray-300 font-medium max-w-md">
              Thanks for reaching out! Your email app has been opened with the project details pre-filled.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            {/* Direct Email Header Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass-chip flex items-center justify-center text-red-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Direct Inquiries</span>
                  <a href={`mailto:${SITE.email}`} className="text-sm md:text-base font-bold text-white hover:text-red-400 transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Open To New Projects</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Name"
                  className="w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">
                Message &amp; Project Scope
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="Tell me about your idea, timeline and what you need built..."
                className="w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all resize-none"
              />
            </div>

            <VenomButton type="submit" variant="primary" className="self-center mt-2">
              Send Message
            </VenomButton>
          </form>
        )}
      </div>
      </div>
    </section>
  );
};
