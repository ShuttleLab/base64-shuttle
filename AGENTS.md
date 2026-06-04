# Base64 Shuttle - AGENTS.md

## Project Overview

Base64 Shuttle — a free, privacy-first online encoding/decoding toolkit. Supports Base64, URL, HTML, Hex, Unicode, and JWT tokens. Built with Next.js 16, deployed as static export to Cloudflare Pages.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |

- `npm run build` compiles, checks types, and exports to `out/`.
- There is **no test suite** configured.

## Architecture

- `app/` — Next.js App Router
  - `app/layout.tsx` — Root layout (metadata, JSON-LD SoftwareApplication, ThemeProvider, Toaster)
  - `app/[locale]/` — i18n routes
    - `layout.tsx` — Locale layout (NextIntlClientProvider, Header, Footer, hreflang)
    - `page.tsx` — Homepage with full encoding tool UI
    - `about/` — About page with FAQPage + HowTo schemas
    - `privacy/` — Privacy policy
    - `terms/` — Terms of service
    - `tools/` — Layer 4 SEO landing pages (7 tools)
  - `app/sitemap.ts` — SEO sitemap with hreflang alternates
  - `app/robots.ts` — SEO robots
  - `app/opengraph-image.tsx` — OG image (force-static)
  - `app/manifest.ts` — PWA manifest
  - `app/icon-192.png/route.tsx` + `icon-512.png/route.tsx` — PWA icons
  - `app/not-found.tsx` — Custom 404 with cross-promotion
- `components/` — React components
  - `header.tsx` — Navigation bar
  - `footer.tsx` — Footer (About | Privacy | Terms | Contact + cross-promo)
  - `theme-sync.tsx` — System/Light/Dark 3-state toggle
  - `layout-shell.tsx` — Header + Main + Footer wrapper
  - `encoder-decoder.tsx` — Core generic encode/decode component
  - `tool-tabs.tsx` — Tool selection tab bar
  - `base64-tool.tsx` / `url-tool.tsx` / `html-tool.tsx` / `jwt-tool.tsx` / `hex-tool.tsx` / `unicode-tool.tsx` / `file-base64-tool.tsx` — Individual tool components
  - `conversion-stats.tsx` — Input/output length and ratio display
  - `home-content.tsx` — Homepage content (hero, features, tools)
  - `AboutFaq.tsx` + `AboutFaqData.tsx` — FAQ data and rendering
  - `ui/` — shadcn components
- `lib/` — Shared utilities
  - `encoders/base64.ts` — Base64 encode/decode (btoa/atob + TextEncoder)
  - `encoders/url.ts` — URL encode/decode (encodeURIComponent/decodeURIComponent)
  - `encoders/html.ts` — HTML entity encode/decode (DOM API)
  - `encoders/jwt.ts` — JWT decode (atob + JSON.parse)
  - `encoders/hex.ts` — Hex encode/decode (charCodeAt/toString(16))
  - `encoders/unicode.ts` — Unicode escape encode/decode (codePointAt/fromCodePoint)
  - `utils.ts` — `cn()` utility
  - `constants.ts` — Site URL, name, email constants
- `i18n/` — next-intl configuration
  - `routing.ts` — Locale routing (en, zh, as-needed)
  - `request.ts` — Server-side translations
  - `navigation.ts` — Link, useRouter, etc.
- `messages/` — Translation files (en.json, zh.json)

## i18n

- URL-based with next-intl (`localePrefix: "as-needed"`)
- Default locale: `en` (served at `/`)
- Chinese: `zh` (served at `/zh`)
- Layer 4 pages: English only (`/tools/*`)
- Server components: `getTranslations({ locale, namespace })`
- Client components: `useTranslations("namespace")`
- **Always add both `en` and `zh` entries** when adding UI text

## Encoding Logic

All encoding/decoding uses browser-native APIs:
- Base64: `TextEncoder` + `btoa()` / `atob()` + `TextDecoder` (UTF-8 support)
- URL: `encodeURIComponent()` / `decodeURIComponent()`
- HTML: DOM API (`textContent` ↔ `innerHTML`)
- JWT: `atob()` + `JSON.parse()` (decode only, no signature verification)
- Hex: `charCodeAt().toString(16)` / `String.fromCharCode()`
- Unicode: `codePointAt()` / `String.fromCodePoint()`
- File: `FileReader.readAsDataURL()` for file-to-Base64

## UI Conventions

- Tailwind CSS v4 + shadcn/ui
- Geist + Geist Mono fonts
- Theme: System/Light/Dark (via `ThemeProvider`)
- Toast: sonner (top-center, richColors, 3s)
- Icons: lucide-react
- Path alias: `@/` maps to project root

## Cloudflare Deployment

- Static export (`output: "export"` in next.config.ts)
- `wrangler.toml` configures only `[assets]` directory
- No middleware (not supported in static export)
- No Edge Runtime (not supported in static export)
- `images.unoptimized: true` in next.config.ts

## SEO

- Layer 1: Homepage (500+ words + embedded tool UI)
- Layer 3: About (FAQPage + HowTo schemas), Privacy, Terms
- Layer 4: 7 tool landing pages (800-1500 words each)
- All pages have proper metadata, canonical URLs, and hreflang
- See `SEO_OVERVIEW.md` for complete asset map

## License

MIT
