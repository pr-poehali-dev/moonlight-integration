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
        <div className="flex flex-col w-[90%] mb-5" style={{ marginTop: "-80px" }}>
          <div className="flex items-start w-full">
            <span
              className="leading-none"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                fontSize: "clamp(58px, 16vw, 100px)",
                color: "rgba(255,255,255,0.12)",
                lineHeight: 0.8,
                marginRight: "-2px",
                userSelect: "none",
              }}
            >
              Д
            </span>
            <p
              className="uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 4.5vw, 22px)",
                color: "#ffffff",
                letterSpacing: "0.18em",
                lineHeight: 1.35,
                paddingTop: "8px",
                whiteSpace: "nowrap",
              }}
            >
              ОРОГИЕ РОДНЫЕ
            </p>
          </div>
          <p
            className="uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 4.5vw, 22px)",
              color: "#ffffff",
              letterSpacing: "0.18em",
              lineHeight: 1.35,
              alignSelf: "flex-end",
              marginTop: "-14px",
            }}
          >
            И ДРУЗЬЯ!
          </p>
        </div>

        <div className="w-[90%]">
          <p
            className="text-left"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 3.5vw, 15px)",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
            }}
          >
            Совсем скоро начнётся новая глава нашей жизни — мы станем семьёй.
          </p>
          <p
            className="text-left mt-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 3.5vw, 15px)",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
            }}
          >
            Нам бесконечно важно, чтобы именно вы разделили с нами эту радость
            и были рядом в начале нашей семейной истории, наполнив этот день
            своим теплом, улыбками и искренними объятиями.
          </p>
        </div>
      </div>
    </div>
  );
}