
import type { Metadata } from "next";
import { connection } from "next/server";
import Link from "next/link";

import { dohvatiProjekte } from "@/lib/projekti";
import ProjekatKartica from "@/components/projekatKartica";
import { createClient } from "@/lib/supabase/server";
import AdminKontroleProjekta from "@/components/AdminKontrolerProjekta";

export const instant = false;

export const metadata: Metadata = {
  title: "Projekti | Portfolio",
  description: "Pogledajte moje projekte i radove.",
};

export default async function ProjektiPage() {

  await connection();

  const projekti = await dohvatiProjekte();

  
 

  // PROVERA DA LI JE KORISNIK ADMINISTRATOR
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdmin = user?.app_metadata?.role === "admin";

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">

      <section className="relative border-b border-white/10">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-600/10 blur-[130px]" />

        <div className="container-main relative py-28 sm:py-36">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-bold tracking-wider text-orange-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              MOJ DIGITALNI SVET
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
              Ideje koje
              <br />
              postaju{" "}
              <span className="gradient-text">stvarnost.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Dobrodošao u moj portfolio. Ovde možeš pogledati
              projekte na kojima sam radio, kreativne ideje,
              tehnologije i rezultate mog rada.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#svi-projekti"
                className="orange-button"
              >
                Pogledaj projekte →
              </a>

              <Link
                href="/kontakt"
                className="outline-button"
              >
                Kontaktiraj me
              </Link>
            </div>
          </div>

          {/* STATISTIKA */}
          <div className="mt-20 grid max-w-3xl gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-orange-500/40">
              <p className="text-4xl font-black text-orange-500">
                {projekti.length}
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Objavljenih projekata
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-orange-500/40">
              <p className="text-4xl font-black text-orange-500">
                100%
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Posvećenost
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-orange-500/40">
              <p className="text-4xl font-black text-orange-500">
                ∞
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Novih ideja
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJEKTI */}
      <section
        id="svi-projekti"
        className="container-main py-24 sm:py-32"
      >

        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Portfolio / Radovi
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Izdvojeni{" "}
              <span className="gradient-text">projekti.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Svaki projekat je prilika za učenje, napredak
              i stvaranje nečeg novog.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-white/10 bg-[#18181b] px-6 py-4">
            <span className="text-sm text-zinc-400">
              Ukupno projekata
            </span>
            <p className="mt-1 text-3xl font-black text-orange-500">
              {projekti.length}
            </p>
          </div>

        </div>

        {projekti.length > 0 ? (

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {projekti.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#18181b] p-2 transition duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10"
              >

                {/* KARTICA PROJEKTA */}
                <ProjekatKartica
                  id={p.id}
                  slug={p.slug}
                  naslov={p.naslov}
                  opis={p.opis}
                  tehnologije={p.tehnologije}
                />

                {/* ADMINISTRATORSKE KONTROLE */}
                {isAdmin && (
                  <AdminKontroleProjekta id={p.id} />
                )}

              </div>
            ))}

          </div>

        ) : (

          <div className="mt-14 rounded-3xl border border-white/10 bg-[#18181b] px-6 py-24 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10 text-4xl">
              🚀
            </div>

            <h3 className="mt-8 text-3xl font-black">
              Nešto zanimljivo se sprema.
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-400">
              Trenutno nema objavljenih projekata.
              Uskoro će ovde biti predstavljeni novi radovi.
            </p>

          </div>

        )}

      </section>

      {/* KONTAKT */}
      <section className="container-main pb-28">

        <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-[#1c1510] via-[#18181b] to-[#09090b] p-9 sm:p-16">

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Sledeći korak
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              Imaš ideju?
              <br />
              Hajde da je ostvarimo.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Otvoren sam za nove projekte, kreativne ideje
              i zanimljive mogućnosti za saradnju.
            </p>

            <Link
              href="/kontakt"
              className="orange-button mt-9 inline-flex"
            >
              Započni saradnju →
            </Link>

          </div>
        </div>

      </section>

    </main>
  );
}
