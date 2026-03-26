// FooterSection.jsx — STEP 8: PROFESSIONAL LEGITIMACY
// Architecture: Logo → Nav → Legal → Social
// BG: Deep Charcoal (#1C201E) — creates a grounding, premium sense of closure.

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Materials', href: '#materials' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

// Minimal SVG social icons
const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <circle cx="17.5" cy="6.5" r="0.5" strokeWidth={1.5} fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.773 0 3.137-1.868 3.137-4.566 0-2.39-1.716-4.06-4.165-4.06-2.836 0-4.5 2.126-4.5 4.325 0 .856.33 1.774.741 2.276a.3.3 0 01.069.287c-.075.314-.243.995-.276 1.134-.044.183-.146.221-.336.133-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prakriti-text text-white py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top Row: Wordmark + Nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-20 border-b border-white/10">

          {/* Brand Wordmark */}
          <div>
            <p className="font-serif text-2xl font-semibold text-prakriti-kraft tracking-tight">
              Prakriti
            </p>
            <p className="font-sans text-xs text-white/40 mt-1 tracking-widest uppercase">
              Green Packaging Co.
            </p>
            <p className="font-sans text-sm font-light text-white/40 mt-4 max-w-xs leading-relaxed">
              Premium sustainable packaging for brands that refuse to compromise on the unboxing experience.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-light text-white/50 hover:text-prakriti-sage transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Row: Legal + Social */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-12 md:pt-16">

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-6">
            <p className="font-sans text-xs text-white/25">
              © {currentYear} Prakriti Green Packaging Co. All rights reserved.
            </p>
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-prakriti-sage transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
