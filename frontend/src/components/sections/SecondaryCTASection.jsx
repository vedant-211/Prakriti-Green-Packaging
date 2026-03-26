// SecondaryCTASection.jsx — STEP 7: CATCH THE SCROLLERS
// Architecture: Avatar Stack → Question Headline → "Yes" Button
// Goal: Convert the people who scrolled all the way down without acting on the Hero.
// Background: Forest Green — creates a dramatic shift and forces the eye to the CTA.

import { useState } from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import { submitLeadForm } from '../../utils/api';

// Initials for the stacked avatar group
const AVATARS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80', alt: 'Portrait of luxury brand founder' },
  { id: 2, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80', alt: 'Portrait of luxury brand founder' },
  { id: 3, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80', alt: 'Portrait of luxury brand founder' },
  { id: 4, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80', alt: 'Portrait of luxury brand founder' },
];

/**
 * @param {{ onSuccess: () => void }} props
 */
export default function SecondaryCTASection({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError('');
    try {
      await submitLeadForm({ email, source: 'secondary-cta' });
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-prakriti-green py-32 md:py-48 px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Avatar Stack — social proof signal for scrollers */}
        <div
          style={{ '--delay': '0ms' }}
          className="animate-fade-slide-up flex items-center justify-center mb-8"
        >
          {/* Stacked circular avatars (slight negative margin for overlap) */}
          <div className="flex -space-x-3">
            {AVATARS.map((a) => (
              <div
                key={a.id}
                className="w-10 h-10 rounded-sm border-2 border-prakriti-green overflow-hidden relative"
              >
                <img src={a.image} alt={a.alt} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="ml-4 font-sans text-sm text-white/60 font-light">
            Joined by 200+ luxury brands this year
          </p>
        </div>

        {/* Question Headline — massive, unified, tight tracking */}
        <h2
          style={{ '--delay': '100ms' }}
          className="animate-fade-slide-up font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-8"
        >
          Still scrolling? The kit proves everything.
        </h2>

        <p
          style={{ '--delay': '200ms' }}
          className="animate-fade-slide-up font-sans text-lg font-light text-white/60 mb-12 max-w-2xl mx-auto leading-loose"
        >
          Don't take our word for it. Request your free physical sample kit and let
          the material quality, embossing depth, and structural rigidity speak for themselves.
        </p>

        {/* Yes Button — email form */}
        <form
          onSubmit={handleSubmit}
          style={{ '--delay': '300ms' }}
          className="animate-fade-slide-up flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@brand.com"
            className="
              flex-1 px-4 py-3 text-sm font-light
              bg-white/10 text-white
              border border-white/20
              rounded-sm outline-none
              placeholder:text-white/40
              focus:ring-1 focus:ring-white focus:border-white transition-all duration-200
            "
          />
          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex items-center justify-center gap-2
              bg-prakriti-kraft text-prakriti-green
              px-8 py-3
              border border-transparent
              text-sm font-medium tracking-widest uppercase
              rounded-sm
              transition-all duration-300
              hover:scale-[1.02] hover:bg-[#c9b09c]
              disabled:opacity-60 disabled:cursor-not-allowed
              whitespace-nowrap
            "
          >
            {loading
              ? <span className="inline-block w-4 h-4 border-2 border-prakriti-green border-t-transparent rounded-full animate-spin" />
              : 'Yes, Send My Kit →'
            }
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-300">{error}</p>
        )}

        <p
          style={{ '--delay': '400ms' }}
          className="animate-fade-slide-up font-sans text-xs text-white/30 mt-6 tracking-wide"
        >
          Free to claim. Ships within 5 business days. No credit card required.
        </p>
      </div>
    </section>
  );
}
