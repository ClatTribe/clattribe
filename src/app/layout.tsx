import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
  title: "Clat Tribe",
  description: "Your trusted platform for CLAT preparation and law careers.",
  icons: {
    icon: [
      { url: '/clattribe.png', sizes: '48x48', type: 'image/png' },
      { url: '/clattribe.png', sizes: '32x32', type: 'image/png' },
      { url: '/clattribe.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/clattribe.png',
    shortcut: '/clattribe.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable}`}
    >
      <head>
        {/* Favicon Links */}
        <link rel="icon" type="image/png" href="/clattribe.png" />
        <link rel="shortcut icon" href="/clattribe.png" />
        
        {/* Google Fonts for Template */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
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
      </body>
    </html>
  );
}