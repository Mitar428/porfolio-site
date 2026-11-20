"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function prijava(
  _prethodno: { greska: string | null; email: string },
  formData: FormData,
): Promise<{ greska: string | null; email: string }> {
  const email = String(formData.get("email") ?? "").trim();
  const lozinka = String(formData.get("lozinka") ?? "");

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: lozinka,
  });

  if (error) {
    return { greska: "Pogrešan email ili lozinka.", email };
  }

  redirect("/admin/novi-projekat");
}

export async function odjava() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}