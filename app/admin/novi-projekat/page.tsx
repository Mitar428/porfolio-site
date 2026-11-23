
import NoviProjekatForma from "@/components/NoviProjekatForma";

export default function NoviProjekatPage() {
  return (
    <section className="container-main section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Administracija / Projekti
          </span>

          <h1 className="mt-5 text-4xl font-black sm:text-5xl">
            Kreiraj novi <span className="gradient-text">projekat.</span>
          </h1>

          <p className="mt-5 text-zinc-400">
            Unesi informacije o projektu i dodaj ga u portfolio.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#18181b] p-6 shadow-2xl sm:p-10">
          <NoviProjekatForma />
        </div>
      </div>
    </section>
  );
}
