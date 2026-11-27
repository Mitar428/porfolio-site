
import type { Metadata } from "next";
import Navigacija from "@/components/Navigacija";
import Footer from "@/components/footer";
import { NASLOV_POCETNE, SAJT_IME, SAJT_OPIS, SAJT_URL } from "@/lib/sajt";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(SAJT_URL),
  title: {
    default: NASLOV_POCETNE,
    template: `%s | ${SAJT_IME}`,
  },
  description: SAJT_OPIS,
  openGraph: {
    type: "website",
    siteName: SAJT_IME,
    locale: "sr_RS",
    title: NASLOV_POCETNE,
    description: SAJT_OPIS,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div className="h-16" />}>
          <Navigacija />
        </Suspense>

        <main className="w-full flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}