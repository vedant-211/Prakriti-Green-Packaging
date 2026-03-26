// ProblemAgitateSection.jsx — STEP 3: MAKE THE STATUS QUO PAINFUL
// Architecture: 3 Problems with Agitation → Personal Transition paragraph
// Copy Goal: The reader FEELS the gap between where they are and where they need to be.
// Focus: Flimsy, ugly, generic 'eco-friendly' boxes ruining brand perceived value.

import SectionHeading from '../ui/SectionHeading';

const PROBLEMS = [
  {
    number: '01',
    title: 'Your "Eco" Box Is Quietly Killing Your Brand.',
    agitation:
      `That limp, brown, unmarked mailer isn't just forgettable — it's actively signalling "budget brand" to every customer who touches it. In a market where unboxing content drives $1.2B in annual discovery, your packaging is doing your marketing for you. Right now, it's saying the wrong thing.`,
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Stack of flimsy, unmarked generic brown shipping boxes'
  },
  {
    number: '02',
    title: 'You Spent Years Building Brand Equity. Your Packaging Erases It in 3 Seconds.',
    agitation:
      `A customer who paid £180 for your serum tears open a flimsy box that collapses in their hands. That sinking feeling — that is the gap between the brand you've built and the experience you're delivering. Luxury is felt before it's heard. And your box is the handshake.`,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Premium skincare product juxtaposed with poor generic cardboard packaging'
  },
  {
    number: '03',
    title: 'Generic MOQ Minimums Are Locking You Into Packaging You Hate.',
    agitation:
      `You've been forced to order 5,000 mediocre boxes because "custom" packaging felt impossible at your scale. So you make do — and every single one of those boxes ships out as a missed opportunity to impress, convert, and retain.`,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Thousands of generic cardboard boxes stacked in a warehouse'
  },
];

export default function ProblemAgitateSection() {
  return (
    <section className="bg-prakriti-surface py-32 md:py-48 px-8">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          eyebrow="The Problem"
          heading="The Packaging Trap Every Luxury Brand Falls Into"
          subtext="Most brands obsess over product, photography, and ads — then ship their £200 purchase in a box that feels like it came from a warehouse clearance sale."
          delay={0}
        />

        {/* Problem cards — structured as numbered list for authority */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.number}
              style={{ '--delay': `${i * 120}ms` }}
              className="animate-fade-slide-up relative bg-prakriti-bg border border-prakriti-sage/20 shadow-sm rounded-sm flex flex-col overflow-hidden h-full"
            >
              {/* Card Image */}
              <div className="w-full aspect-video relative">
                <img src={p.image} alt={p.alt} className="absolute inset-0 w-full h-full object-cover filter brightness-90 sepia-[.1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-prakriti-bg to-transparent" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Number — large editorial stamp */}
                <span className="font-serif text-6xl font-bold text-prakriti-green/5 absolute -top-8 right-6 select-none z-0">
                  {p.number}
                </span>

                {/* Kraft accent bar */}
                <div className="w-8 h-0.5 bg-prakriti-kraft mb-6 relative z-10" />

                <h3 className="font-serif text-xl font-semibold tracking-tight text-prakriti-green leading-snug mb-4 relative z-10">
                  {p.title}
                </h3>
                <p className="font-sans text-sm font-light text-prakriti-text/65 leading-loose relative z-10 flex-1">
                  {p.agitation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Transition — bridge from pain to solution */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-prakriti-kraft mx-auto mb-10" />
          <p className="font-serif text-2xl md:text-3xl font-light italic text-prakriti-green/80 leading-relaxed tracking-tight">
            "After working with hundreds of premium brands, we've seen the same story repeat.
            The product is extraordinary. The packaging lets it down. We built Prakriti to close that gap — permanently."
          </p>
          <p className="mt-6 font-sans text-sm font-medium tracking-widest uppercase text-prakriti-sage">
            — Prakriti Founding Team
          </p>
        </div>
      </div>
    </section>
  );
}
