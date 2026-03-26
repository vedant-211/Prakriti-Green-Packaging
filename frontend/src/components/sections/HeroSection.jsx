// HeroSection.jsx — STEP 1: THE HOOK
// Architecture: Eyebrow → Headline → Subheadline → CTA (email POST) → Trust Signals
// Copy Goal: Get the email OR get the scroll.
// Target: High-end e-commerce, fashion, and luxury skincare brands.
//
// UPDATE: Right panel now renders the live GenerativeOrganicTopography Three.js scene.
// The WebGL canvas (alpha:true) blends over bg-prakriti-green so the green shows
// instantly while the canvas loads, then the organic mesh renders on top.

import { useState } from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import { GenerativeOrganicTopography } from '@/components/ui/organic-topography';
import { submitLeadForm } from '../../utils/api';

// Trust signal items shown below the CTA
const TRUST_SIGNALS = [
  { value: '200+', label: 'Luxury Brands Served' },
  { value: '100%', label: 'FSC-Certified Materials' },
  { value: '5-Day', label: 'Sample Turnaround' },
];

/**
 * HeroSection
 * @param {{ onSuccess: () => void }} props — Called after successful lead submission
 */
export default function HeroSection({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError('');
    try {
      await submitLeadForm({ email, source: 'hero' });
      onSuccess(); // Trigger SuccessSection to replace Hero (state lifted to App)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Split-screen layout: Left = editorial text, Right = live 3D organic texture
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* ── Left Panel: Copy & Form ── */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 bg-prakriti-bg">

        {/* Eyebrow */}
        <span
          style={{ '--delay': '0ms' }}
          className="animate-fade-slide-up text-xs font-medium tracking-[0.3em] uppercase text-prakriti-sage mb-6"
        >
          Premium Sustainable Packaging
        </span>

        {/* H1 — Editorial serif, tight tracking */}
        <h1
          style={{ '--delay': '100ms' }}
          className="animate-fade-slide-up font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-prakriti-green mb-8"
        >
          Your Packaging Is the&nbsp;
          <em className="italic not-italic">First Touch</em>
          &nbsp;of Your Brand Story.
        </h1>

        {/* Subheadline */}
        <p
          style={{ '--delay': '200ms' }}
          className="animate-fade-slide-up font-sans text-lg font-light text-prakriti-text/70 leading-loose max-w-md mb-12"
        >
          Prakriti crafts custom mailer boxes and embossed tissue paper that turn
          every unboxing into a luxury ritual — sustainably, without compromise.
        </p>

        {/* CTA Form — email input + submit */}
        <form
          onSubmit={handleSubmit}
          style={{ '--delay': '300ms' }}
          className="animate-fade-slide-up flex flex-col sm:flex-row gap-3 max-w-md mb-8"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@brand.com"
            className="
              flex-1 px-4 py-3 text-sm font-light
              bg-prakriti-surface text-prakriti-text
              border border-prakriti-sage/50
              rounded-sm outline-none
              placeholder:text-prakriti-sage/60
              focus:ring-1 focus:ring-prakriti-green focus:border-prakriti-green
              transition-all duration-200
            "
          />
          <PrimaryButton type="submit" loading={loading}>
            Claim Free Kit →
          </PrimaryButton>
        </form>

        {/* Inline error */}
        {error && (
          <p className="text-sm text-red-500/80 mb-6">{error}</p>
        )}

        {/* Trust Signals */}
        <div
          style={{ '--delay': '400ms' }}
          className="animate-fade-slide-up flex flex-col sm:flex-row gap-6 pt-8 border-t border-prakriti-sage/20"
        >
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.label}>
              <p className="font-serif text-2xl font-semibold text-prakriti-green">{signal.value}</p>
              <p className="text-xs font-medium tracking-wider uppercase text-prakriti-text/50 mt-0.5">{signal.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Panel: Live 3D Organic Topography ── */}
      {/*
        bg-prakriti-green renders immediately (before WebGL loads).
        The Three.js canvas uses alpha:true so its transparent bg blends with
        the green panel — the sage/forest-green mesh floats on top organically.
        overflow-hidden prevents the canvas from ever escaping this grid column.
      */}
      <div
        className="hidden lg:flex relative bg-prakriti-green overflow-hidden"
        aria-hidden="true"
      >
        {/* Three.js canvas — absolute fill, z-0 */}
        <GenerativeOrganicTopography className="absolute inset-0 w-full h-full z-0" />

        {/* Overlay: soft gradient from top — preserves scene depth */}
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-prakriti-green/60 to-transparent z-10 pointer-events-none"
        />

        {/* Overlay: thin Kraft brand accent line */}
        <div className="absolute top-12 left-12 w-20 h-px bg-prakriti-kraft/50 z-10" />

        {/* Overlay: editorial quote at bottom — anchors the visual panel */}
        <div className="absolute bottom-12 left-12 right-12 z-10">
          <p className="font-serif text-3xl font-light italic text-prakriti-kraft/90 leading-snug">
            "Packaging is the first physical conversation between your brand and your customer."
          </p>
          <p className="mt-4 text-xs text-prakriti-sage tracking-widest uppercase">
            — Prakriti Design Philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
