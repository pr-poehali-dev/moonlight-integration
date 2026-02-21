export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] max-h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)]">
          <div
            className="py-8 px-8 h-full w-full flex flex-col justify-between items-center"
            style={{ backgroundColor: "#3a6186" }}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <p
                className="uppercase tracking-[0.35em] text-xs"
                style={{ color: "rgba(200,223,240,0.7)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Ждём вас
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, maxWidth: "280px" }}
              >
                По всем вопросам обращайтесь к организаторам
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h1
                className="italic text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(72px, 22vw, 160px)",
                  color: "#ffffff",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                }}
              >
                I &amp; A
              </h1>
              <p
                className="uppercase tracking-[0.35em] mt-4"
                style={{ color: "rgba(200,223,240,0.6)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "10px" }}
              >
                с любовью
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
