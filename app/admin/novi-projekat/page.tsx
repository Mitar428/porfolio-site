
import type { Metadata } from "next";
import NoviProjekatForma from "@/components/NoviProjekatForma";
import { odjava } from "@/app/login/actions";

export const metadata: Metadata = {
  title: "Novi projekat",
  robots: { index: false },
};

export default function NoviProjekat() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Novi projekat</h1>
      <NoviProjekatForma />
      <form action={odjava} className="mt-8">
        <button type="submit" className="underline">
          Odjavi se
        </button>
      </form>
    </div>
  );
}
