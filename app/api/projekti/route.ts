import { dohvatiProjekte } from "@/lib/projekti";

  export async function GET() {
     const projekti = await dohvatiProjekte();
     return Response.json(projekti);
   }