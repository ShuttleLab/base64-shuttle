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
    title: "URL Encode Online – Free URL Encoding & Percent-Encoding Tool",
    description: "Encode strings for safe use in URLs with free online URL encoder. Convert special characters to percent-encoded format instantly in your browser.",
    alternates: {
      canonical: locale === "en" ? "/tools/url-encode" : `/${locale}/tools/url-encode`,
      languages: { en: "/tools/url-encode", "x-default": "/tools/url-encode" },
    },
  };
}

export default async function UrlEncodePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/#tool` },
      { "@type": "ListItem", position: 3, name: "URL Encode Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to URL Encode a String Online",
    description: "Encode text for safe use in URLs using a free online percent-encoding tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the URL encoder",
        text: "Navigate to the URL Encode page on Base64 Shuttle. The tool requires no installation or account.",
        url: `${BASE_URL}/tools/url-encode`,
      },
      {
        "@type": "HowToStep",
        name: "Enter the text to encode",
        text: "Type or paste the string you want to encode. This can be a query parameter value, a path segment, or any text containing special characters.",
      },
      {
        "@type": "HowToStep",
        name: "Click Encode",
        text: "Press the Encode button. The tool converts all unsafe characters to their percent-encoded equivalents (e.g., spaces become %20).",
      },
      {
        "@type": "HowToStep",
        name: "Copy the encoded URL",
        text: "Click the Copy button to save the percent-encoded string to your clipboard. Paste it into your URL, API call, or browser address bar.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is URL encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "URL encoding, also called percent-encoding, replaces unsafe or reserved characters in a URL with a percent sign followed by two hexadecimal digits. For example, a space becomes %20 and an ampersand becomes %26.",
        },
      },
      {
        "@type": "Question",
        name: "Why do I need to URL encode my strings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "URLs can only contain a limited set of ASCII characters. Characters like spaces, question marks, and Unicode letters are not allowed in certain parts of a URL. Encoding these characters ensures the URL is valid and can be processed correctly by browsers and servers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between URL encoding and URL escaping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are the same thing. URL encoding and URL escaping both refer to the process of replacing unsafe characters with percent-encoded sequences. The terms are used interchangeably in web development.",
        },
      },
      {
        "@type": "Question",
        name: "Should I encode the entire URL or just the query parameters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should typically encode only the values of query parameters and path segments, not the entire URL. Structural characters like &quot;://&quot;, &quot;?&quot;, &quot;=&quot;, and &quot;&amp;&quot; should remain unencoded because they define the URL structure.",
        },
      },
      {
        "@type": "Question",
        name: "Can I encode Unicode characters for URLs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Unicode characters are first encoded to UTF-8 bytes, and then each byte is percent-encoded. For example, the character &quot;é&quot; (UTF-8 bytes 0xC3 0xA9) becomes %C3%A9 in a URL.",
        },
      },
      {
        "@type": "Question",
        name: "Is URL encoding the same as URI encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, URL encoding and URI encoding refer to the same percent-encoding mechanism defined in RFC 3986. The terms are often used interchangeably in practice.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "URL Encode Online – Free URL Encoding & Percent-Encoding Tool",
    description: "A complete guide to URL encoding, including how percent-encoding works, when to use it, and how to encode strings for URLs online.",
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
    url: `${BASE_URL}/tools/url-encode`,
    about: {
      "@type": "Thing",
      name: "URL Encoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">URL Encode Online – Free Percent-Encoding Tool</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert special characters to URL-safe percent-encoded format in seconds. Base64 Shuttle encodes everything locally in your browser for fast, private results.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is URL Encoding?</h2>
          <p className="mb-4">
            URL encoding, formally known as percent-encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI). It replaces characters that are not allowed in a URL with a percent sign (%) followed by two hexadecimal digits representing the byte value. For example, a space character becomes %20, an ampersand (&amp;) becomes %26, and a forward slash (/) becomes %2F when it needs to be escaped.
          </p>
          <p className="mb-4">
            The URL specification (RFC 3986) defines which characters are safe to use directly in a URL and which must be encoded. Unreserved characters like letters, digits, hyphens, periods, underscores, and tildes do not need encoding. All other characters, including spaces, punctuation, and non-ASCII letters, must be percent-encoded to create a valid URL.
          </p>
          <p className="mb-4">
            URL encoding is essential when constructing URLs dynamically, especially when user input is included in query parameters. Without proper encoding, special characters in the input could break the URL structure or cause unexpected behavior on the server.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to URL Encode a String</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the encoder:</strong> Go to the URL Encode page on Base64 Shuttle. No signup or download is needed.
            </li>
            <li>
              <strong>Enter your text:</strong> Type or paste the string you want to encode. This could be a search query, a form field value, or any text with special characters.
            </li>
            <li>
              <strong>Click Encode:</strong> The tool instantly converts all unsafe characters to their percent-encoded equivalents. The result is a valid URL-safe string.
            </li>
            <li>
              <strong>Copy the output:</strong> Click the Copy button to save the encoded string to your clipboard. Paste it directly into your URL query parameters, API requests, or form submissions.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standards-compliant:</strong> Follows RFC 3986 percent-encoding rules for full compatibility with browsers, servers, and APIs.</li>
            <li><strong>Client-side encoding:</strong> All processing happens in your browser. Your data is never sent to a server.</li>
            <li><strong>Unicode support:</strong> Correctly encodes multi-byte UTF-8 characters, including Chinese, Japanese, Arabic, and emoji characters.</li>
            <li><strong>Batch encoding:</strong> Encode multiple strings or an entire URL at once without restrictions.</li>
            <li><strong>Instant results:</strong> The encoder produces results in milliseconds, regardless of input length.</li>
            <li><strong>Free and unlimited:</strong> Use the tool as many times as you want with no usage caps or hidden costs.</li>
            <li><strong>Mobile-friendly:</strong> The responsive design works on any device, from desktop monitors to phone screens.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for URL Encoding</h2>
          <p className="mb-4">
            <strong>Query parameter construction:</strong> When building URLs with query strings, the parameter values must be encoded. For example, a search for &quot;café &amp; restaurant&quot; must be encoded as &quot;caf%C3%A9%20%26%20restaurant&quot; to be included safely in a URL.
          </p>
          <p className="mb-4">
            <strong>Form submissions:</strong> HTML forms with the &quot;application/x-www-form-urlencoded&quot; content type automatically encode field values. Understanding URL encoding helps you debug form submissions and build custom form handlers.
          </p>
          <p className="mb-4">
            <strong>API development:</strong> REST APIs often accept parameters in the URL. Proper encoding ensures that special characters in request parameters do not break the API call or cause the server to misinterpret the data.
          </p>
          <p className="mb-4">
            <strong>Web scraping:</strong> When constructing URLs for web scraping, you need to encode search terms and filter values to match the format expected by the target website.
          </p>
          <p className="mb-4">
            <strong>Email links:</strong> The &quot;mailto:&quot; URL scheme uses URL encoding for the subject and body parameters. Encoding ensures that line breaks and special characters in the email content are preserved correctly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">URL Encoding vs. Base64 Encoding</h2>
          <p className="mb-4">
            URL encoding and Base64 encoding serve different purposes. URL encoding is designed specifically for URLs—it replaces only the characters that are unsafe in URL context while keeping the output human-readable where possible. Base64 encoding converts all data into a fixed set of 64 characters and is used for embedding binary data in text formats like JSON or HTML.
          </p>
          <p className="mb-4">
            Use URL encoding when you need to include text in a URL. Use Base64 when you need to embed binary data in a text-based format. They are not interchangeable, and using the wrong one can lead to broken URLs or corrupted data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is URL encoding?</h3>
                <p className="text-muted-foreground">URL encoding, also called percent-encoding, replaces unsafe or reserved characters in a URL with a percent sign followed by two hexadecimal digits. For example, a space becomes %20 and an ampersand becomes %26.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why do I need to URL encode my strings?</h3>
                <p className="text-muted-foreground">URLs can only contain a limited set of ASCII characters. Characters like spaces, question marks, and Unicode letters are not allowed in certain parts of a URL. Encoding these characters ensures the URL is valid and can be processed correctly by browsers and servers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the difference between URL encoding and URL escaping?</h3>
                <p className="text-muted-foreground">They are the same thing. URL encoding and URL escaping both refer to the process of replacing unsafe characters with percent-encoded sequences. The terms are used interchangeably in web development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Should I encode the entire URL or just the query parameters?</h3>
                <p className="text-muted-foreground">You should typically encode only the values of query parameters and path segments, not the entire URL. Structural characters like &quot;://&quot;, &quot;?&quot;, &quot;=&quot;, and &quot;&amp;&quot; should remain unencoded because they define the URL structure.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I encode Unicode characters for URLs?</h3>
                <p className="text-muted-foreground">Yes, Unicode characters are first encoded to UTF-8 bytes, and then each byte is percent-encoded. For example, the character &quot;é&quot; (UTF-8 bytes 0xC3 0xA9) becomes %C3%A9 in a URL.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is URL encoding the same as URI encoding?</h3>
                <p className="text-muted-foreground">Yes, URL encoding and URI encoding refer to the same percent-encoding mechanism defined in RFC 3986. The terms are often used interchangeably in practice.</p>
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
