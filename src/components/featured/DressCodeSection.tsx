import { useState } from "react";
import LadiesGallery from "./LadiesGallery";

export default function DressCodeSection() {
  const [isLadiesGalleryOpen, setIsLadiesGalleryOpen] = useState(false);

  return (
    <div
      className="w-full relative"
      style={{
        backgroundColor: "#f9f7f4",
      }}
    >
      <div
        className="relative w-full flex flex-col items-center"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/8e0fc594-e948-4cf6-a657-23fa111fe20e.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "85vh",
          padding: "48px 28px 56px",
        }}
      >
        <p
          className="uppercase text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(22px, 6.5vw, 32px)",
            color: "#2c5a8a",
            letterSpacing: "0.22em",
          }}
        >
          Дресс-код
        </p>

        <div
          className="flex flex-col items-center gap-5"
          style={{ marginTop: "auto", marginBottom: "60px", width: "100%" }}
        >
          <button
            type="button"
            className="relative"
            onClick={() => setIsLadiesGalleryOpen(true)}
            style={{
              display: "inline-block",
              padding: "16px 48px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(15px, 4vw, 19px)",
              color: "#2c5a8a",
              letterSpacing: "0.15em",
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "none",
              cursor: "pointer",
              minWidth: "240px",
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 240 56"
              preserveAspectRatio="none"
              fill="none"
              style={{ overflow: "visible" }}
            >
              <rect x="6" y="6" width="228" height="44" rx="2" stroke="#2c5a8a" strokeWidth="1.2" />
              <path d="M20 0 L220 0" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M20 56 L220 56" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M0 16 L0 40" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M240 16 L240 40" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M20 0 Q0 0 0 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M220 0 Q240 0 240 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M20 56 Q0 56 0 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M220 56 Q240 56 240 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
            </svg>
            Для дам
          </button>

          <button
            type="button"
            className="relative"
            style={{
              display: "inline-block",
              padding: "16px 48px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(15px, 4vw, 19px)",
              color: "#2c5a8a",
              letterSpacing: "0.15em",
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "none",
              cursor: "pointer",
              minWidth: "240px",
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 240 56"
              preserveAspectRatio="none"
              fill="none"
              style={{ overflow: "visible" }}
            >
              <rect x="6" y="6" width="228" height="44" rx="2" stroke="#2c5a8a" strokeWidth="1.2" />
              <path d="M20 0 L220 0" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M20 56 L220 56" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M0 16 L0 40" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M240 16 L240 40" stroke="#2c5a8a" strokeWidth="0.8" />
              <path d="M20 0 Q0 0 0 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M220 0 Q240 0 240 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M20 56 Q0 56 0 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
              <path d="M220 56 Q240 56 240 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
            </svg>
            Для джентльменов
          </button>
        </div>
      </div>

      {/* Ladies Gallery Modal */}
      <LadiesGallery
        isOpen={isLadiesGalleryOpen}
        onClose={() => setIsLadiesGalleryOpen(false)}
      />
    </div>
  );
}
