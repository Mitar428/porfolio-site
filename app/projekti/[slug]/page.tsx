 import type { Metadata } from "next";
 import Link from "next/link";
 import { notFound } from "next/navigation";
 import { dohvatiProjekte, nadjiProjekat } from "@/lib/projekti";
   
   export async function generateStaticParams() {
     const projekti = await dohvatiProjekte();
     return projekti.map((p) => ({ slug: p.slug }));
   }
  
  export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const projekat = await nadjiProjekat(slug);
    return { title: projekat ? projekat.naslov : "Projekat nije pronađen" };
  }
  
  export default async function ProjekatStrana({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const projekat = await nadjiProjekat(slug);
  
    if (!projekat) {
      notFound();
    }
  
    return (
      <div>
        <Link href="/projekti" className="underline">
          ← Nazad na projekte
        </Link>
        <h1 className="mt-4 text-4xl font-bold">{projekat.naslov}</h1>
        <p className="mt-2 text-zinc-500">Godina: {projekat.godina}</p>
        <p className="mt-6 text-lg">{projekat.opis}</p>
        <p className="mt-6">Tehnologije: {projekat.tehnologije.join(", ")}</p>
      </div>
    );
  }