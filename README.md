# Base64 Shuttle

A small web app to encode and decode Base64, URL, HTML, Hex, Unicode, and JWT. Everything runs in the browser; no data is sent to any server.

## Features

- **Base64** – UTF-8 safe encode/decode via TextEncoder + btoa/atob
- **URL** – encodeURIComponent / encodeURI and decoding
- **HTML entities** – escape and unescape markup
- **Hex** – text ↔ hexadecimal conversion
- **Unicode** – U+, \u, &#x and &# escape formats
- **JWT decoder** – inspect header and payload (no signature verification)
- **File ↔ Base64** – convert files to data URLs and back
- **Explicit actions** – Encode / Decode / Swap / Clear buttons, auto-growing input boxes, copy & download
- **Bilingual** – English and Chinese UI

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export to `out/`.
