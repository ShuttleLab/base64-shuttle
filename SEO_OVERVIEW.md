# SEO Overview: base64-shuttle

> Strategy: shuttlelab-handbook/playbooks/01-saas-funnel-strategy.md
> Execution playbook: shuttlelab-handbook/playbooks/00-new-saas-project.md

## Project type
- [x] Free tool

## Audience target
- [x] Overseas (English-primary)

## Payment
- Processor: None (free tool)
- Pricing: Free
- Refund window: N/A

## i18n strategy
- Implementation: URL-based + `localePrefix: "as-needed"` (next-intl)
- Default locale: `en` (at `/`)
- Chinese: `zh` (at `/zh`)
- Layer 4 language: English only

## Path A pages (internal navigation)
- Layer 1: `/` (homepage with embedded tool UI)
- Layer 3: `/about`, `/privacy`, `/terms`

## Path B pages (SEO landing)
- Layer 4: `/tools/base64-encode`, `/tools/base64-decode`, `/tools/url-encode`, `/tools/html-encode`, `/tools/jwt-decoder`, `/tools/hex-encode`, `/tools/unicode-converter`

## Schemas applied
- [x] SoftwareApplication (root layout)
- [x] FAQPage (about page + Layer 4 pages)
- [x] HowTo (about page + Layer 4 pages)
- [x] TechArticle (Layer 4 pages)
- [x] BreadcrumbList (Layer 4 pages)

## SEO Assets
- [x] `app/layout.tsx` — metadata, JSON-LD, viewport
- [x] `app/[locale]/layout.tsx` — hreflang alternates + x-default
- [x] `app/sitemap.ts` — bilingual sitemap with tool pages
- [x] `app/robots.ts` — allow /, disallow /api
- [x] `app/opengraph-image.tsx` — dynamic OG image (force-static)
- [x] `app/manifest.ts` — PWA manifest
- [x] `app/icon-192.png/route.tsx` + `icon-512.png/route.tsx` — PWA icons
- [x] `app/not-found.tsx` — custom 404 with cross-promotion

## Key metadata
- Domain: `base64.shuttlelab.org`
- Title: "Base64 Shuttle — Free Online Encoder & Decoder Toolkit"
- Description: "Encode and decode Base64, URL, HTML, Hex, Unicode, and JWT tokens in your browser. 100% private, no uploads, no registration. Free forever."
- OG type: website
- OG locale: en_US (alternate: zh_CN)

## Deployment
- Static export (`output: "export"`)
- Cloudflare Pages (Workers Static Assets)
- `wrangler.toml`: only `[assets]` directory, no `main`

## Cross-promotion
- Footer: Link to Image Shuttle (image.shuttlelab.org)
- 404 page: Links to sibling tools

## Last reviewed: 2026-06-03
