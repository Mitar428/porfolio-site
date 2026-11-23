
import KontaktForma from "@/components/kontaktforma";

export default function KontaktPage() {
  return (
    <section className="container-main section-padding">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="font-bold uppercase tracking-[0.25em] text-orange-500">
            Kontakt
          </span>

          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-4xl">
            Hajde da
            <br />
            <span className="gradient-text">razgovaramo.</span>
          </h1>

          <p className="mt-7 max-w-lg leading-8 text-zinc-400">
            Imaš ideju za projekat ili želiš da sarađujemo?
            Pošalji mi poruku i razgovaraćemo o mogućnostima.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#18181b] p-6">
            <span className="text-3xl">✉️</span>
            <h3 className="mt-4 text-xl font-bold">Kontaktiraj me</h3>
            <p className="mt-2 text-zinc-400">
              Radujem se tvojoj poruci.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#18181b] p-6 sm:p-9">
          <h2 className="mb-7 text-2xl font-bold">Pošalji poruku</h2>
          <KontaktForma />
        </div>
      </div>
    </section>
  );
}
