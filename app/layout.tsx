import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akanksha Nakati — Data & AI Engineer",
  description:
    "Portfolio of Akanksha Nakati — Data & AI Engineer blending data engineering, machine learning, and marketing analytics into systems that anticipate and inspire action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} ${caveat.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0B8EW6TFGC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0B8EW6TFGC');
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
