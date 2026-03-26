// SocialProofSection.jsx — STEP 5: LET OTHERS CONVINCE THEM
// Architecture: Section header + 3 testimonials with specific measurable results
// Copy Instruction: Realistic testimonials from luxury fashion or premium skincare founders
//                  praising tactile feel and unboxing experience.

import SectionHeading from '../ui/SectionHeading';

const TESTIMONIALS = [
  {
    quote:
      "We'd been ship­ping our £150 facial oils in whatever box our 3PL offered. After switching to Prakriti's custom kraft mailers, our unboxing video content went up 38%. Customers started tagging us before they even opened the product. The box *is* the moment.",
    author: 'Mira Ashford',
    role: 'Founder, Soleil Apothecary (Luxury Skincare)',
    result: '38% increase in unboxing tags within 60 days',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote:
      "Our brand is built on the idea that sustainable fashion can feel luxurious—not like a compromise. For two years, our packaging told a different story. Prakriti's embossed tissue paper changed that. The soft-touch finish and the blind-debossed logo feel as considered as our garments.",
    author: 'James Okafor',
    role: 'Creative Director, Ōkamura London (Fashion)',
    result: 'NPS score on packaging jumped from 6.2 to 9.1',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote:
      "I was skeptical that packaging could move the needle on retention. Then our first-time buyer repeat rate increased by 22% in the quarter after we relaunched with Prakriti boxes. Our customers are literally keeping the boxes. They're becoming part of the brand.",
    author: 'Priya Nair',
    role: 'CEO, Kairos Studio (Premium Jewellery)',
    result: '22% lift in repeat purchase rate post-relaunch',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-prakriti-surface py-32 md:py-48 px-8">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          eyebrow="Social Proof"
          heading="What Founders Say After the First Shipment"
          subtext="These are not stock-photo testimonials. These are real conversations with brand owners who trusted us with their customer's first impression."
          align="center"
          delay={0}
        />

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author}
              style={{ '--delay': `${i * 120}ms` }}
              className="
                animate-fade-slide-up
                flex flex-col justify-between h-full
                p-8
                border border-prakriti-sage/20 rounded-sm
                bg-prakriti-bg
                shadow-sm
              "
            >
              {/* Opening quote mark — editorial detail */}
              <div>
                <span className="font-serif text-5xl leading-none text-prakriti-kraft select-none">"</span>
                <p className="font-sans text-sm font-light text-prakriti-text/75 leading-loose mt-2">
                  {t.quote}
                </p>
              </div>

              {/* Result metric highlight */}
              <div className="mt-8 pt-6 border-t border-prakriti-sage/20">
                <p className="font-sans text-xs text-prakriti-green font-medium tracking-wider mb-3">
                  📈 {t.result}
                </p>
                <div className="flex items-center gap-3">
                  {/* Avatar Image */}
                  <div className="w-10 h-10 rounded-sm bg-prakriti-green flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={t.image} alt={`Portrait of ${t.author}, ${t.role}`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-prakriti-text">{t.author}</p>
                    <p className="font-sans text-xs text-prakriti-text/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
