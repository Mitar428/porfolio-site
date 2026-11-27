  import type { MetadataRoute } from "next";
 import { SAJT_URL } from "@/lib/sajt";
   
  export default function robots(): MetadataRoute.Robots {
    return {
       rules: {
         userAgent: "*",
         allow: "/",
         // Delovi koji nisu za pretragu. /login se NE blokira ovde (vidi poglavlje 5).
        disallow: ["/admin/", "/api/"],
      },
      sitemap: `${SAJT_URL}/sitemap.xml`,
    };
  }
