
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hvala",
  robots: { index: false },
};

export default function Hvala() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hvala na poruci</h1>
      <p className="mt-4">Javiću ti se uskoro.</p>
    </div>
  );
}