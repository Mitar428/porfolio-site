import Link from "next/link";

export default function Nijepronadjeno(){
    return(
        <div>
        <h1 className="text-4xl font-bold">404</h1>
 7        <p className="mt-4">Ova stranica ne postoji.</p>
 8        <Link href="/" className="mt-4 inline-block underline">
 9          Nazad na početnu
10        </Link>
        </div>
    )
}