
"use server";

import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type Stanje = {
  greska: string | null;
  vrednosti: Record<string, string>;
};

export async function dodajProjekat(
  _prethodno: Stanje,
  formData: FormData,
): Promise<Stanje> {
  const slug = String(formData.get("slug") ?? "").trim();
  const naslov = String(formData.get("naslov") ?? "").trim();
  const opis = String(formData.get("opis") ?? "").trim();
  const tekstTehnologija = String(formData.get("tehnologije") ?? "");
  const tekstGodine = String(formData.get("godina") ?? "");
  const godina = Number(tekstGodine);

  // Vraćamo unete vrednosti uz grešku, da se forma ne isprazni
  const vrednosti = {
    slug,
    naslov,
    opis,
    tehnologije: tekstTehnologija,
    godina: tekstGodine,
  };

  // "Next.js, React, Tailwind" -> ["Next.js", "React", "Tailwind"]
  const tehnologije = tekstTehnologija
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  // Provera na serveru
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    return {
      greska: "Slug sme da ima samo mala slova, brojeve i crtice.",
      vrednosti,
    };
  }

  if (!naslov || !opis || tehnologije.length === 0) {
    return { greska: "Popuni sva polja.", vrednosti };
  }

  if (!Number.isInteger(godina) || godina < 2000 || godina > 2100) {
    return { greska: "Godina nije ispravna.", vrednosti };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("projekti")
    .insert({ slug, naslov, opis, tehnologije, godina });

  if (error) {
    if (error.code === "23505") {
      return {
        greska: "Projekat sa tim slug-om već postoji.",
        vrednosti,
      };
    }

    return {
      greska: `Upis nije uspeo: ${error.message}`,
      vrednosti,
    };
  }

  // Obriši keš sa listom projekata
  updateTag("projekti");

  redirect("/projekti");
}
