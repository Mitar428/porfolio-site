
import type { Metadata } from "next";
import { posaljiporuku } from "./action";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Kontakt</h1>
      <form action={posaljiporuku} className="mt-8 flex flex-col gap-4">
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
        <button type="submit" className="rounded bg-black px-4 py-2 text-white">
          Pošalji
        </button>
      </form>
    </div>
  );
}
