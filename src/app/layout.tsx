import type { Metadata } from "next";
import { DM_Sans, Titan_One } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Atelier del Gelato - Creating Baci Moments Daily",
  description: "Natural, Gluten-Free Gelato in Sofia, Bulgaria. Artisanal gelato with weekly changing flavors. Open daily 11:30 AM - 8:00 PM.",
  keywords: "gelato, Sofia, Bulgaria, natural, gluten-free, artisanal, ice cream",
  authors: [{ name: "Atelier del Gelato" }],
  openGraph: {
    title: "Atelier del Gelato - Creating Baci Moments Daily",
    description: "Natural, Gluten-Free Gelato in Sofia, Bulgaria. Artisanal gelato with weekly changing flavors.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${titanOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
