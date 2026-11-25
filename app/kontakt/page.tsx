
import type { Metadata } from "next";
import Link from "next/link";
import KontaktForma from "@/components/kontaktforma";

export const metadata: Metadata = {
  title: "Kontakt | Portfolio",
  description: "Kontaktiraj me i započnimo saradnju.",
};

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* POZADINSKI EFEKTI */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[450px] w-[450px] rounded-full bg-orange-600/[0.09] blur-[140px]" />
      <div className="pointer-events-none absolute left-[-10%] top-[40%] h-[350px] w-[350px] rounded-full bg-orange-500/[0.05] blur-[120px]" />

      {/* HERO SEKCIJA */}
      <section className="relative border-b border-white/[0.07]">

        <div className="container-main relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2.5 text-xs font-bold tracking-[0.2em] text-orange-400 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-orange-500" />
              </span>
              KONTAKT / SARADNJA
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-7xl lg:text-[96px]">
              Hajde da
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                razgovaramo.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">
              Imaš ideju za projekat ili želiš da sarađujemo?
              Pošalji mi poruku i razgovaraćemo o mogućnostima.
              Otvoren sam za nove ideje, kreativne projekte
              i zanimljive izazove.
            </p>

            <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">

              <a
                href="#kontakt-forma"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-orange-500 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Pošalji poruku
                <span className="ml-3 text-lg">↗</span>
              </a>

              <Link
                href="/projekti"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-bold text-white transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.07]"
              >
                Pogledaj projekte
              </Link>

            </div>

          </div>

          {/* STATISTIKA / INFORMACIJE */}
          <div className="mt-16 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3 sm:mt-24">

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-orange-500/30 sm:p-7">
              <span className="text-3xl">✉️</span>
              <h3 className="mt-4 font-bold">Direktan kontakt</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                Pošalji poruku putem kontakt formulara.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-orange-500/30 sm:p-7">
              <span className="text-3xl">💡</span>
              <h3 className="mt-4 font-bold">Nove ideje</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                Otvoren sam za kreativne predloge i projekte.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-orange-500/30 sm:p-7">
              <span className="text-3xl">🚀</span>
              <h3 className="mt-4 font-bold">Zajednička saradnja</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                Hajde da zajedno napravimo nešto posebno.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* KONTAKT FORMA */}
      <section
        id="kontakt-forma"
        className="container-main relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
      >

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEVA STRANA */}
          <div>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              <span className="h-px w-8 bg-orange-500" />
              STUPIMO U KONTAKT
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Svaka dobra
              <br />
              ideja počinje
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                razgovorom.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-zinc-400 sm:text-base">
              Bilo da imaš već razrađenu ideju ili tek razmišljaš
              o novom projektu, slobodno mi piši.
              Radujem se tvojoj poruci.
            </p>

            {/* KONTAKT KARTICA */}
            <div className="group relative mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111] p-6 transition duration-300 hover:border-orange-500/30 sm:p-8">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/[0.08] blur-[70px] transition group-hover:bg-orange-500/[0.15]" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-2xl">
                  ✉️
                </div>

                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  Kontaktiraj me
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Imaš pitanje, predlog ili ideju?
                  Pošalji mi poruku i započnimo razgovor.
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                  <span className="text-xs font-medium text-zinc-400">
                    Otvoren za nove mogućnosti
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* DESNA STRANA - FORMA */}
          <div className="relative min-w-0">

            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-orange-500/[0.04] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111111] p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">

              <div className="mb-8 flex items-center justify-between gap-3 border-b border-white/[0.07] pb-7">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    POČNIMO
                  </span>

                  <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                    Pošalji poruku.
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                    Popuni formular i javiću ti se.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-xl text-orange-500 min-[420px]:flex">
                  ↗
                </div>

              </div>

              <KontaktForma />

            </div>

          </div>

        </div>

      </section>

      {/* ZAVRŠNI CTA */}
      <section className="container-main relative px-5 pb-20 sm:px-8 sm:pb-32">

        <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#11100f] px-6 py-14 text-center sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="relative">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              TVOJA IDEJA JE SLEDEĆA
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hajde da napravimo
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                nešto posebno.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-zinc-500 sm:text-base">
              Svaki veliki projekat počinje prvom idejom.
              Napravi prvi korak i javi mi se.
            </p>

            <a
              href="#kontakt-forma"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-500 px-8 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 min-[420px]:w-auto"
            >
              Započni razgovor ↗
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}