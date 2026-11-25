
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      {/* Dekorativni efekat */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Logo i opis */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white transition hover:text-orange-400"
            >
              MITAR<span className="text-orange-500">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Kreativan i moderan pristup izradi web stranica.
              Dobrodošli na moj portfolio.
            </p>
          </div>

          {/* Linkovi */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Navigacija
            </h3>

            <div className="flex flex-col gap-3">
              {[
                { href: "/", tekst: "Početna" },
                { href: "/o-meni", tekst: "O meni" },
                { href: "/projekti", tekst: "Projekti" },
                { href: "/usluge", tekst: "Usluge" },
                { href: "/kontakt", tekst: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-zinc-500 transition hover:translate-x-1 hover:text-orange-400"
                >
                  {link.tekst}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Kontakt
            </h3>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
            >
              Kontaktiraj me
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Donji deo */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
    

          <p className="text-xs text-zinc-600">
            Napravljeno sa <span className="text-orange-500">♥</span> u Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}