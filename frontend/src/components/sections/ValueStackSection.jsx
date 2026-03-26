// ValueStackSection.jsx — STEP 4: MAKE SAYING "NO" FEEL STUPID
// Architecture: 4 tiers of value (descending) → Total value → Your price
// Goal: By the time they see the actual price, it's a steal.

import SectionHeading from '../ui/SectionHeading';

const VALUE_TIERS = [
  {
    tier: 'Custom Mailer Box (MOQ 100)',
    includes: 'Structural design, FSC-certified kraft or premium board, up to 2-colour print, interior liner.',
    retail: '$480',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=200&h=200&q=80',
    alt: 'Premium minimal corrugated box texture'
  },
  {
    tier: 'Embossed Tissue Paper (Pack of 200)',
    includes: 'Blind debossing of your logo, acid-free 17gsm, available in 6 earth-tone colourways.',
    retail: '$220',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=200&h=200&q=80',
    alt: 'Soft textured white tissue paper'
  },
  {
    tier: 'Dedicated Account Manager',
    includes: 'A single packaging specialist owns your account from first proof to dispatch — no ticket systems.',
    retail: '$350',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    alt: 'Professional packaging consultant'
  },
  {
    tier: 'Free Physical Sample Kit',
    includes: 'Material swatches, a printed mini-box, tissue sample, and finish card — shipped to your door in 5 days.',
    retail: '$90',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=200&h=200&q=80',
    alt: 'Aesthetic arrangement of premium packaging samples'
  },
];

const TOTAL_VALUE = '$1,140';
const YOUR_PRICE = 'Free';

export default function ValueStackSection() {
  return (
    <section className="bg-prakriti-bg py-32 md:py-48 px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Asymmetric Layout: List left, Price card right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — Value list (7 columns) */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The Value"
              heading="Everything You Get When You Claim Your Kit"
              delay={0}
            />

            <div className="mt-16 space-y-8">
              {VALUE_TIERS.map((item, i) => (
                <div
                  key={item.tier}
                  style={{ '--delay': `${i * 100}ms` }}
                  className="animate-fade-slide-up flex items-start justify-between gap-8 pb-8 border-b border-prakriti-sage/20 last:border-0 last:pb-0"
                >
                  <div className="flex-1 flex gap-6 items-start">
                    {/* Thumbnail Image */}
                    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden bg-prakriti-sage/20 border border-sage-subtle mt-1">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover filter brightness-95 sepia-[.05]" />
                    </div>
                    
                    <div>
                      {/* Kraft number index */}
                      <span className="text-xs font-medium tracking-[0.2em] uppercase text-prakriti-kraft mb-2 block">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-lg font-semibold tracking-tight text-prakriti-green mb-1">{item.tier}</h3>
                      <p className="font-sans text-sm font-light text-prakriti-text/60 leading-loose">{item.includes}</p>
                    </div>
                  </div>
                  {/* Retail value — crossed out to anchor perception */}
                  <div className="text-right flex-shrink-0">
                    <span className="font-sans text-sm text-prakriti-text/35 line-through">{item.retail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Price card (5 columns) styles as a premium ticket */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <div className="bg-prakriti-green p-12 rounded-sm shadow-xl border border-prakriti-green/80 flex flex-col justify-center">

              {/* Total Value Row */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-6">
                <span className="font-sans text-sm text-prakriti-sage tracking-widest uppercase">Total Value</span>
                <span className="font-serif text-3xl text-prakriti-kraft line-through font-semibold">{TOTAL_VALUE}</span>
              </div>

              {/* Your Price */}
              <div className="mb-8 text-center">
                <p className="font-sans text-xs text-prakriti-sage tracking-widest uppercase mb-2">Your Investment Today</p>
                <p className="font-serif text-7xl font-bold text-white leading-none">{YOUR_PRICE}</p>
                <p className="font-sans text-sm text-white/50 mt-3">We ship the kit to you. No credit card. No commitment.</p>
              </div>

              {/* CTA Note */}
              <p className="font-sans text-xs text-center text-white/40 border-t border-white/10 pt-6 leading-relaxed">
                We limit our sample kits to 50 per month to ensure our team can give each brand proper attention.
                <strong className="text-white/60 font-medium"> Availability not guaranteed.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
