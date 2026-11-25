
import type { Metadata } from "next";
import Link from "next/link";
import LoginForma from "@/components/LoginForma";

export const metadata: Metadata = {
  title: "Prijava | Mitar Rebić",
  description: "Prijava na administratorski panel.",
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8">

      {/* Pozadinski svetlosni efekti */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-600/[0.04] blur-[100px]" />

      {/* Login kartica */}
      <div className="relative w-full max-w-md">

        {/* Gornji dekorativni detalj */}
        <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-b from-orange-500/40 via-white/5 to-transparent opacity-70 blur-[1px]" />

        <div className="relative overflow-hidden rounded-[29px] border border-white/10 bg-[#101010]/95 p-7 shadow-2xl shadow-black/50 sm:p-10">

          {/* Logo */}
          <div className="mb-9 flex justify-center">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-white transition hover:text-orange-400"
            >
              MITAR<span className="text-orange-500">.</span>
            </Link>
          </div>

          {/* Ikonica */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10 text-4xl shadow-lg shadow-orange-500/5">
              🔐
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Administratorski panel
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Dobrodošli nazad<span className="text-orange-500">.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-zinc-500">
              Prijavite se na svoj nalog kako biste pristupili
              administratorskom panelu.
            </p>
          </div>

          {/* Forma */}
          <div className="mt-9">
            <LoginForma />
          </div>

          {/* Donji deo */}
          <div className="mt-9 border-t border-white/10 pt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-orange-400"
            >
              <span>←</span>
              Nazad na početnu stranicu
            </Link>
          </div>
        </div>

        {/* Donji tekst */}
        <p className="mt-7 text-center text-xs text-zinc-600">
          Zaštićen pristup administratorskom panelu.
        </p>
      </div>
    </main>
  );
}
