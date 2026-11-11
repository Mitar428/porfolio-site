
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkovi = [
  { href: "/", tekst: "Pocetna" },
  { href: "/o-meni", tekst: "O meni" },
  { href: "/projekti", tekst: "Projekti" },
  { href: "/kontakt", tekst: "Kontakt" },
];

export default function Navigacija() {
  const putanja = usePathname();

  return (
    <nav className="flex gap-6 border-b px-8 py-4">
      {linkovi.map((link) => {
        const aktivan =
          link.href === "/"
            ? putanja === "/"
            : putanja.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-zinc-600 ${aktivan ? "font-bold text-black" : ""}`}
          >
            {link.tekst}
          </Link>
        );
      })}
    </nav>
  );
}
