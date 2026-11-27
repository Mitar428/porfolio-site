
import { ImageResponse } from "next/og";
import { SAJT_IME, SAJT_OPIS } from "@/lib/sajt";

export const alt = "Portfolio web developera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Slika() {
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
        <div style={{ fontSize: 88 }}>{SAJT_IME}</div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#94a3b8" }}>
          {SAJT_OPIS}
        </div>
      </div>
    ),
    { ...size },
  );
}