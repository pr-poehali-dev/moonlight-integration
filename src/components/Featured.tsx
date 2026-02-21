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
          paddingBottom: "0",
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

        <div style={{ height: "16px" }} />
      </div>

      {/* Зеркальный полукруг снизу */}
      <div
        className="relative w-full"
        style={{ marginTop: "-2px" }}
      >
        <svg
          viewBox="0 0 480 240"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ display: "block" }}
        >
          <ellipse cx="240" cy="0" rx="250" ry="240" fill="#3a6186" />
        </svg>
      </div>

      {/* Календарь — Август 2026 */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          backgroundColor: "#f9f7f4",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(28px, 8vw, 38px)",
            color: "#2c5a8a",
            marginBottom: "24px",
          }}
        >
          Август 2026
        </p>

        {/* Дни недели */}
        <div
          className="grid grid-cols-7 w-[90%]"
          style={{ maxWidth: "380px", marginBottom: "12px" }}
        >
          {["Mon", "Tue", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].slice(0, 7).map((day, i) => {
            const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            return (
              <span
                key={i}
                className="text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 3.5vw, 16px)",
                  color: "#2c5a8a",
                }}
              >
                {days[i]}
              </span>
            );
          })}
        </div>

        {/* Числа */}
        <div
          className="grid grid-cols-7 w-[90%]"
          style={{ maxWidth: "380px" }}
        >
          {[17, 18, 19, 19, 20, 21, 22, 23].slice(0, 7).map((num, i) => {
            const nums = [17, 18, 19, 20, 21, 22, 23];
            const isWedding = nums[i] === 19;
            return (
              <div key={i} className="flex justify-center items-center" style={{ padding: "6px 0" }}>
                {isWedding ? (
                  <div className="relative flex items-center justify-center">
                    <svg width="40" height="38" viewBox="0 0 40 38" fill="none">
                      <path
                        d="M20 36C20 36 2 24 2 13C2 6.4 7.4 2 13 2C16.4 2 19.2 3.8 20 6C20.8 3.8 23.6 2 27 2C32.6 2 38 6.4 38 13C38 24 20 36 20 36Z"
                        fill="#2c5a8a"
                      />
                    </svg>
                    <span
                      className="absolute"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: "clamp(14px, 3.5vw, 17px)",
                        color: "#ffffff",
                        marginTop: "-2px",
                      }}
                    >
                      {nums[i]}
                    </span>
                  </div>
                ) : (
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "clamp(15px, 4vw, 19px)",
                      color: "#2c5a8a",
                    }}
                  >
                    {nums[i]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}