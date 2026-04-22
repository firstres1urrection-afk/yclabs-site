import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#18181b",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #99f6e4",
              background: "#f0fdfa",
              color: "#115e59",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            YC
          </div>
          <div style={{ fontSize: "34px", fontWeight: 700 }}>YCLabs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#0f766e", fontSize: "28px", fontWeight: 700 }}>
            운영사/브랜드 공식 사이트
          </div>
          <div
            style={{
              maxWidth: "880px",
              marginTop: "20px",
              fontSize: "58px",
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "0px",
            }}
          >
            실용적인 비교 도구와 운영형 웹 서비스를 만듭니다.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#52525b",
            fontSize: "25px",
          }}
        >
          <span>Bangkok Stay Optimizer</span>
          <span>yclabs.co.kr</span>
        </div>
      </div>
    ),
    size,
  );
}
