
import Link from "next/link";

interface ProjekatKarticaProps {
  id: number | string;
  slug: string;
  naslov: string;
  opis: string;
  slika: string | null;
  tehnologije: string[];
}

export default function ProjekatKartica({
  id,
  slug,
  naslov,
  opis,
  slika,
  tehnologije,
}: ProjekatKarticaProps) {
  return (
    <article
      data-projekat-id={id}
      className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl bg-[#18181b] transition-all duration-300"
    >
      {/* SLIKA PROJEKTA */}
      <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#302116] via-[#1c1714] to-[#09090b]">
        {slika ? (
          <img
            src={slika}
            alt={`Slika projekta ${naslov}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute h-44 w-44 rounded-full bg-orange-500/15 blur-[75px] group-hover:bg-orange-500/30" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 text-5xl font-black text-orange-500 shadow-xl">
              &lt;/&gt;
            </div>
          </>
        )}

        <span className="absolute left-5 top-5 rounded-full border border-orange-500/30 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
          Projekat
        </span>

        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
      </div>

      {/* SADRŽAJ */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-2xl font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-orange-400">
          {naslov}
        </h3>

        <p className="mt-4 line-clamp-4 flex-1 text-sm leading-7 text-zinc-400">
          {opis}
        </p>

        {/* TEHNOLOGIJE */}
        <div className="mt-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Korišćene tehnologije
          </p>

          <ul className="flex min-h-9 flex-wrap gap-2">
            {tehnologije.map((teh) => (
              <li
                key={teh}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                {teh}
              </li>
            ))}
          </ul>
        </div>

        {/* LINK */}
        <div className="mt-auto pt-7">
          <div className="mb-5 h-px bg-white/10" />

          <Link
            href={`/projekti/${slug}`}
            className="flex items-center justify-between font-bold text-orange-500 transition-colors duration-300 hover:text-orange-400"
          >
            <span>Detaljnije o projektu</span>

            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-black">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
