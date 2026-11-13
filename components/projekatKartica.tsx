import Link from "next/link";

interface prrojekatKarticaProps{
    slug: string;
    naslov: string;
    opis:string;
    tehnologije: string[];
}
export default function prrojekatKartica({
    slug,
    naslov,
    opis,
    tehnologije
}:prrojekatKarticaProps){
    return(
        <article className="rounded-lg border p-5">
            <h3 className="text-xl font-semibold">{naslov}</h3>
            <p className="mt-2 text-zinc-600 text-white">{opis}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
                {tehnologije.map((teh)=>(
                <li key={teh} className="rounded bg-zinc-100 px-2 py-1 text-sm text-black">
                  {teh}
                </li>
                ))}
            </ul>

            <Link href={`/projekti/${slug}`} className="mt-4 inline-block underline">
             Detaljnije
            </Link>
        </article>
    )
}