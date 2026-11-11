import Link from "next/link";

const linkovi=[
    {href: "/",tekst: "Pocetna" },
    {href: "/O-meni",tekst: "O meni" },
    {href: "/Projekti",tekst: "Projekti" },
    {href: "/Kontakt",tekst: "Kontakt" },
];

export default function Navigacija(){
    return(
        <nav className="flex gap-6 border-b px-8 py-4">
            {linkovi.map((link)=>(
            <Link key={link.href} href={link.href} className="text-zinc-600">
15            {link.tekst}
16          </Link>
            ))}
        </nav>
    )
}