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
  title: "Atelier del Gelato - Creating Baci Moments Daily | Natural Gluten-Free Gelato Sofia Bulgaria",
  description: "Atelier del Gelato Sofia - Premium natural, gluten-free, vegan gelato and Italian desserts. Artisanal gelato with weekly changing flavors. Local gelato shop in Sofia, Bulgaria. Open daily 11:30 AM - 8:00 PM. Best gelato in Sofia, authentic Italian gelato, homemade ice cream, dairy-free options.",
  keywords: "gelato, Sofia, Bulgaria, natural gelato, gluten-free gelato, vegan gelato, artisanal gelato, ice cream, Italian gelato, homemade gelato, Sofia gelato shop, local gelato, premium gelato, authentic gelato, traditional gelato, gelato flavors, weekly gelato, fresh gelato, organic gelato, dairy-free gelato, lactose-free gelato, sugar-free gelato, keto gelato, healthy gelato, gourmet gelato, luxury gelato, handmade gelato, craft gelato, specialty gelato, unique gelato, exotic gelato, seasonal gelato, summer gelato, dessert, Italian desserts, tiramisu, lemon tart, cheesecake, Sofia desserts, Bulgaria desserts, local desserts, natural desserts, gluten-free desserts, vegan desserts, dairy-free desserts, healthy desserts, gourmet desserts, artisanal desserts, handmade desserts, craft desserts, specialty desserts, premium desserts, luxury desserts, traditional desserts, authentic desserts, Italian cuisine, Mediterranean food, European cuisine, Sofia food, Bulgaria food, local food, natural food, organic food, healthy food, gourmet food, artisanal food, craft food, specialty food, premium food, luxury food, traditional food, authentic food, restaurant, cafe, coffee shop, dessert shop, ice cream shop, gelato shop, Sofia restaurant, Bulgaria restaurant, local restaurant, natural restaurant, organic restaurant, healthy restaurant, gourmet restaurant, artisanal restaurant, craft restaurant, specialty restaurant, premium restaurant, luxury restaurant, traditional restaurant, authentic restaurant, Italian restaurant, Mediterranean restaurant, European restaurant, Sofia cafe, Bulgaria cafe, local cafe, natural cafe, organic cafe, healthy cafe, gourmet cafe, artisanal cafe, craft cafe, specialty cafe, premium cafe, luxury cafe, traditional cafe, authentic cafe, Italian cafe, Mediterranean cafe, European cafe, Sofia coffee shop, Bulgaria coffee shop, local coffee shop, natural coffee shop, organic coffee shop, healthy coffee shop, gourmet coffee shop, artisanal coffee shop, craft coffee shop, specialty coffee shop, premium coffee shop, luxury coffee shop, traditional coffee shop, authentic coffee shop, Italian coffee shop, Mediterranean coffee shop, European coffee shop, Sofia dessert shop, Bulgaria dessert shop, local dessert shop, natural dessert shop, organic dessert shop, healthy dessert shop, gourmet dessert shop, artisanal dessert shop, craft dessert shop, specialty dessert shop, premium dessert shop, luxury dessert shop, traditional dessert shop, authentic dessert shop, Italian dessert shop, Mediterranean dessert shop, European dessert shop, Sofia ice cream shop, Bulgaria ice cream shop, local ice cream shop, natural ice cream shop, organic ice cream shop, healthy ice cream shop, gourmet ice cream shop, artisanal ice cream shop, craft ice cream shop, specialty ice cream shop, premium ice cream shop, luxury ice cream shop, traditional ice cream shop, authentic ice cream shop, Italian ice cream shop, Mediterranean ice cream shop, European ice cream shop, Sofia gelato shop, Bulgaria gelato shop, local gelato shop, natural gelato shop, organic gelato shop, healthy gelato shop, gourmet gelato shop, artisanal gelato shop, craft gelato shop, specialty gelato shop, premium gelato shop, luxury gelato shop, traditional gelato shop, authentic gelato shop, Italian gelato shop, Mediterranean gelato shop, European gelato shop",
  authors: [{ name: "Atelier del Gelato" }],
  openGraph: {
    title: "Atelier del Gelato - Creating Baci Moments Daily | Natural Gluten-Free Gelato Sofia Bulgaria",
    description: "Atelier del Gelato Sofia - Premium natural, gluten-free, vegan gelato and Italian desserts. Artisanal gelato with weekly changing flavors. Local gelato shop in Sofia, Bulgaria.",
    type: "website",
    locale: "en_US",
    siteName: "Atelier del Gelato",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier del Gelato - Creating Baci Moments Daily",
    description: "Natural, Gluten-Free Gelato in Sofia, Bulgaria. Artisanal gelato with weekly changing flavors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://atelierdelgelato.com",
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
