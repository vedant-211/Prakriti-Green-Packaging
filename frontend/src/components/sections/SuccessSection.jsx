// SuccessSection.jsx — STEP 2: KILL BUYER'S REMORSE
// Architecture Goal: Replace the Hero entirely upon form submission.
// Animated checkmark → Confirmation → Deliverable list.
// This must eliminate any post-submit doubt — they made the right call.

import { motion } from 'framer-motion';

// What the brand will receive in their sample kit
const DELIVERABLES = [
  {
    icon: '📦',
    title: 'Custom Mailer Box Sample',
    desc: 'A tactile 2-piece rigid mailer in your chosen material weight, showing FSC-certified kraft and our signature interior lining.',
  },
  {
    icon: '✨',
    title: 'Embossed Tissue Paper Sheet',
    desc: 'Your logo, blind-debossed on our 17gsm acid-free tissue. See — and feel — the difference from generic tissue paper.',
  },
  {
    icon: '🎨',
    title: 'Color & Finish Swatch Card',
    desc: 'All 12 of our premium exterior finishes: matte, soft-touch, textured linen, and recycled kraft variants.',
  },
];

export default function SuccessSection() {
  return (
    <section className="min-h-screen bg-prakriti-bg flex items-center justify-center px-8 py-24">

      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-prakriti-green mb-10"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Confirmation Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-semibold text-prakriti-green leading-tight mb-4"
        >
          You're In. Your Sample Kit Is Coming.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="font-sans text-lg font-light text-prakriti-text/60 mb-16"
        >
          Our packaging team will reach out within one business day to confirm your details
          and ship your physical sample kit — no strings, no sales pressure.
        </motion.p>

        {/* Deliverable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DELIVERABLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              className="
                text-left p-6
                bg-prakriti-surface
                border-sage-subtle rounded-sm
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
              "
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-prakriti-green mb-2">{item.title}</h3>
              <p className="font-sans text-sm font-light text-prakriti-text/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
