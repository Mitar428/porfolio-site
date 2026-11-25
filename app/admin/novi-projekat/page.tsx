
import type { Metadata } from "next";
import Link from "next/link";
import NoviProjekatForma from "@/components/NoviProjekatForma";

export const metadata: Metadata = {
  title: "Novi projekat | Admin panel",
  description: "Dodavanje novog projekta u portfolio.",
};

export default function NoviProjekatPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-8 sm:py-24">

      {/* Pozadinski efekti */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-600/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Povratak */}
        <Link
          href="/projekti"
          className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-400 transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Nazad na projekte
        </Link>

        {/* Naslov */}
        <div className="mb-10 mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Administracija / Projekti
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Kreiraj novi
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              projekat.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Popuni informacije o projektu, dodaj opis i tehnologije
            koje si koristio i predstavi svoj rad na portfolio sajtu.
          </p>
        </div>

        {/* Forma */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/95 p-6 shadow-2xl shadow-black/30 sm:p-10">

          {/* Dekorativna linija */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl text-orange-400">
              +
            </div>

            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                Informacije o projektu
              </h2>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Unesi podatke za novi portfolio projekat.
              </p>
            </div>
          </div>

          <NoviProjekatForma />

        </section>

        {/* Donji tekst */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-600">
            Administratorski panel
          </p>

          <p className="text-xs text-zinc-600">
            <span className="text-orange-500">●</span> Upravljanje projektima
          </p>
        </div>

      </div>
    </main>
  );
}
