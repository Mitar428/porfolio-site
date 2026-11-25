
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

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdmin = user?.app_metadata?.role === "admin";

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* HERO */}
      <section className="relative border-b border-white/[0.07]">

        {/* Pozadinski efekti */}
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-600/[0.09] blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-orange-500/[0.06] blur-[130px]" />

        <div className="container-main relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">

          <div className="max-w-5xl">

            {/* Oznaka */}
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2.5 text-xs font-bold tracking-[0.15em] text-orange-400 sm:px-5 sm:text-sm">

              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>

              MOJ DIGITALNI SVET
            </div>

            {/* Naslov */}
            <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:mt-10 sm:text-7xl lg:text-[100px]">

              Kreiram.
              <br />

              Gradim.

              <br />

              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                Ostavljam trag.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-9 sm:text-lg lg:text-xl">
              Dobrodošao u moj portfolio. Ovde možeš istražiti
              moje projekte, kreativne ideje, tehnologije i
              rešenja koja pretvaraju zamisli u stvarnost.
            </p>

            {/* Dugmad */}
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row sm:mt-11">

              <a
                href="#svi-projekti"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-orange-500 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Istraži projekte
                <span className="ml-3 text-lg">↗</span>
              </a>

              <Link
                href="/kontakt"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-bold text-white transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.07]"
              >
                Kontaktiraj me
              </Link>

            </div>

          </div>

          {/* STATISTIKA */}
          <div className="mt-20 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-28 sm:gap-5 lg:max-w-4xl">

            {[
              {
                number: projekti.length,
                label: "Objavljenih projekata",
              },
              {
                number: "100%",
                label: "Posvećenost radu",
              },
              {
                number: "∞",
                label: "Nove ideje",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.035] sm:p-7"
              >

                <p className="text-3xl font-black tracking-tight text-orange-500 sm:text-4xl">
                  {item.number}
                </p>

                <p className="mt-2 text-xs font-medium text-zinc-500 sm:text-sm">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* Dekorativni donji tekst */}
          <div className="mt-16 hidden items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 sm:flex">
            <span className="h-px w-12 bg-orange-500/50" />
            Kreativnost bez granica
          </div>

        </div>

      </section>

      {/* PROJEKTI */}
      <section
        id="svi-projekti"
        className="container-main scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
      >

        {/* Naslov sekcije */}
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              <span className="h-px w-8 bg-orange-500" />
              PORTFOLIO / RADOVI
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Moji{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                projekti.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
              Istraži projekte na kojima sam radio.
              Svaki od njih predstavlja novu ideju,
              izazov i korak napred.
            </p>

          </div>

          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#111111] px-5 py-4 sm:px-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
              ◈
            </div>

            <div>
              <p className="text-xs text-zinc-500">
                Ukupno projekata
              </p>

              <p className="mt-1 text-2xl font-black">
                {projekti.length}
              </p>
            </div>

          </div>

        </div>

        {/* Lista projekata */}
        {projekti.length > 0 ? (

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">

            {projekti.map((p) => (

              <article
                key={p.id}
                className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.15)]"
              >

                {/* Dekorativni efekat */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/0 blur-[80px] transition duration-500 group-hover:bg-orange-500/15" />

                <div className="relative">
                  <ProjekatKartica
                    id={p.id}
                    slug={p.slug}
                    naslov={p.naslov}
                    opis={p.opis}
                    tehnologije={p.tehnologije}
                  />

                  {isAdmin && (
                    <div className="border-t border-white/[0.07] pt-3">
                      <AdminKontroleProjekta id={p.id} />
                    </div>
                  )}
                </div>

              </article>

            ))}

          </div>

        ) : (

          /* Prazno stanje */
          <div className="mt-14 rounded-3xl border border-white/[0.08] bg-[#111111] px-5 py-20 text-center sm:py-28">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/[0.07] text-4xl">
              🚀
            </div>

            <h3 className="mt-7 text-2xl font-black sm:text-3xl">
              Novi projekti stižu.
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
              Trenutno nema objavljenih projekata.
              Uskoro će ovde biti predstavljeni novi radovi.
            </p>

          </div>

        )}

      </section>

      {/* KONTAKT CTA */}
      <section className="container-main px-5 pb-20 sm:px-8 sm:pb-32">

        <div className="group relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#11100f] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

          {/* Pozadinski efekti */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-orange-500/[0.10] blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-orange-600/[0.06] blur-[100px]" />

          <div className="relative z-10 max-w-3xl">

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              <span className="h-px w-8 bg-orange-500" />
              SLEDEĆI KORAK
            </div>

            <h2 className="mt-7 text-4xl font-black leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-7xl">

              Imaš ideju?

              <br />

              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Hajde da je ostvarimo.
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-400 sm:text-lg">
              Otvoren sam za nove projekte, kreativne ideje
              i zanimljive mogućnosti za saradnju.
              Hajde da zajedno napravimo nešto posebno.
            </p>

            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-500 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 min-[420px]:w-auto"
            >
              Započni saradnju
              <span className="ml-3 text-lg">↗</span>
            </Link>

          </div>

          {/* Dekorativni simbol */}
          <div className="pointer-events-none absolute -bottom-20 -right-8 hidden select-none text-[300px] font-black leading-none text-white/[0.025] lg:block">
            +
          </div>

        </div>

      </section>

    </main>
  );
}