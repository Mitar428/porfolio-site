
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Ime Prezime | Portfolio",
    template: "%s | Ime Prezime",
  },
  description: "Portfolio web developera: projekti, veštine i kontakt.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigacija />
        <main className="mx-auto w-full max-w-3xl flex-1 px-8 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
