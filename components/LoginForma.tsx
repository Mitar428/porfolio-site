"use client";

import { useActionState } from "react";
import { prijava } from "@/app/login/actions";

export default function LoginForma() {
  const [stanje, akcija, salje] = useActionState(prijava, {
    greska: null,
    email: "",
  });

  return (
    <form action={akcija} className="mt-8 flex flex-col gap-4">
      <input
        name="email"
        type="email"
        defaultValue={stanje.email}
        placeholder="Email"
        required
        className="rounded border p-2"
      />

      <input
        name="lozinka"
        type="password"
        placeholder="Lozinka"
        required
        className="rounded border p-2"
      />

      <button
        type="submit"
        disabled={salje}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {salje ? "Prijavljujem..." : "Prijavi se"}
      </button>

      {stanje.greska && <p className="text-red-700">{stanje.greska}</p>}
    </form>
  );
}