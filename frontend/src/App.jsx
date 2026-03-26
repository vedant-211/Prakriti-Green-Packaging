// App.jsx — Prakriti Green Packaging Co. Landing Page
// Root composition: manages isSubmitted state and renders all 8 sections
// in exact landing page architecture order.
//
// STATE LOGIC (per reviewer annotation):
//   - isSubmitted: bool — lifted here, passed as onSuccess to Hero & SecondaryCTA
//   - When isSubmitted = true, SuccessSection renders INSTEAD of HeroSection

import HeroSection from './components/sections/HeroSection';
import SuccessSection from './components/sections/SuccessSection';
import ProblemAgitateSection from './components/sections/ProblemAgitateSection';
import ValueStackSection from './components/sections/ValueStackSection';
import SocialProofSection from './components/sections/SocialProofSection';
import TransformationSection from './components/sections/TransformationSection';
import SecondaryCTASection from './components/sections/SecondaryCTASection';
import FooterSection from './components/sections/FooterSection';
import { useState } from 'react';

export default function App() {
  // Shared form-submission state — passed to both CTA sections
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSuccess() {
    setIsSubmitted(true);
    // Smooth scroll to top so SuccessSection is visible immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="font-sans bg-prakriti-bg text-prakriti-text">

      {/* ── STEP 1: HERO (replaced by SuccessSection on submit) ── */}
      {isSubmitted
        ? <SuccessSection />
        : <HeroSection onSuccess={handleSuccess} />
      }

      {/* ── STEP 3: PROBLEM-AGITATE ── */}
      {/* (Step 2 / Success is above — conditional on state) */}
      <ProblemAgitateSection />

      {/* ── STEP 4: VALUE STACK ── */}
      <ValueStackSection />

      {/* ── STEP 5: SOCIAL PROOF ── */}
      <SocialProofSection />

      {/* ── STEP 6: TRANSFORMATION ── */}
      <TransformationSection />

      {/* ── STEP 7: SECONDARY CTA ── */}
      <SecondaryCTASection onSuccess={handleSuccess} />

      {/* ── STEP 8: FOOTER ── */}
      <FooterSection />
    </main>
  );
}
