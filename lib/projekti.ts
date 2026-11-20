import { cacheLife, cacheTag } from "next/cache";
import { napraviJavniKlijent } from "@/lib/supabase/javni";
   
   export interface Projekat {
     slug: string;
     naslov: string;
     opis: string;
     tehnologije: string[];
     godina: number;
  }
  
  const KOLONE = "slug, naslov, opis, tehnologije, godina";
  
  
  export async function dohvatiProjekte(): Promise<Projekat[]> {
    "use cache";
    cacheLife("minutes");
    cacheTag("projekti");
  
    const supabase = napraviJavniKlijent();
    const { data, error } = await supabase
      .from("projekti")
      .select(KOLONE)
      .order("godina", { ascending: false })
      .order("id", { ascending: false });
  
    if (error) {
      throw new Error(`Čitanje projekata nije uspelo: ${error.message}`);
    }
    return (data ?? []) as Projekat[];
  }
  
 
  export async function nadjiProjekat(slug: string): Promise<Projekat | null> {
    "use cache";
    cacheLife("minutes");
    cacheTag("projekti");
  
    const supabase = napraviJavniKlijent();
    const { data, error } = await supabase
      .from("projekti")
      .select(KOLONE)
      .eq("slug", slug)
      .maybeSingle();
  
    if (error) {
      throw new Error(`Čitanje projekta nije uspelo: ${error.message}`);
    }
    return data as Projekat | null;
  }