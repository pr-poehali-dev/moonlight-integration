import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, var(--wedding-blue-dark) 0%, var(--wedding-blue) 40%, var(--wedding-blue-light) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 50% 50%, white 0.5px, transparent 0.5px)",
              backgroundSize: "60px 60px, 80px 80px, 40px 40px",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-xs mb-8"
          style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          15 апреля 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl italic mb-8 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--wedding-white)",
          }}
        >
          Антихрупкость —<br />
          <span style={{ color: "var(--wedding-blue-pale)" }}>это любовь</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px mb-8"
          style={{ backgroundColor: "var(--wedding-blue-pale)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "rgba(200, 223, 240, 0.85)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          Хотим, чтобы вы разделили с нами радость и были на торжестве
          в самый лучший и трогательный день нашей жизни!
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-16 text-center">
        {[
          { num: "15", label: "апреля" },
          { num: "2026", label: "года" },
          { num: "∞", label: "любви" },
        ].map((item) => (
          <div key={item.label}>
            <p
              className="text-4xl md:text-5xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--wedding-white)", fontWeight: 300 }}
            >
              {item.num}
            </p>
            <p
              className="uppercase tracking-widest text-xs mt-1"
              style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
