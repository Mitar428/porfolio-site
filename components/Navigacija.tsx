
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkovi = [
  { href: "/", tekst: "Početna" },
  { href: "/o-meni", tekst: "O meni" },
  { href: "/projekti", tekst: "Projekti" },
  { href: "/kontakt", tekst: "Kontakt" },
  { href: "/usluge", tekst: "Usluge" },
  { href: "/login", tekst: "Login" },
];

export default function Navigacija() {
  const putanja = usePathname();
  const [meniOtvoren, setMeniOtvoren] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMeniOtvoren(false)}
          className="text-xl font-black tracking-tight text-white transition hover:text-orange-400"
        >
          MITAR<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop navigacija */}
        <div className="hidden items-center gap-2 md:flex">
          {linkovi.map((link) => {
            const aktivan =
              link.href === "/"
                ? putanja === "/"
                : putanja.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  aktivan
                    ? "bg-orange-500/10 text-orange-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.tekst}
              </Link>
            );
          })}
        </div>

        {/* Hamburger dugme - telefon */}
        <button
          type="button"
          onClick={() => setMeniOtvoren(!meniOtvoren)}
          aria-label={meniOtvoren ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={meniOtvoren}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-orange-500/50 hover:bg-orange-500/10 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-orange-400 transition-all duration-300 ${
                meniOtvoren ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-orange-400 transition-all duration-300 ${
                meniOtvoren ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-orange-400 transition-all duration-300 ${
                meniOtvoren ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobilni meni */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#080808] transition-all duration-300 md:hidden ${
          meniOtvoren
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {linkovi.map((link) => {
            const aktivan =
              link.href === "/"
                ? putanja === "/"
                : putanja.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMeniOtvoren(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  aktivan
                    ? "border border-orange-500/20 bg-orange-500/10 text-orange-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.tekst}
                {aktivan && (
                  <span className="float-right text-orange-500">●</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}