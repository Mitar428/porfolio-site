import type { Metadata } from "next";
import KontaktForma from "@/components/kontaktforma";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return (
    <main>
      <h1>Kontakt</h1>
      <KontaktForma />
    </main>
  );
}