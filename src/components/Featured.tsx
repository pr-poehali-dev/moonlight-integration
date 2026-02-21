export default function Featured() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full"
      style={{ backgroundColor: "#f9f7f4", paddingBottom: "0" }}
    >
      {/* Полукруг с лебедями поверх */}
      <div
        className="relative w-full"
        style={{ marginTop: "20px" }}
      >
        {/* Лебеди — по центру, поверх полукруга */}
        <div
          className="absolute z-10"
          style={{
            top: "-90px",
            left: "25%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src="https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/df08f66f-e1aa-48c1-9124-320e18b4a730.png"
            alt="лебеди"
            className="apple-shimmer-img"
            style={{
              width: "330px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <svg
          viewBox="0 0 480 240"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ display: "block" }}
        >
          <ellipse cx="240" cy="240" rx="250" ry="240" fill="#3a6186" />
        </svg>
      </div>

      {/* Сплошная синяя заливка с контентом */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{
          backgroundColor: "#3a6186",
          paddingTop: "0",
          paddingBottom: "48px",
          paddingLeft: "28px",
          paddingRight: "28px",
          marginTop: "-2px",
        }}
      >
        <div className="flex items-start justify-center mb-5">
          <span
            className="leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "clamp(58px, 16vw, 100px)",
              color: "rgba(255,255,255,0.12)",
              lineHeight: 0.85,
              marginRight: "-4px",
              userSelect: "none",
            }}
          >
            Д
          </span>
          <div className="flex flex-col items-start pt-2">
            <p
              className="uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(13px, 3.8vw, 18px)",
                color: "#ffffff",
                letterSpacing: "0.14em",
                lineHeight: 1.35,
              }}
            >
              ОРОГИЕ РОДНЫЕ
              <br />И ДРУЗЬЯ!
            </p>
          </div>
        </div>

        <p
          className="text-center"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(10px, 2.8vw, 13px)",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.04em",
            lineHeight: 1.85,
            maxWidth: "360px",
          }}
        >
          Совсем скоро начнётся новая глава нашей жизни — мы станем семьёй.
        </p>
        <p
          className="text-center mt-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(10px, 2.8vw, 13px)",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.04em",
            lineHeight: 1.85,
            maxWidth: "360px",
          }}
        >
          Нам бесконечно важно, чтобы именно вы разделили с нами эту радость
          и были рядом в начале нашей семейной истории, наполнив этот день
          своим теплом, улыбками и искренними объятиями.
        </p>
      </div>
    </div>
  );
}