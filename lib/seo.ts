
import type { Metadata } from "next";
import { NASLOV_POCETNE, SAJT_IME, SAJT_OPIS } from "@/lib/sajt";
interface Podaci {
  naslov?: string;
  opis?: string;
  putanja: string;
  slika?: string;
}

export function napraviMetadata({
  naslov,
  opis = SAJT_OPIS,
  putanja,
  slika = "/opengraph-image",
}: Podaci): Metadata {
  const punNaslov = naslov ? `${naslov} | ${SAJT_IME}` : NASLOV_POCETNE;

  return {
    ...(naslov ? { title: naslov } : {}),
    description: opis,
    alternates: { canonical: putanja },
    openGraph: {
      type: "website",
      siteName: SAJT_IME,
      locale: "sr_RS",
      title: punNaslov,
      description: opis,
      url: putanja,
      images: [{ url: slika, width: 1200, height: 630, alt: punNaslov }],
    },
  };
}