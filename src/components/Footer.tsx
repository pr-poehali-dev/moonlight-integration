export default function Footer() {
  return (
    <div
      className="w-full flex flex-col justify-between items-center"
      style={{ backgroundColor: "#3a6186", paddingTop: "48px", paddingBottom: "40px", minHeight: "320px" }}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <p
          className="uppercase tracking-[0.35em]"
          style={{ color: "rgba(200,223,240,0.7)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "10px" }}
        >
          Ждём вас
        </p>
        <p
          className="leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, maxWidth: "280px", fontSize: "12px" }}
        >
          По всем вопросам обращайтесь к организаторам
        </p>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h1
          className="italic text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "min(28vw, 120px)",
            color: "#ffffff",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          I &amp; A
        </h1>
        <p
          className="uppercase tracking-[0.35em] mt-4"
          style={{ color: "rgba(200,223,240,0.5)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "9px" }}
        >
          с любовью
        </p>
      </div>
    </div>
  );
}
