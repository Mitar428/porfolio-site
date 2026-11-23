
import type { Metadata } from "next";
import Sekcija from "@/components/sekcija";

export const metadata: Metadata = {
  title: "Usluge | Portfolio",
  description: "Usluge izrade modernih veb sajtova i aplikacija.",
};

const usluge = [
  {
    naziv: "Izrada veb sajtova",
    opis: "Moderni i profesionalni veb sajtovi prilagođeni svim uređajima.",
    ikona: "🌐",
    broj: "01",
  },
  {
    naziv: "Izrada veb aplikacija",
    opis: "Razvoj funkcionalnih aplikacija uz moderne tehnologije.",
    ikona: "💻",
    broj: "02",
  },
  {
    naziv: "SEO optimizacija",
    opis: "Poboljšanje vidljivosti sajta na internet pretraživačima.",
    ikona: "🚀",
    broj: "03",
  },
  {
    naziv: "Održavanje sajtova",
    opis: "Ažuriranje, unapređivanje i redovno održavanje sajtova.",
    ikona: "⚙️",
    broj: "04",
  },
];

export default function OMeni() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="container-main relative py-28 sm:py-36">

          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-bold text-orange-400">
            MOJE USLUGE
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight sm:text-7xl">
            Šta mogu da
            <br />
            <span className="gradient-text">napravim za tebe?</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Student sam i web developer. Bavim se izradom
            modernih veb sajtova i aplikacija. Moj cilj je
            da svaka ideja postane funkcionalan i kvalitetan projekat.
          </p>

        </div>
      </section>

      {/* USLUGE */}
      <section className="container-main py-24">

        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Šta nudim
          </span>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Moje <span className="gradient-text">usluge.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          {usluge.map((usluga) => (
            <article
              key={usluga.broj}
              className="group rounded-3xl border border-white/10 bg-[#18181b] p-8 transition duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-3xl">
                  {usluga.ikona}
                </div>

                <span className="text-4xl font-black text-zinc-700 transition group-hover:text-orange-500">
                  {usluga.broj}
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-black transition group-hover:text-orange-400">
                {usluga.naziv}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {usluga.opis}
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-orange-500 transition-all group-hover:w-24" />

            </article>
          ))}

        </div>
      </section>

      {/* VESTINE */}
      <section className="container-main pb-24">

        <Sekcija naslov="Veštine">
          <div className="rounded-3xl border border-white/10 bg-[#18181b] p-7">

            <ul className="grid gap-5 sm:grid-cols-2">
              {usluge.map((v) => (
                <li
                  key={v.broj}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    ✓
                  </span>

                  {v.naziv}
                </li>
              ))}
            </ul>

          </div>
        </Sekcija>

      </section>

    </main>
  );
}
