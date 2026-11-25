
import Link from "next/link";
import { obrisiProjekat } from "@/app/admin/novi-projekat/actions";
import AdminKontrolerProjekta from "@/components/AdminKontrolerProjekta";

interface Props {
  id: number | string;
}

export default function AdminKontroleProjekta({ id }: Props) {
  return (
    <div className="flex gap-3 px-4 pb-4">
      <Link
        href={`/projekti/id?id=${id}`}
        className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-4 py-2 font-bold text-orange-400 transition hover:bg-orange-500 hover:text-white"
      >
        Izmeni
      </Link>

      {/* DUGME ZA BRISANJE PROJEKTA */}
      <form action={obrisiProjekat}>
        <input type="hidden" name="id" value={id} />

        <button
          type="submit"
          className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Obriši
        </button>
      </form>
    </div>
  );
}
