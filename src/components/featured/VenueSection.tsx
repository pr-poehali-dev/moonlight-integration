export default function VenueSection() {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <img
        src="https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/e76057bf-d81b-4737-8d00-d87863eabf6f.jpg"
        alt="Ротонда"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          filter: "saturate(0.45) brightness(1.08) contrast(0.9)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
        }}
      />

      <div className="flex flex-col items-center" style={{ padding: "0 28px 40px", marginTop: "-20px" }}>
        <p
          className="uppercase text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 5.5vw, 26px)",
            color: "#2c5a8a",
            letterSpacing: "0.18em",
            marginBottom: "16px",
          }}
        >
          Место проведения
        </p>
        <p
          className="text-center"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(13px, 3.5vw, 15px)",
            color: "#555",
            lineHeight: 1.8,
          }}
        >
          Московская область,
          <br />
          городской округ Мытищи,
          <br />
          Хлебниковский лесопарк,
        </p>
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            fontSize: "clamp(26px, 7vw, 36px)",
            color: "#2c5a8a",
            marginTop: "6px",
          }}
        >
          Hide
        </p>
        <a
          href="https://yandex.ru/maps/org/hide/42686447674/?ll=37.540750%2C55.732025&z=14"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
          style={{
            display: "inline-block",
            marginTop: "24px",
            padding: "14px 40px",
            textDecoration: "none",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "clamp(13px, 3.5vw, 16px)",
            color: "#2c5a8a",
            letterSpacing: "0.1em",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 220 56"
            preserveAspectRatio="none"
            fill="none"
            style={{ overflow: "visible" }}
          >
            <rect x="6" y="6" width="208" height="44" rx="2" stroke="#2c5a8a" strokeWidth="1.2" />
            <path d="M18 0 L202 0" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M18 56 L202 56" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M0 16 L0 40" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M220 16 L220 40" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M18 0 Q0 0 0 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
            <path d="M202 0 Q220 0 220 16" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
            <path d="M18 56 Q0 56 0 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
            <path d="M202 56 Q220 56 220 40" stroke="#2c5a8a" strokeWidth="0.8" fill="none" />
          
          </svg>
          Проложить маршрут
        </a>
      </div>
    </div>
  );
}
