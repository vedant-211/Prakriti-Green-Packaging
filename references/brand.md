# 🌿 Brand Directive: Prakriti Green Packaging Company

**File Purpose:** This document defines the strict brand guidelines, aesthetic identity, and technical UI constraints for the "Prakriti Green Packaging Company" web application. 
**Agent Instruction:** Read this file before generating any React components, Tailwind configurations, or CSS for the Prakriti frontend. Do not deviate from these design rules.

---

## 1. Brand Identity & Vibe
* **Name:** Prakriti Green Packaging Co.
* **Industry:** Premium Sustainable & Eco-Friendly Packaging.
* **Core Vibe:** "High-End Organic." The aesthetic should not look like a cheap, generic "green" eco-site. It must look like a luxury interior design or high-end fashion website (inspired by the Bouclair Behance case study). 
* **Key Attributes:** Minimalist, spacious, sophisticated, tactile, calm, and highly professional.

---

## 2. Design System & Tokens

### A. Color Palette
Avoid bright, neon greens. Rely on deeply muted, natural earth tones paired with luxurious negative space.
* **Base Background:** `#F7F5F0` (Warm Linen/Off-White) - Use this instead of stark white.
* **Surface Background:** `#FFFFFF` (Pure White) - For overlapping cards or distinct sections.
* **Primary Text:** `#1C201E` (Deep Charcoal/Forest Tint) - Do not use pure `#000000`.
* **Primary Accent (Brand Green):** `#2A4B3C` (Rich Forest Green) - Use for primary buttons, bold headings, and footer backgrounds.
* **Secondary Accent:** `#A3B19B` (Muted Sage) - Use for subtle borders, hover states, and secondary badges.
* **Accent/Highlight:** `#D9C5B2` (Soft Kraft/Cardboard) - Use sparingly to hint at packaging materials.

*Tailwind Config Instruction:* Extend the Tailwind `theme.colors` with `prakriti-bg`, `prakriti-text`, `prakriti-green`, `prakriti-sage`, and `prakriti-kraft`.

### B. Typography
The typography must feel editorial, mimicking high-end magazines.
* **Headings (Display):** `Playfair Display` or `Lora` (Serif). 
  * *Usage:* H1, H2, Hero statements, quote blocks. Must be heavily tracked (tight letter spacing for large text, slightly loose for smaller headers).
* **Body (Sans-Serif):** `Inter`, `Satoshi`, or `DM Sans`.
  * *Usage:* Paragraphs, navigation links, button text, metadata. Keep font-weight medium to light.
* *Agent Instruction:* Import these from Google Fonts in the core `index.html` or `globals.css` file.

### C. Spatial Composition & Grid
* **Whitespace is a feature:** Use generous padding (`py-24` or `py-32` in Tailwind) between sections. Do not cram elements together.
* **Asymmetry:** Overlap images with text boxes. Use CSS grid to create offset layouts (e.g., an image taking up 7 columns, with a text block overlapping it spanning 4 columns).
* **Borders:** Thin, elegant borders (`border border-prakriti-sage/30`) on cards and UI elements. 

---

## 3. Component & UI Guidelines

### Hero Section
* **Style:** Edge-to-edge imagery or a massive split-screen layout.
* **Imagery Context:** Macro photography of organic textures, corrugated kraft paper, minimal boxes with elegant shadows, or leaves.
* **Overlay:** If placing text over images, use a very subtle gradient overlay to preserve the contrast of the Serif headings.

### Buttons & CTAs
* **Primary Button:** Solid `#2A4B3C` background, white text, fully square or very slightly rounded (`rounded-sm`). NO heavy pill shapes.
* **Hover State:** Smooth transition to a slightly darker shade, with a very subtle scale effect (`hover:scale-[1.02] transition-all duration-300`).
* **Secondary Button:** Transparent background, thin `border-prakriti-text`, dark text.

### Imagery & Cards
* **Border Radius:** Minimal. Use `rounded-none` or `rounded-sm`. This creates a structural, architectural feel.
* **Shadows:** Avoid heavy drop shadows. Use extremely soft, diffused shadows (`shadow-sm` or `shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]`) only when absolutely necessary to lift an element.

---

## 4. Motion & Micro-Interactions
* **Philosophy:** Motion should be buttery smooth, deliberate, and unhurried. No bouncy or chaotic animations.
* **Page Load:** Elements should fade in and subtly slide up (`opacity-0 translate-y-4` to `opacity-100 translate-y-0`) using Framer Motion or simple CSS keyframes. Stagger the reveals.
* **Hover Interactions:** Images inside cards should have a slow, subtle zoom effect on hover (`hover:scale-105 duration-700 ease-out`) while the container maintains `overflow-hidden`.

---

## 5. MERN Stack Execution Rules
* **Frontend:** Use React with Tailwind CSS. Strictly adhere to the class names and design tokens specified above.
* **Components:** Build modular, reusable components for `Button`, `SectionHeading`, `ProductCard`, and `FeatureGrid`.
* **Data Flow:** When fetching Prakriti's packaging products from the Express/MongoDB backend, map them into the elegant UI grid seamlessly, ensuring the loading states use a high-end skeleton loader that matches the `prakriti-bg` color.