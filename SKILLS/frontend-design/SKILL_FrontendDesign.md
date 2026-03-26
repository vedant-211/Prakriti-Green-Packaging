---
name: mern-frontend-design
description: Create distinctive, production-grade full-stack applications with high design quality using the MERN stack. Use this skill when the user asks to build web components, pages, artifacts, or applications. Generates creative, polished React code backed by Node/Express/MongoDB, ensuring the code is readable, debuggable, and avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides the creation of distinctive, production-grade full-stack interfaces that avoid generic "AI slop" aesthetics. Implement real, working MERN stack code with exceptional attention to aesthetic details, creative choices, and structural clarity for learning and debugging.

The user provides requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (MERN stack, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code strictly using the **MERN Stack (MongoDB, Express, React, Node.js)** that is:
- Production-grade, fully functional, and full-stack.
- Highly readable, well-commented, and structured specifically for easy debugging and learning.
- Visually striking and memorable.
- Cohesive with a clear aesthetic point-of-view.
- Meticulously refined in every detail.

## MERN Architecture & Debuggability

Because the user is actively learning to read and debug this stack, the codebase must be structured cleanly:
- **Separation of Concerns**: Keep the React frontend clearly separated from the Node.js/Express backend. 
- **Transparent Data Flow**: Ensure API calls (fetch/axios) in React and routes/controllers in Express are simple to trace.
- **Database Clarity**: Define MongoDB schemas (using Mongoose) clearly, with comments explaining the data structure.
- **Comment the "Why"**: Liberally comment complex logic, API endpoints, and React state management (Hooks/Context) so the user can follow the logic and debug easily.

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Framer Motion or similar libraries for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. 
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. 

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist designs need restraint, precision, and careful attention to spacing and subtle details. Elegance comes from executing the vision well.

Remember: You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box, committing fully to a distinctive vision, and writing beautifully clean MERN architecture.

---

## Prakriti "High-End Organic" Aesthetic (Synthesized Guidelines)

When designing components for **Prakriti Green Packaging Co.**, enforce these specific constraints to achieve a premium, luxury editorial vibe inspired by leading Behance case studies:

### 1. Tailwind Configuration & Color Tokens
Extend the Tailwind `theme.colors` with the following palette. Avoid stark white for backgrounds and pure black for text; rely on deeply muted earth tones:
- `prakriti-bg`: `#F7F5F0` (Warm Linen/Off-white for main backgrounds)
- `prakriti-text`: `#1C201E` (Deep Charcoal/Forest Tint for primary text)
- `prakriti-green`: `#2A4B3C` (Rich Forest Green for primary buttons, bold headings, footers)
- `prakriti-sage`: `#A3B19B` (Muted Sage for borders, hovers, secondary badges)
- `prakriti-kraft`: `#D9C5B2` (Soft Kraft/Cardboard for subtle accents)
- *Surface Elements*: Use `#FFFFFF` for overlapping cards on top of `prakriti-bg`.

### 2. Editorial Typography
- **Headings (Display):** Use `Playfair Display` or `Lora` (Serif). Heavily track (tight letter spacing for large, slightly loose for smaller). 
- **Body & UI (Sans-Serif):** Use `Inter`, `Satoshi`, or `DM Sans` (medium to light weight). 
Ensure these are imported via Google Fonts in `index.html` or `globals.css`.

### 3. Layout, Grid & Spatial Composition
- **Whitespace:** Use generous padding (`py-24` or `py-32`) between sections. Do not cram elements together.
- **Asymmetry & Overlap:** Break the standard grid. Use CSS grid to offset images and text blocks (e.g., an image taking 7 columns, overlapped by a text block taking 4 columns). Mix edge-to-edge full-bleed imagery with contained, text-heavy areas.
- **Structural Borders & Cards:** Use thin, elegant borders (`border border-prakriti-sage/30`) on cards. Maintain minimal border radius (`rounded-none` or `rounded-sm`) to create a structural, architectural feel. No heavy pill buttons.
- **Shadows:** Avoid heavy drop shadows. Use only extremely soft, diffused shadows (e.g., `shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]`) for subtle lifting.

### 4. Motion & Micro-Interactions
- Motion must be "buttery smooth, deliberate, and unhurried."
- **Page Load:** Elements should fade in and subtly slide up (`opacity-0 translate-y-4` to `opacity-100 translate-y-0`), staggered smoothly via CSS keyframes or Framer Motion.
- **Hover Effects:** Images inside cards should have a slow, subtle zoom (`hover:scale-105 duration-700 ease-out`) keeping `overflow-hidden` on parent containers. Buttons should have a subtle scale (`hover:scale-[1.02] duration-300`).

By strictly enforcing these constraints, the resulting interface will shed any generic "eco-site" feel and consistently emulate a high-end fashion, luxury interior design, or premium editorial layout.