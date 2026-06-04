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
    title: "JWT Decoder Online – Free JSON Web Token Decoder & Inspector",
    description: "Decode and inspect JWT tokens online for free. View the header, payload, and signature of any JSON Web Token instantly in your browser.",
    alternates: {
      canonical: locale === "en" ? "/tools/jwt-decoder" : `/${locale}/tools/jwt-decoder`,
      languages: { en: "/tools/jwt-decoder", "x-default": "/tools/jwt-decoder" },
    },
  };
}

export default async function JwtDecoderPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/#tool` },
      { "@type": "ListItem", position: 3, name: "JWT Decoder Online" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Decode a JWT Token Online",
    description: "Decode and inspect a JSON Web Token using a free online decoder.",
    step: [
      {
        "@type": "HowToStep",
        name: "Open the JWT decoder",
        text: "Navigate to the JWT Decoder page on Base64 Shuttle. No account or installation is needed.",
        url: `${BASE_URL}/tools/jwt-decoder`,
      },
      {
        "@type": "HowToStep",
        name: "Paste your JWT token",
        text: "Copy the JWT token from your application, API response, or browser storage and paste it into the input field. A JWT consists of three Base64URL-encoded segments separated by dots.",
      },
      {
        "@type": "HowToStep",
        name: "View the decoded parts",
        text: "The decoder automatically splits the token into its three parts: the header, the payload, and the signature. Each part is decoded and displayed in a readable JSON format.",
      },
      {
        "@type": "HowToStep",
        name: "Inspect the claims",
        text: "Review the payload claims, including the issuer (iss), subject (sub), expiration time (exp), issued at (iat), and any custom claims. The decoder highlights timestamps in human-readable format.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a JWT token?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A JSON Web Token (JWT) is a compact, URL-safe token format used for securely transmitting information between parties. It consists of three parts: a header, a payload, and a signature. JWTs are commonly used for authentication and authorization in web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to paste my JWT into this tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all decoding happens client-side in your browser. The JWT is never sent to any server, so your token data remains completely private. However, avoid pasting tokens with highly sensitive production secrets if you are on a shared computer.",
        },
      },
      {
        "@type": "Question",
        name: "Can this tool verify JWT signatures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This decoder displays the signature but does not verify it against a secret or public key. Signature verification requires the signing key, which should never be shared with an online tool. Use your application's JWT library for signature verification.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between JWT and JWS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JWT (JSON Web Token) is the token format, while JWS (JSON Web Signature) is the mechanism used to sign JWTs. Most JWTs you encounter are JWS tokens, meaning they have a signature that ensures the payload has not been tampered with.",
        },
      },
      {
        "@type": "Question",
        name: "What does Base64URL encoding mean in JWT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JWTs use Base64URL encoding, which is a URL-safe variant of Base64. It replaces + with - and / with _, and removes padding characters. This ensures the token can be safely used in URLs, HTTP headers, and query parameters.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my JWT has expired?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The JWT decoder displays the expiration time (exp) claim in human-readable format. Compare this timestamp with the current time. If the expiration time has passed, the token is expired and should be refreshed or replaced.",
        },
      },
    ],
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "JWT Decoder Online – Free JSON Web Token Decoder & Inspector",
    description: "A comprehensive guide to JWT tokens, including their structure, common claims, and how to decode and inspect them online for free.",
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
    url: `${BASE_URL}/tools/jwt-decoder`,
    about: {
      "@type": "Thing",
      name: "JWT Decoding",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">JWT Decoder Online – Free JSON Web Token Inspector</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Decode and inspect any JWT token in seconds. View the header, payload, and signature in a clean, readable format—entirely in your browser.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Is a JWT Token?</h2>
          <p className="mb-4">
            A JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between two parties as a JSON object. JWTs are widely used in modern web applications for authentication and authorization. When a user logs in, the server issues a JWT that the client stores and includes in subsequent requests to prove its identity.
          </p>
          <p className="mb-4">
            A JWT consists of three parts separated by dots: the header, the payload, and the signature. The header specifies the signing algorithm (such as HS256 or RS256) and the token type. The payload contains the claims—statements about the user and additional metadata. The signature ensures that the token has not been altered after it was issued.
          </p>
          <p className="mb-4">
            Each part is Base64URL-encoded, making the entire token URL-safe and compact. A typical JWT looks like a long string of characters: &quot;eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.abc123&quot;. Decoding the first two parts reveals the JSON content, while the signature is binary data that verifies the token integrity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Decode a JWT Token</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Open the decoder:</strong> Navigate to the JWT Decoder page on Base64 Shuttle. The tool loads instantly with no setup required.
            </li>
            <li>
              <strong>Paste your JWT:</strong> Copy the full JWT token string from your browser console, API response, or application storage and paste it into the input field.
            </li>
            <li>
              <strong>View the decoded parts:</strong> The tool automatically parses the token and displays the header JSON, payload JSON, and signature in separate sections.
            </li>
            <li>
              <strong>Inspect the claims:</strong> Review the payload for standard claims like &quot;exp&quot; (expiration), &quot;iss&quot; (issuer), &quot;sub&quot; (subject), and any custom claims your application uses.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Instant decoding:</strong> Paste a JWT and see the decoded header and payload immediately. No waiting or loading screens.</li>
            <li><strong>Human-readable timestamps:</strong> Unix timestamps in claims like &quot;exp&quot;, &quot;iat&quot;, and &quot;nbf&quot; are converted to readable date and time format.</li>
            <li><strong>Payload highlighting:</strong> Standard JWT claims are highlighted for quick identification, making it easy to spot expiration times and issuers.</li>
            <li><strong>Complete privacy:</strong> All decoding happens in your browser. The JWT is never transmitted to any external server.</li>
            <li><strong>Base64URL support:</strong> The decoder correctly handles Base64URL encoding, which differs slightly from standard Base64 encoding.</li>
            <li><strong>Error detection:</strong> Invalid or malformed tokens are detected immediately with clear error messages explaining what went wrong.</li>
            <li><strong>Works with any JWT:</strong> The tool supports JWTs signed with any algorithm (HS256, RS256, ES256, etc.), though it does not verify signatures.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases for JWT Decoding</h2>
          <p className="mb-4">
            <strong>Authentication debugging:</strong> When building or debugging authentication systems, you need to inspect the JWT tokens being issued. The decoder lets you verify that the payload contains the correct user information, roles, and permissions.
          </p>
          <p className="mb-4">
            <strong>Token expiration checking:</strong> JWTs have a limited lifespan defined by the &quot;exp&quot; claim. When an application suddenly stops working, decoding the JWT can reveal whether the token has expired and needs to be refreshed.
          </p>
          <p className="mb-4">
            <strong>API integration testing:</strong> When integrating with third-party APIs that use JWT authentication, you can decode the tokens to verify they contain the required claims and have not been tampered with.
          </p>
          <p className="mb-4">
            <strong>Security auditing:</strong> Security professionals decode JWTs to audit the claims being transmitted, check for sensitive data leakage, and verify that tokens follow best practices for expiration and issuer validation.
          </p>
          <p className="mb-4">
            <strong>Learning and education:</strong> JWT decoding is an excellent way to learn how JSON Web Tokens work. By examining real tokens, you can understand the structure, claims, and encoding used in modern authentication systems.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Understanding JWT Claims</h2>
          <p className="mb-4">
            JWT claims are key-value pairs in the payload that convey information about the token and the entity it represents. Registered claims are standardized and include &quot;iss&quot; (issuer), &quot;sub&quot; (subject), &quot;aud&quot; (audience), &quot;exp&quot; (expiration time), &quot;nbf&quot; (not before), and &quot;iat&quot; (issued at). Public claims are defined by the application and can carry any data. Private claims are agreed upon between parties and are not registered with any standard.
          </p>
          <p className="mb-4">
            The decoder displays all claims in a formatted JSON view. Timestamps are automatically converted to human-readable dates, making it easy to check when a token was issued and when it will expire. This is invaluable when troubleshooting authentication issues in production environments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is a JWT token?</h3>
                <p className="text-muted-foreground">A JSON Web Token (JWT) is a compact, URL-safe token format used for securely transmitting information between parties. It consists of three parts: a header, a payload, and a signature. JWTs are commonly used for authentication and authorization in web applications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is it safe to paste my JWT into this tool?</h3>
                <p className="text-muted-foreground">Yes, all decoding happens client-side in your browser. The JWT is never sent to any server, so your token data remains completely private. However, avoid pasting tokens with highly sensitive production secrets if you are on a shared computer.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can this tool verify JWT signatures?</h3>
                <p className="text-muted-foreground">This decoder displays the signature but does not verify it against a secret or public key. Signature verification requires the signing key, which should never be shared with an online tool. Use your application&apos;s JWT library for signature verification.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the difference between JWT and JWS?</h3>
                <p className="text-muted-foreground">JWT (JSON Web Token) is the token format, while JWS (JSON Web Signature) is the mechanism used to sign JWTs. Most JWTs you encounter are JWS tokens, meaning they have a signature that ensures the payload has not been tampered with.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What does Base64URL encoding mean in JWT?</h3>
                <p className="text-muted-foreground">JWTs use Base64URL encoding, which is a URL-safe variant of Base64. It replaces + with - and / with _, and removes padding characters. This ensures the token can be safely used in URLs, HTTP headers, and query parameters.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I know if my JWT has expired?</h3>
                <p className="text-muted-foreground">The JWT decoder displays the expiration time (exp) claim in human-readable format. Compare this timestamp with the current time. If the expiration time has passed, the token is expired and should be refreshed or replaced.</p>
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
