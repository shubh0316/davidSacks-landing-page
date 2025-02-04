import type { Metadata } from "next";
import { IM_Fell_English } from "next/font/google";
import "./globals.css";

const imFellEnglish = IM_Fell_English({
  variable: "--font-im-fell-english",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sacks Coin",
  description: "SACKS coin is a rally token to show support for the work of the White House Crypto and AI Czar and the advancement of crypto and AI policy. SACKS coin, DavidSacksCoin.com, and SacksCoin.com is a community driven initiative and is not directly endorsed by David Sacks or the U.S. Government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/svg+xml" href="/profile.svg" />
    </head>
    <body
      style={{ fontFamily: "IM Fell English, serif" }}
      className={`${imFellEnglish.variable} antialiased`}
    >
      {children}
    </body>
  </html>
  );
}
