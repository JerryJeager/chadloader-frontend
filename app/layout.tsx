import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChadLoader - Download YouTube Like a Chad",
  description: "No ads. No limits. Just pure Sigma efficiency.",
  icons: {
    icon: "/appicon.png", 
  },
  openGraph: {
    title: "ChadLoader - Download YouTube Like a Chad",
    description: "No ads. No limits. Just pure Sigma efficiency.",
    url: "https://chadloader.vercel.app",
    siteName: "ChadLoader",
    images: [
      {
        url: "/gigachad-meme-silhouette-alpha-male.jpg", // path from public/
        width: 1200,
        height: 630,
        alt: "Gigachad meme silhouette alpha male",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChadLoader - Download YouTube Like a Chad",
    description: "Download YouTube like a Chad. No ads. No limits.",
    images: ["/gigachad-meme-silhouette-alpha-male.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="zmSsfd2XOrY9meRmTH2O84y8SAgWiME0IiObf4yx_jQ"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
