import Link from "next/link";
 
   export default function Hvala() {
     return (
       <div>
         <h1 className="text-4xl font-bold">Hvala!</h1>
         <p className="mt-4">Poruka je poslata. Javiću se uskoro.</p>
         <Link href="/" className="mt-4 inline-block underline">
           Nazad na početnu
        </Link>
      </div>
    );
  }