
import type { MetadataRoute } from "next";
import { JAVNE_STRANICE, SAJT_URL } from "@/lib/sajt";
import { dohvatiProjekte } from "@/lib/projekti";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projekti = await dohvatiProjekte();

  const adreseStranica = JAVNE_STRANICE.map((putanja) => ({
    url: putanja === "/" ? SAJT_URL : `${SAJT_URL}${putanja}`,
  }));

  const adreseProjekata = projekti.map((p) => ({
    url: `${SAJT_URL}/projekti/${p.slug}`,
  }));

  return [...adreseStranica, ...adreseProjekata];
}