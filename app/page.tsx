
import Image from "next/image";
import Link from "next/link";

import ProjekatKartica from "@/components/projekatKartica";
import { dohvatiProjekte } from "@/lib/projekti";

export default async function Home() {
  const projekti = await dohvatiProjekte();
  const najnoviji = projekti.slice(0, 3);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">

      {/* POZADINSKI EFEKTI */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[550px] w-[550px] rounded-full bg-orange-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute left-[-15%] top-[40%] h-[450px] w-[450px] rounded-full bg-orange-500/[0.05] blur-[140px]" />

      {/* HERO SEKCIJA */}
      <section className="relative border-b border-white/[0.07]">

        <div className="container-main relative px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            {/* LEVA STRANA */}
            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2.5 text-xs font-bold tracking-[0.18em] text-orange-400 sm:text-sm">

                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-orange-500" />
                </span>

                DOBRODOŠAO NA MOJ PORTFOLIO

              </div>

              <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">

                Zdravo, ja sam

                <br />

                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Mitar Rebić.
                </span>

              </h1>

              <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Web Developer
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Bavim se razvojem modernih web aplikacija i
                digitalnih rešenja. Učim, istražujem nove
                tehnologije i pretvaram kreativne ideje
                u funkcionalne projekte.
              </p>

              {/* DUGMAD */}
              <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">

                <Link
                  href="/projekti"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-orange-500 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  Pogledaj projekte
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
              <div className="mt-12 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">

                <span className="h-px w-10 bg-orange-500/50" />

                PROGRAMIRANJE

                <span className="text-orange-500">·</span>

                KREATIVNOST

                <span className="text-orange-500">·</span>

                NAPREDAK

              </div>

            </div>

            {/* DESNA STRANA - PROFILNA SLIKA */}
            <div className="relative mx-auto w-full max-w-[400px] lg:ml-auto">

              <div className="pointer-events-none absolute -inset-10 rounded-full bg-orange-500/[0.10] blur-[90px]" />

              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-orange-500/20 sm:-right-6 sm:-top-6" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 shadow-2xl shadow-black/50">

                <Image
                  src="/profil.jpg"
                  alt="Mitar Rebić - Web Developer"
                  width={600}
                  height={700}
                  priority
                  className="h-[350px] w-full rounded-[1.5rem] object-cover object-center transition duration-700 hover:scale-105 sm:h-[460px] lg:h-[500px]"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/75 p-4 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    MOJ DIGITALNI SVET
                  </p>

                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Ideje pretvaram u stvarnost.
                  </p>

                </div>

              </div>

              {/* DEKORATIVNA KARTICA */}
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

      {/* O MENI */}
      <section className="container-main px-5 py-20 sm:px-8 sm:py-28">

        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              <span className="h-px w-8 bg-orange-500" />
              NEŠTO VIŠE O MENI
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Uvek učim.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Uvek stvaram.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              Volim da istražujem nove tehnologije, rešavam
              probleme i razvijam projekte koji spajaju
              funkcionalnost i moderan dizajn.
              Svaki novi projekat je prilika za napredak.
            </p>

            <Link
              href="/o-meni"
              className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-orange-500 transition hover:text-orange-400"
            >
              Saznaj više o meni
              <span className="text-lg">↗</span>
            </Link>

          </div>

        </div>

        {/* TRI KARTICE */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: "💻",
              title: "Programiranje",
              description: "Razvoj modernih web aplikacija i funkcionalnih rešenja.",
            },
            {
              icon: "🎨",
              title: "Kreativnost",
              description: "Kreiranje modernog dizajna i zanimljivih digitalnih iskustava.",
            },
            {
              icon: "📈",
              title: "Napredak",
              description: "Konstantno učenje, istraživanje i usavršavanje.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/[0.08] bg-[#111111] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-8"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* NAJNOVIJI PROJEKTI */}
      <section
        id="projekti"
        className="container-main scroll-mt-20 border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
      >

        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

          <div>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              <span className="h-px w-8 bg-orange-500" />
              PORTFOLIO / RADOVI
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Najnoviji
              <br className="sm:hidden" />
              {" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                projekti.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Pogledaj neke od projekata na kojima sam radio
              i istraži moj dosadašnji rad.
            </p>

          </div>

          <Link
            href="/projekti"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-bold transition hover:border-orange-500/40 hover:bg-orange-500/[0.07]"
          >
            Svi projekti
            <span className="text-orange-500">↗</span>
          </Link>

        </div>

        {najnoviji.length > 0 ? (

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">

            {najnoviji.map((p) => (

              <div
                key={p.id}
                className="group min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111] p-2 transition duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.15)]"
              >

                <ProjekatKartica
                  id={p.id}
                  slug={p.slug}
                  naslov={p.naslov}
                  opis={p.opis}
                  tehnologije={p.tehnologije}
                />

              </div>

            ))}

          </div>

        ) : (

          <div className="mt-14 rounded-3xl border border-white/[0.08] bg-[#111111] px-6 py-20 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/[0.08] text-4xl">
              🚀
            </div>

            <h3 className="mt-7 text-2xl font-black">
              Novi projekti stižu.
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
              Trenutno nema objavljenih projekata.
              Uskoro će ovde biti predstavljeni novi radovi.
            </p>

          </div>

        )}

      </section>

      {/* ZAVRŠNI CTA */}
      <section className="container-main px-5 pb-20 sm:px-8 sm:pb-32">

        <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#11100f] px-6 py-14 text-center sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="relative">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              SLEDEĆI KORAK
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Imaš ideju?
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Hajde da je ostvarimo.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-zinc-500 sm:text-base">
              Otvoren sam za nove projekte, kreativne ideje
              i zanimljive mogućnosti za saradnju.
              Hajde da zajedno napravimo nešto posebno.
            </p>

            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-500 px-8 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 min-[420px]:w-auto"
            >
              Započni saradnju ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}