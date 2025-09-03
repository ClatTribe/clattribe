import type { Metadata } from "next";
import "./globals.css";
// import NextTopLoader from "nextjs-toploader";

// Font imports
import { Montserrat, Lato } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // headings & bold
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // body text
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Clat Tribe",
  description: "Your trusted platform for CLAT preparation and law careers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2RW5GEFKFR"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2RW5GEFKFR');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen font-body">
        {/* <NextTopLoader color="#024687" /> */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
