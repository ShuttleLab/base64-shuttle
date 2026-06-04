import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const BASE_URL = "https://base64.shuttlelab.org";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "zh") {
    return {
      title: "Base64 编码器（在线）– 免费文本与文件编码工具",
      description: "在浏览器中即时把文本、文件和二进制数据编码为 Base64。免费在线 Base64 编码器，无需上传、无需注册，完全私密。",
      alternates: {
        canonical: `/${locale}/tools/base64-encode`,
        languages: { en: "/tools/base64-encode", "x-default": "/tools/base64-encode" },
      },
    };
  }
  return {
    title: "Base64 Encode Online – Free Text & File Encoder Tool",
    description: "Encode text, files, and binary data to Base64 instantly in your browser. Free online Base64 encoder with no upload, no signup, and complete privacy.",
    alternates: {
      canonical: locale === "en" ? "/tools/base64-encode" : `/${locale}/tools/base64-encode`,
      languages: { en: "/tools/base64-encode", "x-default": "/tools/base64-encode" },
    },
  };
}

export default async function Base64EncodePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{t("base64Encode.title")}</h1>
        <p className="text-lg text-muted-foreground mb-10">{t("base64Encode.subtitle")}</p>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-base font-medium">在首页打开 Base64 编码工具，立即开始编码。</p>
            <Link
              href="/zh/#tool"
              className="inline-flex items-center justify-center h-10 gap-1.5 rounded-lg bg-primary text-primary-foreground px-5 text-sm font-medium hover:bg-primary/80 transition-colors"
            >
              <ArrowRight className="size-4 mr-1.5" />
              {t("openTool")}
            </Link>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-10">
          <Link href="/tools/base64-encode" className="underline hover:text-foreground transition-colors">
            {t("fullGuide")}
          </Link>
        </p>
      </div>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/#tool` },
      { "@type": "ListItem", position: 3, name: "Base64 Encode Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Base64 Encode Text Online",
    description: "Encode any text or binary data to Base64 format using a free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the encoder tool",
        text: "Navigate to the Base64 Encode tool page on Base64 Shuttle. No account or installation is required.",
        url: `${BASE_URL}/tools/base64-encode`,
      },
      {
        "@type": "HowToStep",
        name: "Paste or type your input",
        text: "Enter the text, code snippet, or raw data you want to encode into the input field. The tool accepts UTF-8 characters, special symbols, and multi-line content.",
      },
      {
        "@type": "HowToStep",
        name: "Click the Encode button",
        text: "Press the Encode button to convert your input. The Base64-encoded result appears instantly in the output area.",
      },
      {
        "@type": "HowToStep",
        name: "Copy the encoded output",
        text: "Click the Copy button to save the Base64 string to your clipboard. You can now paste it into emails, APIs, configuration files, or any system that requires Base64-encoded data.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Base64 encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Base64 encoding is a method that converts binary or text data into a set of 64 ASCII characters. It is commonly used to safely transmit data over channels that only support text, such as email or JSON payloads.",
        },
      },
      {
        "@type": "Question",
        name: "Is Base64 encoding the same as encryption?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Base64 is not encryption. It is an encoding scheme that transforms data into a different format but does not provide any security or confidentiality. Anyone can decode Base64 data without a key.",
        },
      },
      {
        "@type": "Question",
        name: "Can I encode files to Base64?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can encode files such as images, PDFs, and documents to Base64. This is useful for embedding files directly into HTML, CSS, or JSON without hosting them separately.",
        },
      },
      {
        "@type": "Question",
        name: "Does Base64 encoding increase file size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Base64 encoding increases the data size by approximately 33%. This happens because every 3 bytes of binary data are represented by 4 ASCII characters in the encoded output.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Base64 encoder free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Base64 Shuttle is completely free with no usage limits. There is no signup, no watermark, and no hidden fees. All encoding happens in your browser for complete privacy.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe when using this tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All encoding is performed client-side in your browser. Your data never leaves your device, so there is zero risk of interception or data leakage.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Base64 Encode Online – Free Text & File Encoder Tool",
    description: "A comprehensive guide to Base64 encoding, including how it works, common use cases, and how to encode data online for free.",
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
    url: `${BASE_URL}/tools/base64-encode`,
    about: {
      "@type": "Thing",
      name: "Base64 Encoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Base64 Encode Online – Free Text &amp; File Encoder</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert any text, code snippet, or binary file to Base64 in seconds. Base64 Shuttle runs entirely in your browser, so your data stays private and never touches a server.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Base64 Encoding?</h2>
          <p className="mb-4">
            Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 printable ASCII characters. The character set includes uppercase letters (A–Z), lowercase letters (a–z), digits (0–9), and two additional symbols, typically &quot;+&quot; and &quot;/&quot;. A padding character &quot;=&quot; is used when the input length is not a multiple of three bytes.
          </p>
          <p className="mb-4">
            The primary purpose of Base64 encoding is to safely transport binary data across systems that only handle text. For example, email attachments, JSON web tokens, and data URIs all rely on Base64 to embed binary content inside text-based formats. When you encode an image to Base64, you can embed it directly in an HTML document using a data URI, eliminating the need for a separate HTTP request.
          </p>
          <p className="mb-4">
            Base64 encoding is defined in RFC 4648 and is used extensively in web development, API integrations, and data serialization. It is important to note that Base64 is not an encryption method—it does not protect data from being read. It simply converts data into a safe transport format.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Use the Base64 Encoder</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the tool:</strong> Navigate to the Base64 Encode page on Base64 Shuttle. No installation or account creation is needed.
            </li>
            <li>
              <strong>Enter your data:</strong> Paste or type the text you want to encode. You can also drag and drop a file into the input area to encode file contents.
            </li>
            <li>
              <strong>Click Encode:</strong> Press the Encode button. The tool processes your input instantly and displays the Base64-encoded string in the output field.
            </li>
            <li>
              <strong>Copy the result:</strong> Click the Copy button to save the encoded string to your clipboard. Use it in your API requests, configuration files, or anywhere else you need Base64 data.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Client-side processing:</strong> All encoding happens in your browser. Your data never leaves your device, ensuring complete privacy.</li>
            <li><strong>Unlimited usage:</strong> Encode as many strings or files as you want with no daily limits or rate restrictions.</li>
            <li><strong>UTF-8 support:</strong> The encoder handles Unicode characters, emojis, and multi-byte sequences correctly.</li>
            <li><strong>File encoding:</strong> Drag and drop any file—images, PDFs, documents—and get a valid Base64 string ready for embedding.</li>
            <li><strong>Instant copy:</strong> One-click copy to clipboard saves time when working with large encoded strings.</li>
            <li><strong>No signup required:</strong> Start encoding immediately without creating an account or providing an email address.</li>
            <li><strong>Works offline:</strong> Once the page is loaded, the encoder works without an internet connection because everything runs locally.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for Base64 Encoding</h2>
          <p className="mb-4">
            <strong>Embedding images in HTML:</strong> Instead of linking to an external image file, you can encode the image to Base64 and embed it directly in your HTML using a data URI. This reduces HTTP requests and can improve page load performance for small images.
          </p>
          <p className="mb-4">
            <strong>Email attachments:</strong> The MIME standard uses Base64 to encode email attachments. When you send a file via email, the email client automatically Base64-encodes the file so it can travel through text-based SMTP servers.
          </p>
          <p className="mb-4">
            <strong>API authentication:</strong> Many APIs use Base64 encoding for Basic Authentication headers. The format &quot;username:password&quot; is Base64-encoded and passed in the Authorization header of HTTP requests.
          </p>
          <p className="mb-4">
            <strong>Storing binary data in JSON:</strong> JSON does not natively support binary data. Base64 encoding lets you represent binary content as a JSON string, making it easy to transmit files or images through REST APIs.
          </p>
          <p className="mb-4">
            <strong>Data URIs in CSS:</strong> Web developers frequently use Base64-encoded images in CSS background properties. This technique inlines the image data directly in the stylesheet, reducing the number of network requests.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Base64 Encoding vs. Other Encoding Schemes</h2>
          <p className="mb-4">
            While Base64 is the most popular binary-to-text encoding, there are alternatives worth knowing. Base32 uses a smaller character set and is case-insensitive, making it useful in systems where case is not preserved. Hexadecimal encoding represents each byte as two hex digits, which is simpler but produces longer output. URL encoding replaces unsafe characters with percent-encoded sequences and is designed specifically for URLs.
          </p>
          <p className="mb-4">
            Base64 strikes a good balance between compactness and compatibility. Its 33% size overhead is acceptable for most applications, and its wide support across programming languages and platforms makes it the default choice for encoding binary data in text formats.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is Base64 encoding?</h3>
                <p className="text-muted-foreground">Base64 encoding is a method that converts binary or text data into a set of 64 ASCII characters. It is commonly used to safely transmit data over channels that only support text, such as email or JSON payloads.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is Base64 encoding the same as encryption?</h3>
                <p className="text-muted-foreground">No, Base64 is not encryption. It is an encoding scheme that transforms data into a different format but does not provide any security or confidentiality. Anyone can decode Base64 data without a key.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I encode files to Base64?</h3>
                <p className="text-muted-foreground">Yes, you can encode files such as images, PDFs, and documents to Base64. This is useful for embedding files directly into HTML, CSS, or JSON without hosting them separately.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Does Base64 encoding increase file size?</h3>
                <p className="text-muted-foreground">Yes, Base64 encoding increases the data size by approximately 33%. This happens because every 3 bytes of binary data are represented by 4 ASCII characters in the encoded output.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is this Base64 encoder free to use?</h3>
                <p className="text-muted-foreground">Yes, Base64 Shuttle is completely free with no usage limits. There is no signup, no watermark, and no hidden fees. All encoding happens in your browser for complete privacy.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is my data safe when using this tool?</h3>
                <p className="text-muted-foreground">Absolutely. All encoding is performed client-side in your browser. Your data never leaves your device, so there is zero risk of interception or data leakage.</p>
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
