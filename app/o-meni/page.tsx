
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Prikazivise from "@/components/Prikazivise";

export const metadata: Metadata = {
  title: "O meni | Portfolio",
  description: "Saznaj više o meni, mom radu, programiranju i tehnologijama.",
};

export default function OMeniPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* POZADINSKI EFEKTI */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute left-[-10%] top-[45%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.05] blur-[130px]" />

      {/* HERO SEKCIJA */}
      <section className="relative border-b border-white/[0.07]">

        <div className="container-main relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

            {/* LEVA STRANA */}
            <div className="animate-fade-up">

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2.5 text-xs font-bold tracking-[0.2em] text-orange-400 sm:text-sm">

                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-orange-500" />
                </span>

                UPOZNAJ ME
              </div>

              <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-7xl lg:text-[82px]">

                Kreativnost.

                <br />

                Znanje.

                <br />

                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Programiranje.
                </span>

              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Volim tehnologiju, programiranje i izradu modernih
                web aplikacija. Cilj mi je da stvaram funkcionalna,
                kvalitetna i vizuelno privlačna digitalna rešenja.
              </p>

              <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">

                <Link
                  href="/projekti"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-orange-500 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  Pogledaj moje projekte
                  <span className="ml-3 text-lg">↗</span>
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-bold text-white transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.07]"
                >
                  Kontaktiraj me
                </Link>

              </div>

              {/* DONJI DETALJ */}
              <div className="mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600 sm:text-xs">
                <span className="h-px w-10 bg-orange-500/50" />
                Učenje · Kreativnost · Napredak
              </div>

            </div>

            {/* DESNA STRANA - SLIKA */}
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">

              {/* Svetlosni efekat */}
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-orange-500/[0.10] blur-[80px]" />

              {/* Dekorativni okvir */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-orange-500/20 sm:-right-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 shadow-2xl shadow-black/50">

                <Image
                  src="/profil.jpg"
                  alt="Moja profilna fotografija"
                  width={600}
                  height={700}
                  priority
                  className="h-[350px] w-full rounded-[1.5rem] object-cover object-center transition duration-700 hover:scale-105 sm:h-[480px] lg:h-[520px]"
                />

                {/* Donji tekst na slici */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/75 p-4 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    MOJ SVET
                  </p>

                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Ideje pretvaram u stvarnost.
                  </p>

                </div>

              </div>

              {/* Dekorativna oznaka */}
              <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-orange-500/20 bg-[#151515] px-5 py-4 shadow-xl sm:block sm:-right-6">

                <p className="text-2xl font-black text-orange-500">
                  ∞
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Uvek napredujem
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* O MENI - DETALJNIJE */}
      <section className="container-main px-5 py-20 sm:px-8 sm:py-28 lg:py-32">

        <div className="max-w-3xl">

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
            <span className="h-px w-8 bg-orange-500" />
            MOJA PRIČA
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Više od samog
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              programiranja.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-zinc-400 sm:text-base">
            Za mene programiranje nije samo pisanje koda.
            To je proces razmišljanja, rešavanja problema,
            istraživanja novih tehnologija i stvaranja nečega
            što može biti korisno drugima.
          </p>

          <p className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base">
            Trudim se da konstantno unapređujem svoje znanje,
            istražujem nove mogućnosti i razvijam projekte
            kroz koje mogu da pokažem svoju kreativnost i
            tehničke sposobnosti.
          </p>

        </div>

        {/* VREDNOSTI */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="group rounded-3xl border border-white/[0.08] bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-2xl">
              💻
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Programiranje
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Razvijanje funkcionalnih i modernih digitalnih rešenja.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/[0.08] bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-2xl">
              🎨
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Kreativnost
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Pretvaranje ideja u zanimljive i kvalitetne projekte.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/[0.08] bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-2xl">
              📈
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Napredak
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Svakodnevno učenje i usavršavanje znanja i veština.
            </p>

          </div>

        </div>

      </section>

      {/* POSTOJEĆA KOMPONENTA */}
      <section className="container-main border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28">

        <div className="mb-12">

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
            <span className="h-px w-8 bg-orange-500" />
            VIŠE O MENI
          </div>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-6xl">
            Upoznaj me
            <span className="text-orange-500"> bolje.</span>
          </h2>

        </div>

        <Prikazivise />

      </section>

      {/* ZAVRŠNI CTA */}
      <section className="container-main px-5 pb-20 sm:px-8 sm:pb-32">

        <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#11100f] px-6 py-14 text-center sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="relative">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              HAJDE DA SARAĐUJEMO
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Imaš zanimljivu ideju?
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Hajde da je ostvarimo.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-zinc-500 sm:text-base">
              Otvoren sam za nove projekte, kreativne ideje
              i zanimljive mogućnosti za saradnju.
            </p>

            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-500 px-8 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 min-[420px]:w-auto"
            >
              Kontaktiraj me ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}