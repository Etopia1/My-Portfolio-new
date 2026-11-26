import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/portfolio";

export const runtime = "edge";
export const alt = SITE_CONFIG.seo.siteName;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #06080d 0%, #0d1624 100%)",
          color: "#f4f6fa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "#2dd4bf",
          }}
        >
          <span>AE</span>
          <span style={{ color: "#6f7c94" }}>|</span>
          <span style={{ color: "#a8b3c7" }}>{SITE_CONFIG.location} · Remote</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.08 }}>
            {SITE_CONFIG.name}
          </div>
          <div style={{ fontSize: "34px", color: "#38bdf8", fontWeight: 500 }}>
            {SITE_CONFIG.title}
          </div>
          <div style={{ fontSize: "24px", color: "#a8b3c7", maxWidth: "900px" }}>
            React · Next.js · TypeScript · Node.js · PostgreSQL · Redis · Socket.IO · AI Integration
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
            color: "#6f7c94",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
          }}
        >
          <span>{SITE_CONFIG.email}</span>
          <span>github.com/Etopia1</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
