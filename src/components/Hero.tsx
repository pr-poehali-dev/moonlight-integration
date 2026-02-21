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
      className="relative flex flex-col items-center"
      style={{ backgroundColor: "#f9f7f4", paddingTop: "56px", paddingBottom: "0", overflow: "visible" }}
    >
      {/* Wedding — z-30 верхний слой, не обрезается */}
      <div
        className="relative w-full"
        style={{ marginBottom: "calc(-0.55em - 20px)", zIndex: 30, overflow: "visible" }}
      >
        <div
          className="select-none pointer-events-none apple-shimmer-text"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            fontSize: "min(24vw, 115px)",
            lineHeight: 1.2,
            textAlign: "left",
            paddingLeft: "5%",
            paddingTop: "0.15em",
          }}
        >
          Wedding
        </div>
      </div>

      {/* Фото — под Wedding/Day */}
      <motion.div
        style={{ y }}
        className="relative"
        style2={{ zIndex: 5 }}
      >
        <div
          style={{
            width: "min(60vw, 270px)",
            height: "min(72vw, 320px)",
            position: "relative",
            overflow: "visible",
            zIndex: 5,
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
              filter: "saturate(0.45) brightness(1.08) contrast(0.9)",
              maskImage: "radial-gradient(ellipse 70% 65% at 50% 45%, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 45%, black 40%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Day — z-30 верхний слой */}
      <div
        className="relative w-full"
        style={{ marginTop: "calc(-0.55em - 20px)", paddingBottom: "0.3em", zIndex: 30, overflow: "visible" }}
      >
        <div
          className="select-none pointer-events-none apple-shimmer-text"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            fontSize: "min(24vw, 115px)",
            lineHeight: 1.15,
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