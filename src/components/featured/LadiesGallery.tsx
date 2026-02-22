import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const slides = [
  {
    id: 0,
    type: "title" as const,
    image:
      "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/a692391e-8e2c-4cb9-9148-d6669a39b52f.jpg",
    label: "Silver Blue",
  },
  {
    id: 1,
    type: "look" as const,
    image:
      "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/b8ebd1d4-201a-456e-a951-d6c62689881f.jpg",
    label: "Silver",
  },
  {
    id: 2,
    type: "look" as const,
    image:
      "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/481be955-d943-41f5-b026-2ff1e421ac84.jpg",
    label: "Blue",
  },
  {
    id: 3,
    type: "look" as const,
    image:
      "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/fd073dae-53e8-48d1-848a-9dd3f54644bb.jpg",
    label: "Silver Satin",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

interface LadiesGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LadiesGallery({ isOpen, onClose }: LadiesGalleryProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback(
    (newDirection: number) => {
      const nextPage = page + newDirection;
      const nextIndex =
        ((nextPage % slides.length) + slides.length) % slides.length;
      if (nextIndex >= 0 && nextIndex < slides.length) {
        setPage([nextPage, newDirection]);
      }
    },
    [page]
  );

  const goToSlide = useCallback(
    (index: number) => {
      const diff = index - slideIndex;
      if (diff !== 0) {
        setPage([page + diff, diff > 0 ? 1 : -1]);
      }
    },
    [slideIndex, page]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipe = swipePower(info.offset.x, info.velocity.x);
      if (swipe < -swipeConfidenceThreshold && slideIndex < slides.length - 1) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold && slideIndex > 0) {
        paginate(-1);
      }
    },
    [paginate, slideIndex]
  );

  // Reset to first slide when opening
  useEffect(() => {
    if (isOpen) {
      setPage([0, 0]);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && slideIndex < slides.length - 1)
        paginate(1);
      if (e.key === "ArrowLeft" && slideIndex > 0) paginate(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, paginate, slideIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(44,90,138,0.92) 0%, rgba(26,26,46,0.96) 50%, rgba(44,90,138,0.92) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            onClick={onClose}
          />

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 z-50 flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              cursor: "pointer",
            }}
            onClick={onClose}
            whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>

          {/* Main content */}
          <motion.div
            ref={containerRef}
            className="relative w-full h-full flex flex-col items-center justify-center"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Slide counter */}
            <motion.div
              className="absolute top-5 left-1/2 -translate-x-1/2 z-30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {slideIndex + 1} / {slides.length}
              </p>
            </motion.div>

            {/* Carousel area */}
            <div
              className="relative w-full flex-1 flex items-center justify-center overflow-hidden"
              style={{ maxHeight: "calc(100vh - 140px)", marginTop: "50px" }}
            >
              {/* Navigation arrows */}
              {slideIndex > 0 && (
                <motion.button
                  className="absolute left-3 z-20 flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => paginate(-1)}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 3L5 8L10 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              )}

              {slideIndex < slides.length - 1 && (
                <motion.button
                  className="absolute right-3 z-20 flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => paginate(1)}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              )}

              {/* Slides */}
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 350,
                      damping: 35,
                      mass: 0.8,
                    },
                    opacity: { duration: 0.3, ease: "easeInOut" },
                    scale: { duration: 0.3, ease: "easeInOut" },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className="absolute w-full h-full flex items-center justify-center px-4"
                  style={{ cursor: "grab" }}
                >
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{ maxWidth: "420px", height: "100%" }}
                  >
                    <motion.img
                      src={slides[slideIndex].image}
                      alt={slides[slideIndex].label}
                      className="select-none pointer-events-none"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: slides[slideIndex].type === "title" ? "8px" : "4px",
                        filter:
                          slides[slideIndex].type === "title"
                            ? "drop-shadow(0 20px 60px rgba(0,0,0,0.4))"
                            : "drop-shadow(0 15px 40px rgba(0,0,0,0.35))",
                      }}
                      layoutId={`slide-${slides[slideIndex].id}`}
                      draggable={false}
                    />

                    {/* Shimmer overlay for title slide */}
                    {slides[slideIndex].type === "title" && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          borderRadius: "8px",
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["200% 0", "-200% 0"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide label */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slides[slideIndex].label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "12px",
                }}
              >
                {slides[slideIndex].label}
              </motion.p>
            </AnimatePresence>

            {/* Dots */}
            <div
              className="flex items-center gap-2 z-30"
              style={{ marginTop: "14px", marginBottom: "24px" }}
            >
              {slides.map((slide, i) => (
                <motion.button
                  key={slide.id}
                  onClick={() => goToSlide(i)}
                  style={{
                    width: i === slideIndex ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  animate={{
                    width: i === slideIndex ? 28 : 8,
                    backgroundColor:
                      i === slideIndex
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.3)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    width: { type: "spring", stiffness: 400, damping: 30 },
                    backgroundColor: { duration: 0.2 },
                  }}
                />
              ))}
            </div>

            {/* Swipe hint - only show on first slide, then fade out */}
            {slideIndex === 0 && (
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: 3,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ opacity: 0.4 }}
                  >
                    <path
                      d="M7 4L13 10L7 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
