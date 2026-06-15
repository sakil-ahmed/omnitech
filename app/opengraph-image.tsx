import { ImageResponse } from "next/og";
import { siteConfig } from "@/app/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #001a14 0%, #003d32 45%, #008060 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "linear-gradient(135deg, #00f5c4, #008060)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(0, 245, 196, 0.25)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "5px solid white",
                borderTopColor: "transparent",
                transform: "rotate(-35deg)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              OMNITECH
            </div>
            <div
              style={{
                marginTop: 12,
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.28em",
                color: "#7dffe8",
                textTransform: "uppercase",
              }}
            >
              Shopify Apps
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 600,
            lineHeight: 1.25,
            maxWidth: 900,
            color: "#e8fff8",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 820,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
