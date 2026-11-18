import { createClient } from "@supabase/supabase-js";
   
   // Klijent za javne podatke: ne čita kolačiće, pa radi i pri build-u i u keširanim funkcijama
   export function napraviJavniKlijent() {
     return createClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
       { auth: { persistSession: false } },
     );
}