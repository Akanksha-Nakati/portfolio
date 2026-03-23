import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akanksha Nakati — Data Engineer & Marketing Analytics",
  description:
    "Portfolio of Akanksha Nakati — AI/Data Engineer with 2+ years of experience in data modeling, analytics, and marketing intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSerif.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
