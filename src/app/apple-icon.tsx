import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f6f2",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            width: "136px",
            height: "136px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#5b6e5e",
            borderRadius: "28px",
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "2px",
            fontFamily: "sans-serif",
          }}
        >
          AE
        </div>
      </div>
    ),
    { ...size }
  );
}
