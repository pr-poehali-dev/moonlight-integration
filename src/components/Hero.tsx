import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"]);

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#f7f5f2", paddingTop: "56px", paddingBottom: "40px" }}
    >
      {/* Wedding — смещён влево */}
      <div className="relative w-full" style={{ marginBottom: "-0.15em" }}>
        <div
          className="select-none italic pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "min(22vw, 110px)",
            color: "#c8dff0",
            lineHeight: 1,
            textAlign: "left",
            paddingLeft: "6%",
          }}
        >
          Wedding
        </div>
      </div>

      {/* Фото по центру */}
      <motion.div
        style={{ y }}
        className="relative z-10 overflow-hidden"
      >
        <img
          src="https://cdn.poehali.dev/files/aaede4b6-2f4c-439f-99c0-8b1d4f651454.jpg"
          alt="Иван и Алёна"
          style={{
            width: "min(62vw, 280px)",
            height: "min(62vw, 280px)",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </motion.div>

      {/* Day — смещён вправо */}
      <div className="relative w-full" style={{ marginTop: "-0.15em" }}>
        <div
          className="select-none italic pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "min(22vw, 110px)",
            color: "#c8dff0",
            lineHeight: 1,
            textAlign: "right",
            paddingRight: "8%",
          }}
        >
          Day
        </div>
      </div>

      {/* Подпись */}
      <div className="flex flex-col items-center mt-8 gap-3 px-8 text-center">
        <p
          className="uppercase text-center"
          style={{
            color: "#5a7a99",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "9px",
            letterSpacing: "0.25em",
            lineHeight: 2,
          }}
        >
          Этот особенный для нас день,
          <br />
          который мы хотим
          <br />
          разделить с вами
        </p>
      </div>
    </div>
  );
}
