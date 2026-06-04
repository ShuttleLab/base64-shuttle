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
      title: "Unicode 转换器（在线）– 免费 Unicode 字符编码与解码工具",
      description: "一键把文本转换为 Unicode 码点、HTML 实体和转义序列。免费在线 Unicode 转换器，全程在浏览器中运行。",
      alternates: {
        canonical: `/${locale}/tools/unicode-converter`,
        languages: { en: "/tools/unicode-converter", "x-default": "/tools/unicode-converter" },
      },
    };
  }
  return {
    title: "Unicode Converter Online – Free Unicode Character Encoder & Decoder",
    description: "Convert text to Unicode code points, HTML entities, and escape sequences instantly. Free online Unicode converter that runs entirely in your browser.",
    alternates: {
      canonical: locale === "en" ? "/tools/unicode-converter" : `/${locale}/tools/unicode-converter`,
      languages: { en: "/tools/unicode-converter", "x-default": "/tools/unicode-converter" },
    },
  };
}

export default async function UnicodeConverterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{t("unicodeConverter.title")}</h1>
        <p className="text-lg text-muted-foreground mb-10">{t("unicodeConverter.subtitle")}</p>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-base font-medium">在首页打开 Unicode 转换工具，立即开始转换。</p>
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
          <Link href="/tools/unicode-converter" className="underline hover:text-foreground transition-colors">
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
      { "@type": "ListItem", position: 3, name: "Unicode Converter Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert Text to Unicode Online",
    description: "Convert text to Unicode code points and escape sequences using a free online converter.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the Unicode converter",
        text: "Navigate to the Unicode Converter page on Base64 Shuttle. No installation or registration is needed.",
        url: `${BASE_URL}/tools/unicode-converter`,
      },
      {
        "@type": "HowToStep",
        name: "Enter your text",
        text: "Type or paste the text you want to convert. The converter accepts any Unicode characters, including emojis, CJK characters, and symbols.",
      },
      {
        "@type": "HowToStep",
        name: "Select the output format",
        text: "Choose your desired output format: Unicode code points (U+XXXX), HTML entities (&amp;#XXXX;), JavaScript escape sequences (\\uXXXX), or CSS escapes.",
      },
      {
        "@type": "HowToStep",
        name: "Click Convert",
        text: "Press the Convert button to transform each character into its Unicode representation in the selected format.",
      },
      {
        "@type": "HowToStep",
        name: "Copy the output",
        text: "Click the Copy button to save the converted string to your clipboard. Paste it into your code, HTML, or any application that needs Unicode escape sequences.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Unicode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unicode is a universal character encoding standard that assigns a unique number (code point) to every character in every writing system, plus symbols, punctuation, and emojis. It covers over 149,000 characters from more than 150 scripts.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Unicode code point?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Unicode code point is a unique numerical identifier for a character in the Unicode standard. It is written as U+XXXX, where XXXX is a hexadecimal number. For example, the code point for the letter &quot;A&quot; is U+0041.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Unicode and UTF-8?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unicode defines the set of characters and their code points. UTF-8 is an encoding that maps those code points to byte sequences for storage and transmission. UTF-8 uses 1 to 4 bytes per character and is backward-compatible with ASCII.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use Unicode escape sequences?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use Unicode escapes when you need to include characters that cannot be typed directly, when your file encoding does not support certain characters, or when you want to ensure cross-platform compatibility. They are common in JavaScript, CSS, Java, and HTML.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert emojis to Unicode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the converter handles emojis and other supplementary characters. Emojis are in the supplementary Unicode planes (above U+FFFF) and are represented using surrogate pairs in JavaScript or full code points in HTML and CSS.",
        },
      },
      {
        "@type": "Question",
        name: "What are HTML entities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HTML entities are special strings that represent characters in HTML. They start with &amp; and end with a semicolon. Numeric entities like &amp;#8364; represent the euro sign (€) using its Unicode code point. Named entities like &amp;amp; use predefined names for common characters.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Unicode Converter Online – Free Unicode Character Encoder & Decoder",
    description: "A comprehensive guide to Unicode encoding, code points, escape sequences, and how to convert text to various Unicode formats online.",
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
    url: `${BASE_URL}/tools/unicode-converter`,
    about: {
      "@type": "Thing",
      name: "Unicode Conversion",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Unicode Converter Online – Free Character Encoder &amp; Decoder</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert any text to Unicode code points, HTML entities, or escape sequences instantly. Base64 Shuttle processes everything in your browser for fast, private results.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Unicode?</h2>
          <p className="mb-4">
            Unicode is the universal character encoding standard that enables computers to consistently represent and manipulate text from any writing system in the world. It assigns a unique number, called a code point, to every character—whether it is a Latin letter, a Chinese ideograph, a mathematical symbol, or an emoji. The Unicode Standard currently defines over 149,000 characters covering more than 150 scripts.
          </p>
          <p className="mb-4">
            Before Unicode, computers used competing encoding systems like ASCII, ISO 8859, and Shift-JIS, each covering only a limited set of characters. This caused compatibility problems when text was exchanged between systems using different encodings. Unicode solved this by providing a single, universal set of characters that all systems can use.
          </p>
          <p className="mb-4">
            Unicode code points are written in the format U+XXXX, where XXXX is a hexadecimal number. The Basic Multilingual Plane (BMP) contains code points from U+0000 to U+FFFF and covers most commonly used characters. Supplementary planes (U+10000 and above) contain additional scripts, historic writing systems, and emojis.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Convert Text to Unicode</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the converter:</strong> Navigate to the Unicode Converter page on Base64 Shuttle. The tool is ready to use immediately.
            </li>
            <li>
              <strong>Enter your text:</strong> Type or paste the text containing the characters you want to convert. The converter accepts any Unicode character, including emojis and symbols.
            </li>
            <li>
              <strong>Choose the output format:</strong> Select whether you want Unicode code points (U+XXXX), HTML entities (&amp;#XXXX;), JavaScript escapes (\\uXXXX), or another format.
            </li>
            <li>
              <strong>Click Convert:</strong> The tool transforms each character into its Unicode representation in the selected format. The result appears instantly.
            </li>
            <li>
              <strong>Copy the output:</strong> Click the Copy button to save the converted string. Use it in your source code, HTML documents, or configuration files.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Multiple output formats:</strong> Convert to Unicode code points, HTML numeric entities, JavaScript escape sequences, CSS escapes, and more.</li>
            <li><strong>Full Unicode support:</strong> Handles all Unicode planes, including supplementary characters like emojis, historic scripts, and mathematical symbols.</li>
            <li><strong>Client-side processing:</strong> All conversion happens in your browser. Your text is never sent to any server.</li>
            <li><strong>Bidirectional conversion:</strong> Convert text to Unicode escapes or paste Unicode escapes to decode them back to readable text.</li>
            <li><strong>Real-time output:</strong> The converter produces results instantly as you type or paste, with no delay or loading time.</li>
            <li><strong>UTF-8 byte display:</strong> Optionally view the UTF-8 byte representation of each character alongside its code point.</li>
            <li><strong>Free and unlimited:</strong> Convert as much text as you want with no usage limits, watermarks, or hidden costs.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for Unicode Conversion</h2>
          <p className="mb-4">
            <strong>JavaScript and web development:</strong> JavaScript uses \\uXXXX escape sequences to represent Unicode characters in string literals. This is essential when you need to include characters that cannot be typed on your keyboard or when your source file encoding does not support certain characters.
          </p>
          <p className="mb-4">
            <strong>HTML entity encoding:</strong> HTML documents use numeric character references (&amp;#XXXX;) to display special characters. When you need to show a copyright symbol, a non-breaking space, or a character from another script, converting it to an HTML entity ensures it displays correctly in all browsers.
          </p>
          <p className="mb-4">
            <strong>Internationalization (i18n):</strong> When building applications that support multiple languages, you often need to work with Unicode escape sequences in resource files, configuration files, and translation strings. The converter helps you prepare these strings correctly.
          </p>
          <p className="mb-4">
            <strong>Emoji integration:</strong> Emojis are Unicode characters in the supplementary planes. Converting emojis to their code point values helps you include them programmatically in applications, especially when the development environment does not support emoji input directly.
          </p>
          <p className="mb-4">
            <strong>Data analysis and debugging:</strong> When debugging text processing issues, knowing the exact Unicode code points of characters helps identify invisible characters, homoglyphs (characters that look similar but have different code points), and encoding errors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Unicode Encoding Formats Explained</h2>
          <p className="mb-4">
            <strong>Unicode code points (U+XXXX):</strong> The standard notation for Unicode characters. U+0041 represents &quot;A&quot;, U+4E2D represents the Chinese character &quot;中&quot;, and U+1F600 represents the grinning face emoji. This format is used in documentation, specifications, and academic contexts.
          </p>
          <p className="mb-4">
            <strong>HTML entities (&amp;#XXXX;):</strong> Numeric character references used in HTML. The decimal code point is placed between &amp;# and ;. For example, &amp;#8364; displays the euro sign (€). You can also use hexadecimal with &amp;#x prefix: &amp;#x20AC;.
          </p>
          <p className="mb-4">
            <strong>JavaScript escapes (\\uXXXX):</strong> The \\u prefix followed by four hex digits in JavaScript string literals. For characters above U+FFFF, JavaScript uses surrogate pairs: \\uD83D\\uDE00 for the grinning face emoji.
          </p>
          <p className="mb-4">
            <strong>CSS escapes (\\XXXX):</strong> CSS uses a backslash followed by the hex code point. For example, \\0041 represents &quot;A&quot;. A space or hex digit terminator is needed after the escape sequence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is Unicode?</h3>
                <p className="text-muted-foreground">Unicode is a universal character encoding standard that assigns a unique number (code point) to every character in every writing system, plus symbols, punctuation, and emojis. It covers over 149,000 characters from more than 150 scripts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is a Unicode code point?</h3>
                <p className="text-muted-foreground">A Unicode code point is a unique numerical identifier for a character in the Unicode standard. It is written as U+XXXX, where XXXX is a hexadecimal number. For example, the code point for the letter &quot;A&quot; is U+0041.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the difference between Unicode and UTF-8?</h3>
                <p className="text-muted-foreground">Unicode defines the set of characters and their code points. UTF-8 is an encoding that maps those code points to byte sequences for storage and transmission. UTF-8 uses 1 to 4 bytes per character and is backward-compatible with ASCII.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">When should I use Unicode escape sequences?</h3>
                <p className="text-muted-foreground">Use Unicode escapes when you need to include characters that cannot be typed directly, when your file encoding does not support certain characters, or when you want to ensure cross-platform compatibility. They are common in JavaScript, CSS, Java, and HTML.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I convert emojis to Unicode?</h3>
                <p className="text-muted-foreground">Yes, the converter handles emojis and other supplementary characters. Emojis are in the supplementary Unicode planes (above U+FFFF) and are represented using surrogate pairs in JavaScript or full code points in HTML and CSS.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What are HTML entities?</h3>
                <p className="text-muted-foreground">HTML entities are special strings that represent characters in HTML. They start with &amp; and end with a semicolon. Numeric entities like &amp;#8364; represent the euro sign (€) using its Unicode code point. Named entities like &amp;amp; use predefined names for common characters.</p>
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
