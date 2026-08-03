# Omedad Hotel — Design Guidelines

Official design and development reference for the Omedad Hotel website.

## Brand Identity

Omedad Hotel is a premium Ethiopian destination for international tourists, business travelers, government officials, diplomats, conference guests, and Ethiopian travelers. The experience should feel **welcoming**, **refined**, **trustworthy**, and **authentic**.

## Design Philosophy

Do **not** build a generic hotel website. Blend:

- Modern luxury
- Ethiopian elegance
- Minimalism
- Premium user experience
- Strong storytelling

Communicate the warmth of Ethiopian hospitality while maintaining the visual quality of leading international hotel brands.

## Cultural Inspiration

Use Ethiopian inspiration **subtly and tastefully**:

- Ethiopian geometric patterns (see `src/styles/patterns.css`)
- Traditional woven textures
- Warm hospitality
- Coffee ceremony culture
- Local craftsmanship
- Ethiopian landscapes
- Addis Ababa's modern city atmosphere

These appear as subtle accents — background textures, overlays, iconography — not dominant interface elements. Avoid stereotypes or overly decorative motifs.

## Visual Style

**Primary colors:** Deep Navy Blue, White, Soft Gray

Accent colors sparingly, only when they enhance the design.

The interface should feel: elegant, spacious, calm, premium, timeless.

Design tokens live in `src/styles/variables.css`.

## Photography

Until real hotel photography is available:

- Use elegant placeholders
- Build sections so replacing media requires minimal code changes
- Do not tightly couple layouts to placeholder assets

Media configs are centralized in `src/constants/` (e.g. `HERO_MEDIA`, `ABOUT_MEDIA`).

## Content Style

Professional English for an international audience. Tone: warm, confident, welcoming, sophisticated.

Avoid exaggerated marketing language. Focus on comfort, service, convenience, and genuine hospitality.

Content constants live in `src/constants/`.

## Performance

Optimize for varying internet speeds:

- Fast loading
- Optimized images
- Lazy loading
- Responsive layouts
- Smooth but lightweight animations

## Scalability

Structure the project for future expansion:

- Online reservations
- Special offers
- Events
- Restaurant reservations
- Meeting and conference bookings
- Blog and news
- Customer reviews
- CMS integration

## Development Principle

Before shipping any feature or section, ask:

> *Does this feel like a premium Ethiopian hotel website that could compete with international hospitality brands while preserving its local identity?*

If the answer is no, refine until it achieves that balance.
