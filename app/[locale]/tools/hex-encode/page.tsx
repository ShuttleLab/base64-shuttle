import { setRequestLocale } from "next-intl/server";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const BASE_URL = "https://base64.shuttlelab.org";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Hex Encode Online – Free Hexadecimal Encoder & Converter Tool",
    description: "Convert text to hexadecimal format instantly. Free online hex encoder that transforms strings into their hex byte representation in your browser.",
    alternates: {
      canonical: locale === "en" ? "/tools/hex-encode" : `/${locale}/tools/hex-encode`,
      languages: { en: "/tools/hex-encode", "x-default": "/tools/hex-encode" },
    },
  };
}

export default async function HexEncodePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/#tool` },
      { "@type": "ListItem", position: 3, name: "Hex Encode Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Hex Encode Text Online",
    description: "Convert text to hexadecimal byte representation using a free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the hex encoder",
        text: "Navigate to the Hex Encode page on Base64 Shuttle. The tool is ready to use with no installation or signup.",
        url: `${BASE_URL}/tools/hex-encode`,
      },
      {
        "@type": "HowToStep",
        name: "Enter your text",
        text: "Type or paste the text you want to convert to hexadecimal. The encoder accepts any UTF-8 input, including special characters and emojis.",
      },
      {
        "@type": "HowToStep",
        name: "Click Encode",
        text: "Press the Encode button to convert each character to its hexadecimal byte value. For example, the letter &quot;A&quot; becomes &quot;41&quot; and a space becomes &quot;20&quot;.",
      },
      {
        "@type": "HowToStep",
        name: "Copy the hex output",
        text: "Click the Copy button to save the hexadecimal string to your clipboard. Use it in binary protocols, debugging tools, or data analysis workflows.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is hexadecimal encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hexadecimal encoding converts each byte of data into two hexadecimal digits (0–9 and A–F). Each character in the original text is represented by its byte value in base 16. For example, the letter &quot;A&quot; (ASCII 65) is encoded as &quot;41&quot;.",
        },
      },
      {
        "@type": "Question",
        name: "Why use hexadecimal instead of Base64?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hex encoding is simpler and human-readable—each byte maps to exactly two characters. However, it doubles the data size (100% overhead), while Base64 only adds 33% overhead. Hex is preferred in contexts where readability matters more than compactness.",
        },
      },
      {
        "@type": "Question",
        name: "Can I encode binary files to hex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can encode any binary data to its hexadecimal representation. This is commonly used in forensic analysis, debugging network packets, and inspecting file contents at the byte level.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between hex and decimal encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hex encoding uses base 16 (digits 0–9 and letters A–F), while decimal encoding uses base 10 (digits 0–9). Hex is more compact for representing binary data because two hex digits can represent any byte value (0–255), while decimal requires up to three digits.",
        },
      },
      {
        "@type": "Question",
        name: "Is hex encoding case-sensitive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hex digits A–F can be uppercase or lowercase. Both forms are valid and represent the same values. Some tools use uppercase (41 42 43) while others use lowercase (61 62 63). This encoder produces output in a consistent case.",
        },
      },
      {
        "@type": "Question",
        name: "How does hex encoding handle Unicode characters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unicode characters are first encoded to their UTF-8 byte representation, and then each byte is converted to hex. A single Unicode character may produce 2 to 4 hex byte pairs depending on its code point.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Hex Encode Online – Free Hexadecimal Encoder & Converter Tool",
    description: "A detailed guide to hexadecimal encoding, how it works, when to use it, and how to convert text to hex format online for free.",
    author: {
      "@type": "Organization",
      name: "Base64 Shuttle",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Base64 Shuttle",
      url: BASE_URL,
    },
    datePublished: "2025-01-01",
    dateModified: "2025-06-01",
    url: `${BASE_URL}/tools/hex-encode`,
    about: {
      "@type": "Thing",
      name: "Hexadecimal Encoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Hex Encode Online – Free Hexadecimal Encoder</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert any text or binary data to its hexadecimal byte representation instantly. Base64 Shuttle processes everything locally in your browser for fast, private encoding.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Hexadecimal Encoding?</h2>
          <p className="mb-4">
            Hexadecimal encoding, often called hex encoding, is a method of representing binary data using the base-16 number system. Each byte of data (8 bits, values 0–255) is expressed as two hexadecimal digits using the characters 0–9 and A–F. For example, the ASCII letter &quot;A&quot; has a decimal value of 65, which is 41 in hexadecimal, so it is encoded as &quot;41&quot;.
          </p>
          <p className="mb-4">
            Hex encoding is one of the simplest and most human-readable ways to represent binary data. Unlike Base64, which uses a 64-character alphabet, hex uses only 16 characters, making it easy to read and manually verify. The trade-off is that hex encoding doubles the data size—every byte becomes two characters—while Base64 adds only about 33% overhead.
          </p>
          <p className="mb-4">
            Hexadecimal notation is ubiquitous in computing. Memory addresses, color codes in CSS (#FF5733), MAC addresses, UUIDs, and cryptographic hashes are all represented in hex. Understanding hex encoding is essential for working with low-level systems, network protocols, and security tools.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Hex Encode Text</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the encoder:</strong> Go to the Hex Encode page on Base64 Shuttle. No setup or account is needed.
            </li>
            <li>
              <strong>Enter your text:</strong> Type or paste the string you want to convert. The encoder handles ASCII, UTF-8, and any binary data.
            </li>
            <li>
              <strong>Click Encode:</strong> The tool converts each byte to its two-digit hexadecimal representation. The output appears instantly in the result area.
            </li>
            <li>
              <strong>Copy the hex string:</strong> Click the Copy button to save the hexadecimal output to your clipboard. Use it in your code, debugging tools, or data analysis.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Byte-level accuracy:</strong> Each byte is converted to exactly two hex digits, preserving the exact binary representation of your data.</li>
            <li><strong>Client-side processing:</strong> All encoding happens in your browser. No data is uploaded to any server, ensuring complete privacy.</li>
            <li><strong>UTF-8 support:</strong> Multi-byte Unicode characters are correctly encoded to their UTF-8 byte sequence before hex conversion.</li>
            <li><strong>Formatted output:</strong> Hex output can be displayed with or without space separators, depending on your preference.</li>
            <li><strong>Unlimited input size:</strong> Encode small strings or large files without any size restrictions or rate limits.</li>
            <li><strong>Instant results:</strong> The encoder processes input in real time, producing output as fast as you can type or paste.</li>
            <li><strong>Cross-platform:</strong> Works on any device with a modern browser, including desktops, tablets, and smartphones.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for Hex Encoding</h2>
          <p className="mb-4">
            <strong>Debugging network protocols:</strong> Network engineers and developers use hex encoding to inspect raw packet data. Protocol analyzers like Wireshark display data in hex format, and encoding your test data to hex helps you verify that the correct bytes are being transmitted.
          </p>
          <p className="mb-4">
            <strong>Cryptographic hash verification:</strong> Hash functions like SHA-256 and MD5 produce binary output that is typically displayed in hex format. When you download a file and want to verify its hash, you compare the hex-encoded hash of your download with the one provided by the source.
          </p>
          <p className="mb-4">
            <strong>Binary file analysis:</strong> Security researchers and forensic analysts encode files to hex to examine their raw byte content. This reveals hidden data, file signatures, and structural information that is not visible in the rendered output.
          </p>
          <p className="mb-4">
            <strong>Color code conversion:</strong> Web developers work with hex color codes daily. Understanding hex encoding helps you convert between RGB values and hex codes, and manually adjust colors in CSS and design tools.
          </p>
          <p className="mb-4">
            <strong>Embedded systems development:</strong> Microcontroller programming often requires specifying data in hex format for memory initialization, register configuration, and communication protocols. Hex encoding tools help prepare the data for firmware flashing and testing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Hex Encoding vs. Other Formats</h2>
          <p className="mb-4">
            Hex encoding, Base64, and Base32 are all methods of representing binary data as text. Hex is the most readable but least compact. Base64 is more compact and widely supported. Base32 is case-insensitive and designed for environments where case is not preserved.
          </p>
          <p className="mb-4">
            Choose hex encoding when you need human readability and when the size overhead is acceptable—such as in debugging, logging, and hash display. Choose Base64 when you need compact encoding for data transfer, and Base32 when you need case-insensitive encoding for identifiers or tokens.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is hexadecimal encoding?</h3>
                <p className="text-muted-foreground">Hexadecimal encoding converts each byte of data into two hexadecimal digits (0–9 and A–F). Each character in the original text is represented by its byte value in base 16. For example, the letter &quot;A&quot; (ASCII 65) is encoded as &quot;41&quot;.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why use hexadecimal instead of Base64?</h3>
                <p className="text-muted-foreground">Hex encoding is simpler and human-readable—each byte maps to exactly two characters. However, it doubles the data size (100% overhead), while Base64 only adds 33% overhead. Hex is preferred in contexts where readability matters more than compactness.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I encode binary files to hex?</h3>
                <p className="text-muted-foreground">Yes, you can encode any binary data to its hexadecimal representation. This is commonly used in forensic analysis, debugging network packets, and inspecting file contents at the byte level.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the difference between hex and decimal encoding?</h3>
                <p className="text-muted-foreground">Hex encoding uses base 16 (digits 0–9 and letters A–F), while decimal encoding uses base 10 (digits 0–9). Hex is more compact for representing binary data because two hex digits can represent any byte value (0–255), while decimal requires up to three digits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is hex encoding case-sensitive?</h3>
                <p className="text-muted-foreground">The hex digits A–F can be uppercase or lowercase. Both forms are valid and represent the same values. Some tools use uppercase (41 42 43) while others use lowercase (61 62 63). This encoder produces output in a consistent case.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How does hex encoding handle Unicode characters?</h3>
                <p className="text-muted-foreground">Unicode characters are first encoded to their UTF-8 byte representation, and then each byte is converted to hex. A single Unicode character may produce 2 to 4 hex byte pairs depending on its code point.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center justify-center h-9 gap-1.5 rounded-lg bg-primary text-primary-foreground px-4 text-sm font-medium hover:bg-primary/80 transition-colors">
            
              <ArrowRight className="size-4 mr-2" />
              Try Base64 Shuttle Free
            
          </Link>
        </div>
      </div>
    </>
  );
}
