
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dohvatiProjekte, nadjiProjekat } from "@/lib/projekti";
import { napraviMetadata } from "@/lib/seo";

export const metadata: Metadata = napraviMetadata({
  naslov: "Projekti",
  opis: "Pregled mojih projekata: opis, godina i korišćene tehnologije.",
  putanja: "/projekti",
})

export default async function ProjekatStrana({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projekat = await nadjiProjekat(slug);

  if (!projekat) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* Pozadinski efekti */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-orange-600/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">

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
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Detalji projekta
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            {projekat.naslov}
            <span className="text-orange-500">.</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              {projekat.godina}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
              Portfolio projekat
            </span>
          </div>
        </div>

        {/* Opis projekta */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-10">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-400">
              ✦
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              O projektu
            </h2>
          </div>

          <p className="whitespace-pre-line text-base leading-8 text-zinc-400 sm:text-lg">
            {projekat.opis}
          </p>
        </section>

        {/* Tehnologije */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-400">
              &lt;/&gt;
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Korišćene tehnologije
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {projekat.tehnologije.map((tehnologija) => (
              <span
                key={tehnologija}
                className="rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                {tehnologija}
              </span>
            ))}
          </div>
        </section>

        {/* Donji CTA */}
        <section className="mt-12 overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-[#111111] to-[#080808] p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Zainteresovan si za saradnju?
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Pogledaj ostale projekte ili me kontaktiraj ukoliko imaš
            ideju za novi projekat.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-orange-400"
            >
              Kontaktiraj me <span>↗</span>
            </Link>

            <Link
              href="/projekti"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
            >
              Svi projekti
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}