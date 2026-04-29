import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clattribe.com"),
  title: {
    default: "CLAT Tribe — India's #1 GK Platform for CLAT",
    template: "%s | CLAT Tribe",
  },
  description:
    "Daily editorials, monthly summaries, smart flashcards, and full mocks for CLAT, AILET, MHCET, and NLAT. India's #1 GK platform for CLAT preparation.",
  keywords: [
    "CLAT", "AILET", "CLAT GK", "law entrance exam", "CLAT current affairs",
    "CLAT preparation", "legal reasoning", "NLU admissions", "CLAT 2027",
    "CLAT mocks", "law entrance preparation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "CLAT Tribe",
    url: "https://www.clattribe.com",
    title: "CLAT Tribe — India's #1 GK Platform for CLAT",
    description:
      "Daily editorials, monthly summaries, smart flashcards, and full mocks for CLAT, AILET, MHCET, and NLAT.",
    images: [
      { url: "/clattribe.png", width: 1200, height: 630, alt: "CLAT Tribe" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAT Tribe — India's #1 GK Platform for CLAT",
    description:
      "Daily editorials, monthly summaries, smart flashcards, and full mocks for CLAT, AILET, MHCET, and NLAT.",
    images: ["/clattribe.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/clattribe.png", sizes: "48x48", type: "image/png" },
      { url: "/clattribe.png", sizes: "32x32", type: "image/png" },
      { url: "/clattribe.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/clattribe.png",
    shortcut: "/clattribe.png",
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CLAT Tribe",
  url: "https://www.clattribe.com",
  logo: "https://www.clattribe.com/clattribe.png",
  description:
    "India's #1 GK platform for CLAT preparation — daily editorials, monthly summaries, smart flashcards, and full mocks.",
  sameAs: [
    "https://www.instagram.com/clattribe",
    "https://twitter.com/clattribe",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        {/* Favicon Links */}
        <link rel="icon" type="image/png" href="/clattribe.png" />
        <link rel="shortcut icon" href="/clattribe.png" />

        {/* Google Fonts for Template */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />

        {/* Organization JSON-LD for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-54D2C6NS');
          `}
        </Script>
      </head>

      <body className="flex flex-col min-h-screen font-body">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54D2C6NS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <main className="flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
