
import { ImageResponse } from "next/og";
import { dohvatiProjekte, nadjiProjekat } from "@/lib/projekti";
import { SAJT_IME } from "@/lib/sajt";

export const alt = "Projekat sa portfolija";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const projekti = await dohvatiProjekte();
  return projekti.map((p) => ({ slug: p.slug }));
}

export default async function Slika({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projekat = await nadjiProjekat(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, color: "#94a3b8" }}>
          {`${SAJT_IME} · Projekti`}
        </div>
        <div style={{ marginTop: 20, fontSize: 84 }}>
          {projekat?.naslov ?? "Projekat"}
        </div>
        <div style={{ marginTop: 28, fontSize: 40, color: "#cbd5e1" }}>
          {projekat?.tehnologije.join(" · ") ?? ""}
        </div>
      </div>
    ),
    { ...size },
  );
}