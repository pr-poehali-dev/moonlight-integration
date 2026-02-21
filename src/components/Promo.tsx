export default function Promo() {
  // Апрель 2026: 1 апреля — среда (0=пн...6=вс)
  const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  // 1 апреля 2026 — среда (индекс 2)
  const firstDayIndex = 2;
  const totalDays = 30;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div
      id="details"
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: "#3a6186", paddingBottom: "60px" }}
    >
      {/* Заголовок месяца */}
      <p
        className="uppercase tracking-[0.35em] text-center mt-10 mb-6"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: "13px",
          color: "#ffffff",
          letterSpacing: "0.35em",
        }}
      >
        Апрель
      </p>

      {/* Календарь */}
      <div style={{ width: "min(90vw, 360px)" }}>
        {/* Дни недели */}
        <div className="grid grid-cols-7 mb-2">
          {days.map((d) => (
            <div
              key={d}
              className="text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "10px",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.1em",
                paddingBottom: "8px",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Числа */}
        <div className="grid grid-cols-7 gap-y-2">
          {cells.map((cell, i) => {
            const isWeddingDay = cell === 15;
            return (
              <div key={i} className="flex items-center justify-center" style={{ height: "40px" }}>
                {cell !== null && (
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: isWeddingDay ? "36px" : "32px",
                      height: isWeddingDay ? "36px" : "32px",
                      borderRadius: "50%",
                      border: isWeddingDay ? "1.5px solid rgba(255,255,255,0.7)" : "none",
                      position: "relative",
                    }}
                  >
                    {isWeddingDay && (
                      <span
                        style={{
                          position: "absolute",
                          fontSize: "18px",
                          top: "-4px",
                          right: "-4px",
                          lineHeight: 1,
                        }}
                      >
                        🤍
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: isWeddingDay ? 600 : 300,
                        fontSize: isWeddingDay ? "17px" : "15px",
                        color: "#ffffff",
                      }}
                    >
                      {cell}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
