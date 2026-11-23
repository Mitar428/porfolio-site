
"use client";

import { useActionState } from "react";
import { izmeniProjekat } from "@/app/admin/novi-projekat/actions";

interface Props {
  projekat: {
    id: number | string;
    slug: string;
    naslov: string;
    opis: string;
    tehnologije: string[];
    godina: number;
  };
}

export default function FormularIzmena({ projekat }: Props) {
  const [stanje, formAction, pending] = useActionState(
    izmeniProjekat,
    {
      greska: null,
      vrednosti: {},
    }
  );

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="id" value={projekat.id} />

      <div>
        <label className="mb-2 block font-bold">Naslov projekta</label>
        <input
          type="text"
          name="naslov"
          defaultValue={stanje.vrednosti.naslov ?? projekat.naslov}
          required
          className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">Slug</label>
        <input
          type="text"
          name="slug"
          defaultValue={stanje.vrednosti.slug ?? projekat.slug}
          required
          className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">Opis</label>
        <textarea
          name="opis"
          defaultValue={stanje.vrednosti.opis ?? projekat.opis}
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          Tehnologije (odvojene zarezom)
        </label>
        <input
          type="text"
          name="tehnologije"
          defaultValue={
            stanje.vrednosti.tehnologije ??
            projekat.tehnologije.join(", ")
          }
          required
          className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">Godina</label>
        <input
          type="number"
          name="godina"
          defaultValue={stanje.vrednosti.godina ?? projekat.godina}
          required
          className="w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none focus:border-orange-500"
        />
      </div>

      {stanje.greska && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {stanje.greska}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 disabled:opacity-50"
      >
        {pending ? "Čuvanje izmena..." : "Sačuvaj izmene"}
      </button>
    </form>
  );
}
