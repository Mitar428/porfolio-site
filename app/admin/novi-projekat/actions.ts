
"use server";

import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type Stanje = {
  greska: string | null;
  vrednosti: Record<string, string>;
};

async function proveriAdmina() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "admin") {
    throw new Error("Nemate dozvolu za ovu akciju.");
  }

  return supabase;
}

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

  const vrednosti = {
    slug,
    naslov,
    opis,
    tehnologije: tekstTehnologija,
    godina: tekstGodine,
  };

  const tehnologije = tekstTehnologija
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

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

  const supabase = await proveriAdmina();

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

  updateTag("projekti");
  redirect("/projekti");
}


export async function izmeniProjekat(
  _prethodno: Stanje,
  formData: FormData,
): Promise<Stanje> {
  const id = String(formData.get("id") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const naslov = String(formData.get("naslov") ?? "").trim();
  const opis = String(formData.get("opis") ?? "").trim();
  const tekstTehnologija = String(formData.get("tehnologije") ?? "");
  const tekstGodine = String(formData.get("godina") ?? "");
  const godina = Number(tekstGodine);

  const vrednosti = {
    slug,
    naslov,
    opis,
    tehnologije: tekstTehnologija,
    godina: tekstGodine,
  };

  const tehnologije = tekstTehnologija
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!id) {
    return { greska: "Nedostaje ID projekta.", vrednosti };
  }

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

  const supabase = await proveriAdmina();

  const { data, error } = await supabase
    .from("projekti")
    .update({
      slug,
      naslov,
      opis,
      tehnologije,
      godina,
    })
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    return {
      greska: `Izmena nije uspela: ${error.message}`,
      vrednosti,
    };
  }

  if (!data) {
    return {
      greska: "Projekat nije izmenjen. Proveri ID projekta i RLS UPDATE pravila u Supabase-u.",
      vrednosti,
    };
  }

  updateTag("projekti");
  redirect("/projekti");
}

 



// BRISANJE PROJEKTA
export async function obrisiProjekat(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    throw new Error("Nedostaje ID projekta.");
  }

  const supabase = await proveriAdmina();

  const { error } = await supabase
    .from("projekti")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Brisanje nije uspelo: ${error.message}`);
  }

  updateTag("projekti");
  redirect("/projekti");
}
