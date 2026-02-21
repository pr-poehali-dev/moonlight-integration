import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#f7f5f2", minHeight: "100vh", paddingTop: "72px", paddingBottom: "48px" }}
    >
      {/* Имена вверху */}
      <p
        className="uppercase tracking-[0.45em] text-center mb-4"
        style={{ color: "#3a6186", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "11px" }}
      >
        Иван &amp; Алёна
      </p>

      {/* Слово WEDDING + фото + DAY — всё в одной колонке */}
      <div className="relative flex flex-col items-center w-full">

        {/* WEDDING — крупно, за фото */}
        <div
          className="relative z-0 text-center leading-none select-none italic pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(64px, 17vw, 200px)",
            color: "#c8dff0",
            marginBottom: "-0.18em",
            lineHeight: 1,
          }}
        >
          Wedding
        </div>

        {/* Фото квадратное поверх букв */}
        <motion.div
          style={{ y }}
          className="relative z-10 overflow-hidden shadow-xl"
          style2={{ y }}
          sx={{
            width: "min(56vw, 320px)",
            aspectRatio: "1 / 1",
          }}
        >
          <img
            src="https://cdn.poehali.dev/files/aaede4b6-2f4c-439f-99c0-8b1d4f651454.jpg"
            alt="Иван и Алёна"
            style={{
              width: "min(56vw, 320px)",
              height: "min(56vw, 320px)",
              objectFit: "cover",
              objectPosition: "top",
              filter: "grayscale(100%)",
              display: "block",
            }}
          />
        </motion.div>

        {/* DAY */}
        <div
          className="relative z-0 text-center leading-none select-none italic pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(64px, 17vw, 200px)",
            color: "#c8dff0",
            marginTop: "-0.18em",
            lineHeight: 1,
          }}
        >
          Day
        </div>
      </div>

      {/* Подпись под всем */}
      <div className="flex flex-col items-center mt-8 gap-2 px-8 text-center">
        <p
          className="uppercase text-center"
          style={{ color: "#5a7a99", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "10px", letterSpacing: "0.22em" }}
        >
          Этот особенный для нас день,
          <br />
          который мы хотим разделить с вами
        </p>
      </div>
    </div>
  );
}
