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
    title: "HTML Encode Online – Free HTML Entity Encoder & Escaper Tool",
    description: "Encode text to HTML entities instantly. Convert special characters like <, >, &, and quotes to their HTML-safe equivalents with this free online tool.",
    alternates: {
      canonical: locale === "en" ? "/tools/html-encode" : `/${locale}/tools/html-encode`,
      languages: { en: "/tools/html-encode", "x-default": "/tools/html-encode" },
    },
  };
}

export default async function HtmlEncodePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/#tool` },
      { "@type": "ListItem", position: 3, name: "HTML Encode Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to HTML Encode Text Online",
    description: "Encode special characters into HTML entities using a free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the HTML encoder",
        text: "Navigate to the HTML Encode page on Base64 Shuttle. No installation or registration is required.",
        url: `${BASE_URL}/tools/html-encode`,
      },
      {
        "@type": "HowToStep",
        name: "Paste your text or HTML",
        text: "Enter the text or raw HTML content you want to encode. The tool accepts any UTF-8 text, including code snippets and markup.",
      },
      {
        "@type": "HowToStep",
        name: "Click Encode",
        text: "Press the Encode button to convert all special characters to their HTML entity equivalents. For example, &lt; becomes &amp;lt; and &amp; becomes &amp;amp;.",
      },
      {
        "@type": "HowToStep",
        name: "Copy the encoded output",
        text: "Click the Copy button to save the HTML-encoded string. Paste it into your HTML templates, CMS, or anywhere you need to safely display code in a browser.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is HTML encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HTML encoding replaces special characters with their corresponding HTML entities. For example, the less-than sign (&lt;) becomes &amp;lt; and the ampersand (&amp;) becomes &amp;amp;. This prevents browsers from interpreting these characters as HTML markup.",
        },
      },
      {
        "@type": "Question",
        name: "Why is HTML encoding important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HTML encoding is critical for preventing cross-site scripting (XSS) attacks. When user-generated content is displayed on a web page without encoding, malicious scripts can be injected and executed in other users' browsers.",
        },
      },
      {
        "@type": "Question",
        name: "What characters need to be HTML encoded?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The five characters that must always be encoded are: less-than (&lt;), greater-than (&gt;), ampersand (&amp;), double quote (&quot;), and single quote ('). These characters have special meaning in HTML and can break markup or create security vulnerabilities if left unencoded.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between HTML encoding and URL encoding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HTML encoding replaces characters with HTML entities (like &amp;lt;) for safe display in web pages. URL encoding replaces characters with percent-encoded sequences (like %3C) for safe inclusion in URLs. They serve different purposes and are not interchangeable.",
        },
      },
      {
        "@type": "Question",
        name: "Can I encode entire HTML documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can encode entire HTML documents. The result will display the raw HTML code as visible text on a web page instead of rendering it as formatted content. This is useful for code tutorials and documentation.",
        },
      },
      {
        "@type": "Question",
        name: "Does HTML encoding affect performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HTML encoding has negligible performance impact. The encoded strings are slightly longer than the originals, but the difference is insignificant for typical web content. The security benefits far outweigh the minimal size increase.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "HTML Encode Online – Free HTML Entity Encoder & Escaper Tool",
    description: "Learn how HTML encoding works, why it matters for web security, and how to encode special characters to HTML entities online for free.",
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
    url: `${BASE_URL}/tools/html-encode`,
    about: {
      "@type": "Thing",
      name: "HTML Encoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">HTML Encode Online – Free HTML Entity Encoder</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert special characters to HTML entities instantly. Protect your web pages from XSS attacks and safely display code snippets using this free browser-based encoder.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is HTML Encoding?</h2>
          <p className="mb-4">
            HTML encoding, also called HTML escaping, is the process of replacing reserved HTML characters with their corresponding entity names or numeric codes. This ensures that the browser renders these characters as visible text instead of interpreting them as HTML markup. The five critical characters that must always be encoded are: less-than (&lt;), greater-than (&gt;), ampersand (&amp;), double quote (&quot;), and single quote or apostrophe (&apos;).
          </p>
          <p className="mb-4">
            For example, if you want to display the literal text &lt;div class=&quot;box&quot;&gt; on a web page, you cannot simply write it in HTML because the browser will interpret it as a div element. Instead, you encode it as &amp;lt;div class=&amp;quot;box&amp;quot;&gt; so the browser displays the code as readable text.
          </p>
          <p className="mb-4">
            HTML encoding is defined in the HTML specification and uses named entities (like &amp;lt; for &lt;) or numeric character references (like &amp;#60; for &lt;). Both forms are equivalent and produce the same visual output in the browser.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to HTML Encode Text</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the encoder:</strong> Go to the HTML Encode page on Base64 Shuttle. The tool is ready to use immediately.
            </li>
            <li>
              <strong>Enter your content:</strong> Type or paste the text you want to encode. You can enter plain text, HTML code, or any content containing special characters.
            </li>
            <li>
              <strong>Click Encode:</strong> The tool replaces all reserved characters with their HTML entity equivalents. The encoded output appears instantly in the result area.
            </li>
            <li>
              <strong>Copy the encoded text:</strong> Click the Copy button to save the result to your clipboard. Paste it into your HTML templates, content management system, or code editor.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>XSS prevention:</strong> Encode user-generated content to prevent cross-site scripting attacks. The encoder converts all dangerous characters to safe HTML entities.</li>
            <li><strong>Client-side processing:</strong> All encoding happens in your browser. No data is uploaded to any server, keeping your content completely private.</li>
            <li><strong>Full Unicode support:</strong> Correctly handles international characters, symbols, and emojis. Non-ASCII characters are encoded using numeric character references.</li>
            <li><strong>Named and numeric entities:</strong> The encoder uses named entities where available (like &amp;amp;) and falls back to numeric references for other characters.</li>
            <li><strong>Code snippet display:</strong> Perfect for encoding HTML, CSS, and JavaScript code snippets so they display as text in tutorials and documentation.</li>
            <li><strong>No limitations:</strong> Encode unlimited amounts of text with no daily caps, file size restrictions, or rate limits.</li>
            <li><strong>Instant output:</strong> The encoder processes text in real time, producing results as fast as you can paste content.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for HTML Encoding</h2>
          <p className="mb-4">
            <strong>Preventing XSS attacks:</strong> Cross-site scripting (XSS) is one of the most common web security vulnerabilities. When user input is displayed on a web page without encoding, attackers can inject malicious scripts. HTML encoding converts these characters so they are displayed as text, not executed as code.
          </p>
          <p className="mb-4">
            <strong>Displaying code in tutorials:</strong> Technical blogs and documentation sites need to show HTML code examples. Without encoding, the browser would render the code as actual HTML elements. Encoding the examples ensures readers see the raw code as intended.
          </p>
          <p className="mb-4">
            <strong>Email template development:</strong> Email clients render HTML, so special characters in email content must be encoded to display correctly. This is especially important for subject lines and body text that contain symbols like &amp; or &lt;.
          </p>
          <p className="mb-4">
            <strong>CMS content editing:</strong> Content management systems often process text through HTML parsers. Encoding special characters ensures that your content is displayed exactly as you wrote it, without unexpected formatting or broken markup.
          </p>
          <p className="mb-4">
            <strong>JSON and API responses:</strong> When HTML content is included in JSON responses, special characters must be encoded to maintain valid JSON structure and prevent parsing errors on the client side.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">HTML Encoding and Web Security</h2>
          <p className="mb-4">
            HTML encoding is a fundamental defense against injection attacks. In an XSS attack, an attacker injects malicious JavaScript into a web page through user input fields, URL parameters, or stored data. When other users view the page, the injected script executes in their browsers, potentially stealing cookies, session tokens, or personal information.
          </p>
          <p className="mb-4">
            By encoding all user-generated content before displaying it, you ensure that any injected code is treated as plain text, not executable HTML. This is why modern web frameworks automatically encode output by default. However, when you need to manually handle content encoding, an online tool provides a quick and reliable solution.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is HTML encoding?</h3>
                <p className="text-muted-foreground">HTML encoding replaces special characters with their corresponding HTML entities. For example, the less-than sign (&lt;) becomes &amp;lt; and the ampersand (&amp;) becomes &amp;amp;. This prevents browsers from interpreting these characters as HTML markup.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why is HTML encoding important?</h3>
                <p className="text-muted-foreground">HTML encoding is critical for preventing cross-site scripting (XSS) attacks. When user-generated content is displayed on a web page without encoding, malicious scripts can be injected and executed in other users&apos; browsers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What characters need to be HTML encoded?</h3>
                <p className="text-muted-foreground">The five characters that must always be encoded are: less-than (&lt;), greater-than (&gt;), ampersand (&amp;), double quote (&quot;), and single quote (&apos;). These characters have special meaning in HTML and can break markup or create security vulnerabilities if left unencoded.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the difference between HTML encoding and URL encoding?</h3>
                <p className="text-muted-foreground">HTML encoding replaces characters with HTML entities (like &amp;lt;) for safe display in web pages. URL encoding replaces characters with percent-encoded sequences (like %3C) for safe inclusion in URLs. They serve different purposes and are not interchangeable.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I encode entire HTML documents?</h3>
                <p className="text-muted-foreground">Yes, you can encode entire HTML documents. The result will display the raw HTML code as visible text on a web page instead of rendering it as formatted content. This is useful for code tutorials and documentation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Does HTML encoding affect performance?</h3>
                <p className="text-muted-foreground">HTML encoding has negligible performance impact. The encoded strings are slightly longer than the originals, but the difference is insignificant for typical web content. The security benefits far outweigh the minimal size increase.</p>
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
