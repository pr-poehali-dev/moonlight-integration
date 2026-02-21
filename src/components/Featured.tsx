export default function Featured() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full"
      style={{ backgroundColor: "#f7f5f2", paddingBottom: "0" }}
    >
      {/* Лебеди без фона */}
      <div
        className="relative z-10 flex justify-center"
        style={{ marginBottom: "-44px" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/58b25a8c-998e-44c6-8307-0cbd3013a302.jpg"
          alt="лебеди"
          style={{
            width: "110px",
            height: "95px",
            objectFit: "contain",
            position: "relative",
            zIndex: 10,
          }}
        />
      </div>

      {/* Полукруглый переход в синий — более выраженная арка */}
      <div
        className="relative w-full flex flex-col items-center overflow-hidden"
        style={{
          backgroundColor: "#3a6186",
          borderRadius: "50% 50% 0 0 / 16% 16% 0 0",
          paddingTop: "68px",
          paddingBottom: "48px",
          paddingLeft: "28px",
          paddingRight: "28px",
        }}
      >
        {/* Заголовок — большая каллиграфическая Д + остальное капсом */}
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

        {/* Основной текст — не uppercase, как в референсе мелким шрифтом */}
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
