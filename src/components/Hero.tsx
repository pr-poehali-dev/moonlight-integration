import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "12vh"]);

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#f7f5f2", paddingTop: "56px", paddingBottom: "0" }}
    >
      {/* Wedding — смещён влево, каллиграфический */}
      <div className="relative w-full" style={{ marginBottom: "-0.35em" }}>
        <div
          className="select-none pointer-events-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            fontSize: "min(24vw, 115px)",
            color: "#b8d4e8",
            lineHeight: 1,
            textAlign: "left",
            paddingLeft: "5%",
          }}
        >
          Wedding
        </div>
      </div>

      {/* Фото с градиентным растворением */}
      <motion.div
        style={{ y }}
        className="relative z-10"
      >
        <div
          style={{
            width: "min(60vw, 270px)",
            height: "min(72vw, 320px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="https://cdn.poehali.dev/files/aaede4b6-2f4c-439f-99c0-8b1d4f651454.jpg"
            alt="Иван и Алёна"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
          {/* Градиентная маска — растворение к краям */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `
                linear-gradient(to right, #f7f5f2 0%, transparent 18%, transparent 82%, #f7f5f2 100%),
                linear-gradient(to bottom, #f7f5f2 0%, transparent 12%, transparent 85%, #f7f5f2 100%)
              `,
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>

      {/* Day — смещён вправо, каллиграфический */}
      <div className="relative w-full" style={{ marginTop: "-0.35em" }}>
        <div
          className="select-none pointer-events-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            fontSize: "min(24vw, 115px)",
            color: "#b8d4e8",
            lineHeight: 1,
            textAlign: "right",
            paddingRight: "8%",
          }}
        >
          Day
        </div>
      </div>
    </div>
  );
}
