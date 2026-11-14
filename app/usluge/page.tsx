import type { Metadata } from "next";
import Sekcija from "@/components/sekcija";



export const metadata: Metadata = {
  title: "Usluge",
};

const usluge = ["izrada veb sajtova", "izrada veb aplikacija", "SEO", "odrzavanje sajtova"];

export default function OMeni() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Usluge</h1>
      <p className="mt-4 text-lg text-zinc-600">
        Student sam i web developer. 
      </p>

      <Sekcija naslov="Veštine">
        <ul className="list-disc pl-6">
          {usluge.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </Sekcija>
    </div>
  );
}