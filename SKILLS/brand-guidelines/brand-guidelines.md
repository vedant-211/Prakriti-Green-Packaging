---
name: brand-guidelines
description: Applies Prakriti Green Packaging Company's official brand colors, typography, and luxury-organic aesthetic to React/Tailwind frontend components. Use it when styling web UI, components, or generating any frontend artifacts to ensure the "high-end editorial" design standards are met.
license: Complete terms in LICENSE.txt
---

# Prakriti Green Packaging Brand Styling

## Overview

To access Prakriti's official luxury eco-friendly brand identity and MERN-stack styling resources, use this skill. The aesthetic is "High-End Organic"—tactile, minimal, spacious, and sophisticated (inspired by premium editorial design, not generic eco-sites).

**Keywords**: branding, corporate identity, sustainable packaging, visual identity, React styling, Tailwind config, brand colors, typography, Prakriti brand, UI formatting, visual design, luxury organic

## Brand Guidelines

### Colors

**Core Neutrals:**
- Base Background: `#F7F5F0` (Warm Linen - use as the primary app background)
- Surface Background: `#FFFFFF` (Pure White - use for overlapping cards)
- Primary Text: `#1C201E` (Deep Charcoal/Forest Tint - strictly avoid pure black `#000000`)

**Brand Accents:**
- Primary Accent (Brand Green): `#2A4B3C` (Rich Forest Green - for primary CTAs and heavy headers)
- Secondary Accent: `#A3B19B` (Muted Sage - for subtle borders and hover states)
- Highlight Accent: `#D9C5B2` (Soft Kraft - use sparingly for packaging-themed visual hints)

### Typography

- **Headings (Display)**: `Playfair Display` or `Lora` (with `ui-serif, Georgia` fallback). Use heavy tracking/letter-spacing for an editorial feel.
- **Body Text**: `Inter`, `Satoshi`, or `DM Sans` (with `ui-sans-serif, system-ui` fallback). Keep font weights light to medium.
- **Note**: Fonts should be imported via Google Fonts in the global CSS or Next.js/React layout files.

## Features

### Smart Font Application
- Applies `font-serif` to headings (H1, H2, Hero statements, blockquotes).
- Applies `font-sans` to body text, metadata, navigation, and small buttons.
- Automatically handles hierarchy, utilizing generous `line-height` (leading) to maintain an airy, breathable layout.

### UI Styling & Composition
- **Whitespace**: Enforces generous padding (e.g., `py-24` or `py-32`) between layout sections. 
- **Borders**: Uses thin, refined borders (`border border-[#A3B19B]/30`) instead of heavy box-shadows.
- **Corners**: Enforces minimal border-radius (`rounded-none` or `rounded-sm`) for a structural, architectural feel.

### Component Accents
- Buttons default to solid `#2A4B3C` with white text, utilizing subtle scaling on hover (`hover:scale-[1.02] transition-all duration-300`).
- Backgrounds avoid stark whites and loud gradients, favoring the `Warm Linen` base to evoke organic, tactile materials.

## Technical Details

### Tailwind Configuration Integration
- Brand colors must be mapped directly into `tailwind.config.js` under `theme.extend.colors` as `prakriti-bg`, `prakriti-surface`, `prakriti-text`, `prakriti-primary`, `prakriti-sage`, and `prakriti-kraft`.
- Typography must be mapped under `theme.extend.fontFamily` as `serif` and `sans`.

### Component Management
- Assumes execution within a MERN stack (specifically React).
- All color and typography variables should be applied using Tailwind utility classes to ensure responsive, consistent design across all device breakpoints.
- Avoids inline styles; enforces strict adherence to the defined Tailwind design tokens.