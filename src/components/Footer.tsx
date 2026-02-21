export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-10 px-6 sm:px-10 h-full w-full flex flex-col justify-between"
            style={{ backgroundColor: "var(--wedding-blue-dark)" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2">
                <h3
                  className="mb-2 uppercase tracking-widest text-xs"
                  style={{ color: "var(--wedding-blue-light)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Программа дня
                </h3>
                <span
                  className="text-sm"
                  style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  15:30 — Сбор гостей
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  16:00 — Церемония
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  17:00 — Банкет
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="mb-2 uppercase tracking-widest text-xs"
                  style={{ color: "var(--wedding-blue-light)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Связаться
                </h3>
                <span
                  className="text-sm"
                  style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  Иван: +7 (900) 000-00-00
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  Алёна: +7 (900) 000-00-01
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  color: "var(--wedding-white)",
                  letterSpacing: "-0.02em",
                }}
              >
                I & A
              </h1>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                15 апреля 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
