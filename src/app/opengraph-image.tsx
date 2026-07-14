import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Independent Web Designer & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0908",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#5fb6a6",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: "#948a7d",
              textTransform: "uppercase",
            }}
          >
            Independent Web Designer &amp; Developer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 980,
            color: "#f6f0e8",
          }}
        >
          <span>Turn your idea into a website worth&nbsp;</span>
          <span style={{ color: "#5fb6a6" }}>remembering.</span>
        </div>
      </div>
    ),
    size
  );
}
