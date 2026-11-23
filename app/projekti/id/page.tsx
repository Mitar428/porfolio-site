
import { notFound, redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import FormularIzmena from "./FormularIzmena";

export const instant = false;
interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default async function IzmenaProjektaPage({
  searchParams,
}: Props) {
  // Stranica se izvršava prilikom svakog zahteva,
  // a ne tokom statičkog prerenderovanja.
  await connection();

  const { id } = await searchParams;

  if (!id) {
    notFound();
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "admin") {
    redirect("/login");
  }

  const { data: projekat, error } = await supabase
    .from("projekti")
    .select("id, slug, naslov, opis, tehnologije, godina")
    .eq("id", id)
    .single();

  if (error || !projekat) {
    notFound();
  }

  return (
    <section className="container-main section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Administracija / Projekti
          </span>

          <h1 className="mt-5 text-4xl font-black sm:text-5xl">
            Izmeni <span className="gradient-text">projekat.</span>
          </h1>

          <p className="mt-5 text-zinc-400">
            Izmeni podatke postojećeg projekta.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#18181b] p-6 shadow-2xl sm:p-10">
          <FormularIzmena projekat={projekat} />
        </div>
      </div>
    </section>
  );
}
