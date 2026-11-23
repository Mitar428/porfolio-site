
import Link from "next/link";

interface prrojekatKarticaProps {
  id: number | string; // DODATO: ID projekta iz Supabase baze
  slug: string;
  naslov: string;
  opis: string;
  tehnologije: string[];
}

export default function prrojekatKartica({
  id, // DODATO: preuzimanje ID-ja
  slug,
  naslov,
  opis,
  tehnologije,
}: prrojekatKarticaProps) {
  return (
    <article
      data-projekat-id={id} // DODATO: povezivanje kartice sa ID-jem projekta
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#18181b] transition duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10"
    >
      {/* GORNJI DEO */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#292018] to-[#09090b]">
        <div className="absolute h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition group-hover:bg-orange-500/25" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 text-4xl font-black text-orange-500 transition duration-500 group-hover:scale-110">
          &lt;/&gt;
        </div>

        <span className="absolute left-5 top-5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
          Projekat
        </span>

        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      {/* SADRŽAJ */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-black text-white transition group-hover:text-orange-400">
          {naslov}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
          {opis}
        </p>

        {/* TEHNOLOGIJE */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Korišćene tehnologije
          </p>

          <ul className="flex flex-wrap gap-2">
            {tehnologije.map((teh) => (
              <li
                key={teh}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-orange-500/40 hover:text-orange-400"
              >
                {teh}
              </li>
            ))}
          </ul>
        </div>

        {/* LINK */}
        <div className="mt-7 border-t border-white/10 pt-5">
          <Link
            href={`/projekti/${slug}`}
            className="flex items-center justify-between font-bold text-orange-500 transition hover:text-orange-400"
          >
            Detaljnije

            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-black">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
