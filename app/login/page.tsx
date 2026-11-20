import type { Metadata } from "next";
import LoginForma from "@/components/LoginForma";

export const metadata: Metadata = {
  title: "Prijava",
  robots: { index: false },
};

export default function Login() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Prijava</h1>
      <LoginForma />
    </div>
  );
}