export default function Featured() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full"
      style={{ backgroundColor: "#f7f5f2", paddingBottom: "0" }}
    >
      {/* Цветок над аркой */}
      <div
        className="relative z-10 flex justify-center"
        style={{ marginBottom: "-60px" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/63669907-0cf9-4174-b75c-08392eac366c.jpg"
          alt="цветок"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
            position: "relative",
            zIndex: 10,
          }}
        />
      </div>

      {/* Синяя арка */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{
          backgroundColor: "#3a6186",
          borderRadius: "50% 50% 0 0 / 8% 8% 0 0",
          paddingTop: "80px",
          paddingBottom: "60px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* Буква Д декоративная */}
        <div className="flex items-start justify-center mb-4">
          <span
            className="italic leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(72px, 20vw, 130px)",
              color: "rgba(255,255,255,0.15)",
              lineHeight: 0.85,
              marginRight: "-8px",
              userSelect: "none",
            }}
          >
            Д
          </span>
          <div className="flex flex-col items-start pt-4">
            <p
              className="uppercase font-semibold text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 4vw, 22px)",
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

        {/* Основной текст */}
        <p
          className="text-center uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(9px, 2.5vw, 12px)",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.2em",
            lineHeight: 1.9,
            maxWidth: "360px",
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
