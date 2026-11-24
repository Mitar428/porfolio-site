
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Navigacija from "@/components/Navigacija";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mitar Rebic Portfolio",
    template: "%s | Ime Prezime",
  },
  description: "Portfolio web developera: projekti, veštine i kontakt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Suspense fallback={<div className="h-16" />}>
          <Navigacija />
        </Suspense>

        <main className="mx-auto w-full max-w-5xl flex-2 px-10 py-12">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
