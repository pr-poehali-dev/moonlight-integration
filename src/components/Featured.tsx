export default function Featured() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full"
      style={{ backgroundColor: "#f7f5f2", paddingBottom: "0" }}
    >
      {/* Лебеди */}
      <div
        className="relative z-10 flex justify-center"
        style={{ marginBottom: "-50px" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/c20c0c2e-2fdd-4b6e-8b25-80299f579fb4.jpg"
          alt="лебеди"
          style={{
            width: "120px",
            height: "100px",
            objectFit: "contain",
            position: "relative",
            zIndex: 10,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Полукруглый переход в синий */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{
          backgroundColor: "#3a6186",
          borderRadius: "50% 50% 0 0 / 12% 12% 0 0",
          paddingTop: "72px",
          paddingBottom: "60px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* Буква Д декоративная + заголовок */}
        <div className="flex items-start justify-center mb-4">
          <span
            className="leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "clamp(64px, 18vw, 110px)",
              color: "rgba(255,255,255,0.13)",
              lineHeight: 0.85,
              marginRight: "-6px",
              userSelect: "none",
            }}
          >
            Д
          </span>
          <div className="flex flex-col items-start pt-3">
            <p
              className="uppercase font-semibold text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 4vw, 20px)",
                color: "#ffffff",
                letterSpacing: "0.12em",
                lineHeight: 1.3,
              }}
            >
              ОРОГИЕ ДРУЗЬЯ
              <br />И РОДНЫЕ!
            </p>
          </div>
        </div>

        <p
          className="text-center uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(8px, 2.4vw, 11px)",
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.2em",
            lineHeight: 2,
            maxWidth: "340px",
          }}
        >
          Хотим, чтобы вы разделили с нами радость
          <br />
          и были на торжестве в самый лучший
          <br />
          и трогательный день в нашей жизни!
        </p>
      </div>
    </div>
  );
}
