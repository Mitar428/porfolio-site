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
      <div className="space-y-3">
  <label
    htmlFor="slika"
    className="block text-sm font-semibold text-white"
  >
    Slika projekta
  </label>

  <input
    type="file"
    id="slika"
    name="slika"
    accept="image/png,image/jpeg,image/webp"
    className="block w-full rounded-xl border border-white/10
    bg-white/5 p-3 text-sm text-gray-300
    file:mr-4 file:rounded-lg file:border-0
    file:bg-orange-500 file:px-4 file:py-2
    file:font-semibold file:text-white
    hover:file:bg-orange-600"
  />

  <p className="text-xs text-gray-500">
    JPG, PNG ili WEBP. Maksimalna veličina 5 MB.
  </p>
</div>
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