
"use server";

import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";

type Stanje = {
  greska: string | null;
  vrednosti: Record<string, string>;
};

const BUCKET = "projekti";
const MAX_VELICINA = 5 * 1024 * 1024;

const DOZVOLJENI_TIPOVI: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
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

function uzmiSliku(formData: FormData): File | null {
  const file = formData.get("slika");

  if (!(file instanceof File) || file.size === 0) {
    return null;
  }

  return file;
}

function proveriSliku(file: File): string | null {
  if (!DOZVOLJENI_TIPOVI[file.type]) {
    return "Dozvoljeni formati su JPG, PNG i WEBP.";
  }

  if (file.size > MAX_VELICINA) {
    return "Slika ne sme biti veća od 5 MB.";
  }

  return null;
}

async function uploadSlike(
  supabase: Awaited<ReturnType<typeof createClient>>,
  file: File,
): Promise<{ url: string; path: string } | null> {
  const ekstenzija = DOZVOLJENI_TIPOVI[file.type];

  const putanja = `${randomUUID()}.${ekstenzija}`;

  const bytes = new Uint8Array(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(putanja, bytes, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(`Upload slike nije uspeo: ${error.message}`);
  }

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(putanja);

  return {
    url: data.publicUrl,
    path: putanja,
  };
}

function putanjaStareSlike(url: string | null): string | null {
  if (!url) return null;

  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const index = url.indexOf(marker);

  if (index === -1) return null;

  return decodeURIComponent(url.slice(index + marker.length));
}

async function obrisiFajl(
  supabase: Awaited<ReturnType<typeof createClient>>,
  putanja: string | null,
) {
  if (!putanja) return;

  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([putanja]);

  if (error) {
    console.error("Brisanje slike nije uspelo:", error.message);
  }
}

// DODAVANJE PROJEKTA
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

  const file = uzmiSliku(formData);

  if (file) {
    const greskaSlike = proveriSliku(file);

    if (greskaSlike) {
      return { greska: greskaSlike, vrednosti };
    }
  }

  const supabase = await proveriAdmina();

  let novaSlika: { url: string; path: string } | null = null;

  try {
    if (file) {
      novaSlika = await uploadSlike(supabase, file);
    }

    const { error } = await supabase
      .from("projekti")
      .insert({
        slug,
        naslov,
        opis,
        tehnologije,
        godina,
        slika: novaSlika?.url ?? null,
      });

    if (error) {
      await obrisiFajl(supabase, novaSlika?.path ?? null);

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
  } catch (error) {
    await obrisiFajl(supabase, novaSlika?.path ?? null);

    return {
      greska: error instanceof Error
        ? error.message
        : "Greška prilikom dodavanja projekta.",
      vrednosti,
    };
  }

  updateTag("projekti");
  redirect("/projekti");
}

// IZMENA PROJEKTA
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

  const file = uzmiSliku(formData);

  if (file) {
    const greskaSlike = proveriSliku(file);

    if (greskaSlike) {
      return { greska: greskaSlike, vrednosti };
    }
  }

  const supabase = await proveriAdmina();

  const { data: postojeci, error: citanjeGreska } = await supabase
    .from("projekti")
    .select("slika")
    .eq("id", id)
    .maybeSingle();

  if (citanjeGreska) {
    return {
      greska: `Čitanje projekta nije uspelo: ${citanjeGreska.message}`,
      vrednosti,
    };
  }

  if (!postojeci) {
    return {
      greska: "Projekat nije pronađen.",
      vrednosti,
    };
  }

  let novaSlika: { url: string; path: string } | null = null;

  try {
    if (file) {
      novaSlika = await uploadSlike(supabase, file);
    }

    const podaciZaIzmenu = {
      slug,
      naslov,
      opis,
      tehnologije,
      godina,
      ...(novaSlika ? { slika: novaSlika.url } : {}),
    };

    const { data, error } = await supabase
      .from("projekti")
      .update(podaciZaIzmenu)
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error || !data) {
      await obrisiFajl(supabase, novaSlika?.path ?? null);

      return {
        greska: error
          ? `Izmena nije uspela: ${error.message}`
          : "Projekat nije izmenjen. Proveri ID i RLS UPDATE pravila.",
        vrednosti,
      };
    }
  } catch (error) {
    await obrisiFajl(supabase, novaSlika?.path ?? null);

    return {
      greska: error instanceof Error
        ? error.message
        : "Greška prilikom izmene projekta.",
      vrednosti,
    };
  }

  if (novaSlika && postojeci.slika) {
    await obrisiFajl(
      supabase,
      putanjaStareSlike(postojeci.slika),
    );
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

  const { data: projekat, error: citanjeGreska } = await supabase
    .from("projekti")
    .select("slika")
    .eq("id", id)
    .maybeSingle();

  if (citanjeGreska) {
    throw new Error(citanjeGreska.message);
  }

  const { error } = await supabase
    .from("projekti")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Brisanje nije uspelo: ${error.message}`);
  }

  if (projekat?.slika) {
    await obrisiFajl(
      supabase,
      putanjaStareSlike(projekat.slika),
    );
  }

  updateTag("projekti");
  redirect("/projekti");
}
