"use client";

import { useState } from "react";

export default function KontaktForma() {
  const [stanje, setStanje] = useState<"mirno" | "salje" | "poslato" | "greska">(
    "mirno"
  );

  async function posalji(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 

    const forma = e.currentTarget;
    const podaci = new FormData(forma);

    setStanje("salje");

    try {
      const odgovor = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ime: podaci.get("ime"),
        email: podaci.get("email"),
        poruka: podaci.get("poruka"),
        }),
      });

      if (odgovor.ok) {
        setStanje("poslato");
        forma.reset();
      } else {
        setStanje("greska");
      }
    } catch {
      setStanje("greska");
    }
  }

  return (
    <form onSubmit={posalji} className="mt-8 flex flex-col gap-4">
      <input
        name="ime"
        placeholder="Ime"
        required
        className="rounded border p-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded border p-2"
      />
      <textarea
        name="poruka"
        placeholder="Poruka"
        required
        rows={5}
        className="rounded border p-2"
      />
      <button
        type="submit"
        disabled={stanje === "salje"}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {stanje === "salje" ? "Šaljem..." : "Pošalji"}
      </button>

      {stanje === "poslato" && (
        <p className="text-green-700">Poruka je poslata. Hvala!</p>
      )}
      {stanje === "greska" && (
        <p className="text-red-700">Nešto nije u redu. Pokušaj ponovo.</p>
      )}
    </form>
  );
}