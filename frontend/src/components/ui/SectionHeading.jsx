// SectionHeading.jsx — Prakriti editorial section title block
// Used across all sections for consistent typographic hierarchy.

/**
 * @param {{
 *   eyebrow?: string,    — Small uppercase label above the heading
 *   heading: string,     — Main serif H2
 *   subtext?: string,    — Body-weight paragraph below
 *   align?: 'left'|'center',
 *   light?: boolean,     — If true, uses white/kraft colors for dark bg sections
 *   delay?: number,      — Animation stagger delay in ms
 * }} props
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  light = false,
  delay = 0,
}) {
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const headingColor = light ? 'text-prakriti-kraft' : 'text-prakriti-green';
  const bodyColor = light ? 'text-white/70' : 'text-prakriti-text/70';
  const eyebrowColor = light ? 'text-prakriti-sage' : 'text-prakriti-sage';

  return (
    <div className={`flex flex-col gap-4 ${textAlign}`}>
      {eyebrow && (
        <span
          style={{ '--delay': `${delay}ms` }}
          className={`animate-fade-slide-up text-xs font-medium tracking-[0.25em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{ '--delay': `${delay + 100}ms` }}
        className={`animate-fade-slide-up font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight ${headingColor}`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          style={{ '--delay': `${delay + 200}ms` }}
          className={`animate-fade-slide-up font-sans text-base md:text-lg font-light max-w-xl leading-loose ${bodyColor}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
