import type { Metadata } from "next";
import ProjekatKartica from "@/components/projekatKartica";
import { projekti } from "@/lib/projekti";

export const metadata: Metadata = {
  title: "Projekti",
};

export default function Projekti() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Projekti</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projekti.map((p) => (
          <ProjekatKartica
            key={p.slug}
            slug={p.slug}
            naslov={p.naslov}
            opis={p.opis}
            tehnologije={p.tehnologije}
          />
        ))}
      </div>
    </div>
  );
}