import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-sync";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1528" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Base64 Shuttle",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description: "Free online encoder and decoder toolkit. Supports Base64, URL, HTML, Hex, Unicode, and JWT decoding. 100% private, runs in your browser.",
  url: "https://base64.shuttlelab.org",
  offers: [{ "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" }],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://base64.shuttlelab.org"),
  title: "Base64 Shuttle — Free Online Encoder & Decoder Toolkit",
  description: "Encode and decode Base64, URL, HTML, Hex, Unicode, and JWT tokens in your browser. 100% private, no uploads, no registration. Free forever.",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Base64 Shuttle — Free Online Encoder & Decoder Toolkit",
    description: "Encode and decode Base64, URL, HTML, Hex, Unicode, and JWT tokens. 100% private, no uploads.",
    siteName: "Base64 Shuttle",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Shuttle — Free Online Encoder & Decoder Toolkit",
    description: "Encode and decode Base64, URL, HTML, Hex, Unicode, and JWT tokens in your browser.",
  },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Base64 Shuttle" },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {children}
          <ServiceWorkerRegister />
          <Toaster position="top-center" richColors closeButton duration={3000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
