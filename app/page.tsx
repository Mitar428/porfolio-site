
import Pozdrav from "@/components/pozdrav";
import Link from "next/link";
import Sekcija from "@/components/sekcija";
import ProjekatKartica from "@/components/projekatKartica";
import { projekti } from "@/lib/projekti";

export default function Home() {
  const najnoviji = projekti.slice(0, 2);

  return (
    <div>
      <h1 className="text-4xl font-bold">
        zdravo ja sam Mitar Rebic
      </h1>

      <p className="mt-2 text-lg text-zinc-600">
        Web developer koji uči Next.js i TypeScript.
      </p>

      <Sekcija naslov="Najnoviji projekti">
        <div className="grid gap-4 sm:grid-cols-2">
          {najnoviji.map((p) => (
            <ProjekatKartica
              key={p.slug}
              slug={p.slug}
              naslov={p.naslov}
              opis={p.opis}
              tehnologije={p.tehnologije}
            />
          ))}
        </div>

        <Link href="/projekti" className="mt-6 inline-block underline">
          Svi projekti
        </Link>
      </Sekcija>
    </div>
  );
}
