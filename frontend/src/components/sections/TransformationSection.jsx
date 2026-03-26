// TransformationSection.jsx — STEP 6: MAKE THE OUTCOME TANGIBLE
// Architecture: 4 stages: Quick Win → Compound Effect → Advantage → 10x
// Goal: The user can see themselves on the other side of the transformation.

import SectionHeading from '../ui/SectionHeading';

const STAGES = [
  {
    number: '01',
    stage: 'Quick Win',
    timeframe: 'Day 1–5',
    headline: 'Your Physical Sample Arrives.',
    body:
      `You hold your brand's potential in your hands — your logo soft-embossed on tissue paper, your mailer box in the exact material weight you chose. The "aha moment" hits before you've shipped a single unit.`,
  },
  {
    number: '02',
    stage: 'Compound Effect',
    timeframe: 'Month 1',
    headline: 'Your First Shipment Lands.',
    body:
      'Customers start tagging you. Unboxing content appears without you asking for it. Your brand is being shared at the moment of highest purchase satisfaction — inside the box.',
  },
  {
    number: '03',
    stage: 'The Advantage',
    timeframe: 'Month 3',
    headline: 'Retention Goes Up. Churn Goes Down.',
    body:
      `Re-purchase decisions happen subconsciously — and they're happening at the mailbox. Premium packaging has been shown to increase LTV by 20–35% by making customers feel the brand is worth returning to.`,
  },
  {
    number: '04',
    stage: '10× Result',
    timeframe: 'Year 1',
    headline: 'Your Packaging Becomes Part of Your Brand Story.',
    body:
      `Press features. Pinterest boards. Stockist buyer's notes. Your box becomes a memorability signal that compounds long after the product is used — because people keep beautiful boxes.`,
  },
];

export default function TransformationSection() {
  return (
    <section className="bg-prakriti-bg py-32 md:py-48 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          eyebrow="The Transformation"
          heading="What Happens After You Say Yes"
          subtext="This isn't packaging. It's a four-act journey from forgotten shipment to memorable brand touchpoint."
          delay={0}
        />

        {/* Stage Timeline */}
        <div className="mt-20 relative">

          {/* Connecting horizontal line (desktop only) */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px bg-prakriti-kraft/40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {STAGES.map((s, i) => (
              <div
                key={s.number}
                style={{ '--delay': `${i * 130}ms` }}
                className="animate-fade-slide-up relative"
              >
                {/* Stage dot — sits on the line */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 rounded-none bg-prakriti-green flex-shrink-0 relative z-10" />
                  <span className="font-sans text-xs text-prakriti-sage tracking-widest uppercase">
                    {s.timeframe}
                  </span>
                </div>

                {/* Stage label */}
                <span className="inline-block font-sans text-xs font-medium tracking-[0.2em] uppercase text-prakriti-kraft mb-3">
                  {s.number} — {s.stage}
                </span>

                <h3 className="font-serif text-xl font-semibold tracking-tight text-prakriti-green leading-snug mb-3">
                  {s.headline}
                </h3>
                <p className="font-sans text-sm font-light text-prakriti-text/60 leading-loose">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
