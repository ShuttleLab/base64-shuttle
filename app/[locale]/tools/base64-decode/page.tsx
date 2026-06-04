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
      title: "Base64 解码器（在线）– 免费 Base64 字符串解码工具",
      description: "一键把 Base64 字符串解码还原为纯文本。免费在线 Base64 解码器，全程在浏览器中运行，无需上传数据。",
      alternates: {
        canonical: `/${locale}/tools/base64-decode`,
        languages: { en: "/tools/base64-decode", "x-default": "/tools/base64-decode" },
      },
    };
  }
  return {
    title: "Base64 Decode Online – Free Base64 String Decoder Tool",
    description: "Decode Base64 strings back to plain text instantly. Free online Base64 decoder that runs entirely in your browser with no data upload.",
    alternates: {
      canonical: locale === "en" ? "/tools/base64-decode" : `/${locale}/tools/base64-decode`,
      languages: { en: "/tools/base64-decode", "x-default": "/tools/base64-decode" },
    },
  };
}

export default async function Base64DecodePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{t("base64Decode.title")}</h1>
        <p className="text-lg text-muted-foreground mb-10">{t("base64Decode.subtitle")}</p>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-base font-medium">在首页打开 Base64 解码工具，立即开始解码。</p>
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
          <Link href="/tools/base64-decode" className="underline hover:text-foreground transition-colors">
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
      { "@type": "ListItem", position: 3, name: "Base64 Decode Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Decode a Base64 String Online",
    description: "Decode Base64-encoded strings back to readable text using a free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the decoder",
        text: "Go to the Base64 Decode page on Base64 Shuttle. No login or installation is needed.",
        url: `${BASE_URL}/tools/base64-decode`,
      },
      {
        "@type": "HowToStep",
        name: "Paste the Base64 string",
        text: "Copy the Base64-encoded string from your source and paste it into the input field. The tool accepts strings with or without padding characters.",
      },
      {
        "@type": "HowToStep",
        name: "Click Decode",
        text: "Press the Decode button to convert the Base64 string back to its original text. The decoded output appears immediately below the input.",
      },
      {
        "@type": "HowToStep",
        name: "Copy or download the result",
        text: "Click the Copy button to save the decoded text to your clipboard, or download it as a file if the output is large.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Base64 decoding do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Base64 decoding reverses the Base64 encoding process, converting an ASCII string back into its original binary or text form. It reads groups of four Base64 characters and maps them back to three bytes of data.",
        },
      },
      {
        "@type": "Question",
        name: "Can I decode Base64 that contains special characters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the decoder handles UTF-8 characters, emojis, and multi-byte sequences correctly. The output will faithfully reproduce the original text, including any special symbols or non-Latin characters.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my Base64 string end with equals signs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The equals sign (&quot;=&quot;) is a padding character used when the input data length is not a multiple of three bytes. One or two equals signs may appear at the end. They are required for proper decoding.",
        },
      },
      {
        "@type": "Question",
        name: "Can I decode Base64-encoded files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you have a Base64 string that represents a file (such as an image or PDF), the decoder can reconstruct the binary file. You can then download the resulting file to your device.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I enter an invalid Base64 string?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The decoder will display an error message if the input contains invalid characters or incorrect padding. Valid Base64 strings only contain A–Z, a–z, 0–9, +, /, and = characters.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a limit on the size of data I can decode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Base64 Shuttle handles large strings efficiently in your browser. However, extremely large strings (over 100 MB) may be limited by your device memory since all processing happens client-side.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Base64 Decode Online – Free Base64 String Decoder Tool",
    description: "Learn how Base64 decoding works, when to use it, and how to decode Base64 strings online for free with complete privacy.",
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
    url: `${BASE_URL}/tools/base64-decode`,
    about: {
      "@type": "Thing",
      name: "Base64 Decoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Base64 Decode Online – Free Base64 String Decoder</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Instantly convert Base64-encoded strings back to plain text. Base64 Shuttle decodes everything in your browser, keeping your data completely private.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is Base64 Decoding?</h2>
          <p className="mb-4">
            Base64 decoding is the reverse process of Base64 encoding. It takes a Base64-encoded ASCII string and reconstructs the original binary or text data. Each group of four Base64 characters maps back to three bytes of the original data. The decoder uses the standard Base64 alphabet defined in RFC 4648, which includes 64 characters plus the &quot;=&quot; padding character.
          </p>
          <p className="mb-4">
            When data is encoded to Base64, it is transformed into a safe, text-only representation. Decoding reverses this transformation, restoring the original content. This is essential when you receive Base64 data from APIs, email systems, configuration files, or data URIs and need to read or use the underlying content.
          </p>
          <p className="mb-4">
            Base64 decoding is used in many scenarios: reading API responses that contain Base64 payloads, extracting files from data URIs, debugging JWT tokens, inspecting email attachments, and recovering data stored in Base64 format in databases or configuration files.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Decode a Base64 String</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the decoder:</strong> Navigate to the Base64 Decode page on Base64 Shuttle. The tool works instantly without any setup.
            </li>
            <li>
              <strong>Paste your Base64 string:</strong> Copy the encoded string from your source code, API response, or document and paste it into the input field.
            </li>
            <li>
              <strong>Click Decode:</strong> Press the Decode button. The tool processes the string and displays the original text or binary data in the output area.
            </li>
            <li>
              <strong>Use the decoded output:</strong> Copy the decoded text to your clipboard or download it as a file. The output preserves the exact original data, including line breaks and special characters.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Complete privacy:</strong> Decoding happens entirely in your browser. No data is sent to any server, so your Base64 strings remain confidential.</li>
            <li><strong>Instant results:</strong> The decoder processes strings of any length in milliseconds, with no waiting or queue times.</li>
            <li><strong>UTF-8 and Unicode support:</strong> Correctly decodes strings containing international characters, emojis, and multi-byte sequences.</li>
            <li><strong>File reconstruction:</strong> Decode Base64 strings that represent files and download the reconstructed binary directly.</li>
            <li><strong>Error detection:</strong> The tool identifies invalid characters or malformed Base64 and provides clear error messages.</li>
            <li><strong>No size limits:</strong> Decode small strings or large payloads without restrictions. The only limit is your device memory.</li>
            <li><strong>Works on any device:</strong> The decoder runs on desktops, tablets, and phones with a responsive interface.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for Base64 Decoding</h2>
          <p className="mb-4">
            <strong>API response inspection:</strong> Many REST APIs return binary data such as images, PDFs, or documents as Base64-encoded strings in JSON responses. Decoding these strings lets you view or save the actual files.
          </p>
          <p className="mb-4">
            <strong>Data URI extraction:</strong> HTML and CSS often use data URIs to embed images or fonts inline. A data URI starts with a prefix like &quot;data:image/png;base64,&quot; followed by the Base64 data. Decoding the data portion recovers the original file.
          </p>
          <p className="mb-4">
            <strong>Email attachment viewing:</strong> Email clients encode attachments in Base64 for transmission. If you need to extract an attachment from raw email source, decoding the Base64 block gives you the original file.
          </p>
          <p className="mb-4">
            <strong>Configuration file parsing:</strong> Some configuration systems store sensitive values like certificates or keys in Base64 format. Decoding these values reveals the actual certificate or key content.
          </p>
          <p className="mb-4">
            <strong>Debugging and development:</strong> Developers frequently encounter Base64 strings in logs, network traffic, and serialized data. A quick decode helps verify what data is being transmitted without writing custom scripts.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Understanding Base64 Padding</h2>
          <p className="mb-4">
            Base64 encoding processes data in groups of three bytes. When the input data length is not divisible by three, padding characters are added to the end of the encoded string. A single &quot;=&quot; means one byte of padding was needed, while &quot;==&quot; means two bytes were required. The decoder automatically handles padding and will work correctly whether or not the padding characters are present.
          </p>
          <p className="mb-4">
            Some systems strip the padding characters for brevity (known as &quot;padding-less Base64&quot;). This decoder accepts both padded and unpadded strings, so you do not need to worry about adding padding before decoding.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What does Base64 decoding do?</h3>
                <p className="text-muted-foreground">Base64 decoding reverses the Base64 encoding process, converting an ASCII string back into its original binary or text form. It reads groups of four Base64 characters and maps them back to three bytes of data.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I decode Base64 that contains special characters?</h3>
                <p className="text-muted-foreground">Yes, the decoder handles UTF-8 characters, emojis, and multi-byte sequences correctly. The output will faithfully reproduce the original text, including any special symbols or non-Latin characters.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why does my Base64 string end with equals signs?</h3>
                <p className="text-muted-foreground">The equals sign (&quot;=&quot;) is a padding character used when the input data length is not a multiple of three bytes. One or two equals signs may appear at the end. They are required for proper decoding.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I decode Base64-encoded files?</h3>
                <p className="text-muted-foreground">Yes, if you have a Base64 string that represents a file (such as an image or PDF), the decoder can reconstruct the binary file. You can then download the resulting file to your device.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What happens if I enter an invalid Base64 string?</h3>
                <p className="text-muted-foreground">The decoder will display an error message if the input contains invalid characters or incorrect padding. Valid Base64 strings only contain A–Z, a–z, 0–9, +, /, and = characters.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is there a limit on the size of data I can decode?</h3>
                <p className="text-muted-foreground">Base64 Shuttle handles large strings efficiently in your browser. However, extremely large strings (over 100 MB) may be limited by your device memory since all processing happens client-side.</p>
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
