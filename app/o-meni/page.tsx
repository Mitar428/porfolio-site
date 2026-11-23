
import Image from "next/image";
import Prikazivise from "@/components/Prikazivise";

export default function OMeniPage() {
  return (
    <section className="container-main section-padding">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="animate-fade-up">
          <span className="font-bold uppercase tracking-[0.25em] text-orange-500">
            O meni
          </span>

          <h1 className="mt-6 text-5xl font-black sm:text-6xl">
            Kreativnost.
            <br />
            Znanje.
            <br />
            <span className="gradient-text">Programiranje.</span>
          </h1>

          <p className="mt-7 leading-8 text-zinc-400">
            Volim tehnologiju, programiranje i izradu modernih web aplikacija.
            Cilj mi je da stvaram funkcionalna i kvalitetna digitalna rešenja.
          </p>

          <Prikazivise />
        </div>

        <div className="relative ml-auto w-full max-w-md md:translate-x-30">
          <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/profil.jpg"
              alt="Profilna fotografija"
              width={600}
              height={500}
              className="h-[300px] object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}