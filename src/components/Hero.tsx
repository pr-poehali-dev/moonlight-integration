import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: "var(--wedding-white)" }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/files/aaede4b6-2f4c-439f-99c0-8b1d4f651454.jpg"
          alt="Иван и Алёна"
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.55) saturate(0.7)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(58,97,134,0.35) 0%, rgba(44,79,107,0.55) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 flex flex-col items-center"
      >
        <p
          className="uppercase tracking-[0.35em] text-xs md:text-sm mb-6"
          style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          Иван & Алёна
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-[9rem] leading-none mb-6 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--wedding-white)",
            letterSpacing: "0.02em",
          }}
        >
          Wedding
          <br />
          <span style={{ color: "var(--wedding-blue-pale)" }}>Day</span>
        </h1>

        <div
          className="w-16 h-px my-6"
          style={{ backgroundColor: "var(--wedding-blue-light)" }}
        />

        <p
          className="uppercase tracking-[0.2em] text-sm"
          style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          15 апреля 2026
        </p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif" }}
        >
          листайте
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 32, backgroundColor: "var(--wedding-blue-pale)" }}
        />
      </motion.div>
    </div>
  );
}
