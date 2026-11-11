
import type { Metadata } from "next";
import Sekcija from "@/components/sekcija";

export const metadata: Metadata = {
  title: "o meni",
};

const vestine = ["HTML i CSS", "JavaScript", "TypeScript", "PHP", "Git i GitHub"];

export default function OMeni() {
  return (
    <div>
      <h1 className="text-4xl font-bold">O meni</h1>

      <p className="mt-4 text-lg text-zinc-600">
        Student sam i web developer trenutno sam na praksi gde ucim Next.js
      </p>

      <Sekcija naslov="Veštine">
        <ul className="list-disc pl-6">
          {vestine.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </Sekcija>
    </div>
  );
}
