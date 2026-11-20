"use client";

import { useActionState } from "react";
import { dodajProjekat } from "@/app/admin/novi-projekat/actions";

export default function NoviProjekatForma() {
  const [stanje, akcija, salje] = useActionState(dodajProjekat, {
    greska: null,
    vrednosti: {} as Record<string, string>,
  });

  return (
    <form action={akcija} className="mt-8 flex flex-col gap-4">
      <input
        name="slug"
        defaultValue={stanje.vrednosti.slug}
        placeholder="Slug (npr. moj-novi-projekat)"
        required
        className="rounded border p-2"
      />

      <input
        name="naslov"
        defaultValue={stanje.vrednosti.naslov}
        placeholder="Naslov"
        required
        className="rounded border p-2"
      />

      <textarea
        name="opis"
        defaultValue={stanje.vrednosti.opis}
        placeholder="Opis"
        required
        rows={4}
        className="rounded border p-2"
      />

      <input
        name="tehnologije"
        defaultValue={stanje.vrednosti.tehnologije}
        placeholder="Tehnologije, odvojene zarezom (Next.js, React)"
        required
        className="rounded border p-2"
      />

      <input
        name="godina"
        defaultValue={stanje.vrednosti.godina}
        type="number"
        placeholder="Godina"
        required
        className="rounded border p-2"
      />

      <button
        type="submit"
        disabled={salje}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {salje ? "Čuvam..." : "Dodaj projekat"}
      </button>

      {stanje.greska && <p className="text-red-700">{stanje.greska}</p>}
    </form>
  );
}