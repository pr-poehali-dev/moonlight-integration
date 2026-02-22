import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = "https://functions.poehali.dev/bfb04327-2f98-434b-9017-85467acf0431";

const DRINKS = [
  { id: "white_wine", label: "Белое вино" },
  { id: "red_wine", label: "Красное вино" },
  { id: "sparkling", label: "Игристое" },
  { id: "whiskey", label: "Виски" },
  { id: "rum", label: "Ром" },
  { id: "cognac", label: "Коньяк" },
  { id: "vodka", label: "Водка" },
  { id: "no_alcohol", label: "Не употребляю алкоголь" },
];

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
    transition: { type: "spring", damping: 30, stiffness: 300, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

interface GuestSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestSurveyModal({ isOpen, onClose }: GuestSurveyModalProps) {
  const [fullName, setFullName] = useState("");
  const [willAttend, setWillAttend] = useState<boolean | null>(null);
  const [foodPref, setFoodPref] = useState("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [allergies, setAllergies] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const alreadySubmitted = localStorage.getItem("guest_survey_submitted");
      if (alreadySubmitted) setIsSubmitted(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const toggleDrink = (id: string) => {
    if (id === "no_alcohol") {
      setDrinks(drinks.includes("no_alcohol") ? [] : ["no_alcohol"]);
      return;
    }
    const filtered = drinks.filter((d) => d !== "no_alcohol");
    if (filtered.includes(id)) {
      setDrinks(filtered.filter((d) => d !== id));
    } else {
      setDrinks([...filtered, id]);
    }
  };

  const handleSubmit = async () => {
    if (!fullName.trim()) {
      setError("Пожалуйста, укажите имя и фамилию");
      return;
    }
    if (willAttend === null) {
      setError("Пожалуйста, укажите, планируете ли присутствовать");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}?action=submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          will_attend: willAttend,
          food_preference: willAttend ? foodPref : "",
          drinks: willAttend ? drinks : [],
          allergies: allergies.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        localStorage.setItem("guest_survey_submitted", "true");
      } else {
        setError(data.error || "Ошибка при отправке");
      }
    } catch {
      setError("Не удалось отправить анкету. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    color: "#2c5a8a",
    border: "1px solid rgba(44,90,138,0.25)",
    borderRadius: "4px",
    background: "rgba(255,255,255,0.6)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: "17px",
    color: "#2c5a8a",
    letterSpacing: "0.05em",
    marginBottom: "8px",
    display: "block",
  };

  const checkboxStyle = (checked: boolean): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "4px",
    border: checked
      ? "1px solid rgba(44,90,138,0.5)"
      : "1px solid rgba(44,90,138,0.15)",
    background: checked
      ? "rgba(44,90,138,0.08)"
      : "rgba(255,255,255,0.4)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: "#2c5a8a",
  });

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
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(44,90,138,0.88) 0%, rgba(26,26,46,0.94) 50%, rgba(44,90,138,0.88) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            onClick={onClose}
          />

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.button>

          <motion.div
            className="relative w-full max-w-md mx-4 overflow-y-auto"
            style={{
              maxHeight: "90vh",
              borderRadius: "12px",
              background: "rgba(249,247,244,0.97)",
              backdropFilter: "blur(20px)",
              padding: "36px 28px 32px",
            }}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center" style={{ padding: "40px 0" }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "26px",
                  color: "#2c5a8a",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}>
                  Спасибо! 🤍
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "17px",
                  color: "#2c5a8a",
                  lineHeight: 1.6,
                  opacity: 0.8,
                }}>
                  Ваша анкета отправлена. Мы очень ждём вас!
                </p>
                <button
                  onClick={onClose}
                  style={{
                    marginTop: "32px",
                    padding: "12px 40px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#2c5a8a",
                    background: "rgba(44,90,138,0.08)",
                    border: "1px solid rgba(44,90,138,0.25)",
                    borderRadius: "4px",
                    cursor: "pointer",
                    letterSpacing: "0.1em",
                  }}
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(22px, 6vw, 28px)",
                  color: "#2c5a8a",
                  letterSpacing: "0.15em",
                  textAlign: "center",
                  textTransform: "uppercase",
                  marginBottom: "28px",
                }}>
                  Анкета гостя
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label style={labelStyle}>Имя и фамилия</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ваше имя и фамилия"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Планируете ли вы присутствовать?</label>
                    <div className="flex flex-col gap-2">
                      <div style={checkboxStyle(willAttend === true)} onClick={() => setWillAttend(true)}>
                        <span style={{ fontSize: "18px" }}>{willAttend === true ? "●" : "○"}</span>
                        С радостью буду
                      </div>
                      <div style={checkboxStyle(willAttend === false)} onClick={() => setWillAttend(false)}>
                        <span style={{ fontSize: "18px" }}>{willAttend === false ? "●" : "○"}</span>
                        К сожалению, не смогу
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {willAttend && (
                      <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <label style={labelStyle}>Предпочтения по еде</label>
                          <div className="flex flex-col gap-2">
                            <div style={checkboxStyle(foodPref === "meat")} onClick={() => setFoodPref("meat")}>
                              <span style={{ fontSize: "18px" }}>{foodPref === "meat" ? "●" : "○"}</span>
                              Мясо
                            </div>
                            <div style={checkboxStyle(foodPref === "fish")} onClick={() => setFoodPref("fish")}>
                              <span style={{ fontSize: "18px" }}>{foodPref === "fish" ? "●" : "○"}</span>
                              Рыба
                            </div>
                          </div>
                        </div>

                        <div>
                          <label style={labelStyle}>Предпочтения по напиткам</label>
                          <p style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "14px",
                            color: "rgba(44,90,138,0.6)",
                            marginBottom: "8px",
                          }}>
                            можно выбрать несколько вариантов
                          </p>
                          <div className="flex flex-col gap-2">
                            {DRINKS.map((drink) => (
                              <div
                                key={drink.id}
                                style={checkboxStyle(drinks.includes(drink.id))}
                                onClick={() => toggleDrink(drink.id)}
                              >
                                <span style={{ fontSize: "18px" }}>
                                  {drinks.includes(drink.id) ? "☑" : "☐"}
                                </span>
                                {drink.label}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label style={labelStyle}>
                            Аллергии или особенности питания
                          </label>
                          <p style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "14px",
                            color: "rgba(44,90,138,0.6)",
                            marginBottom: "8px",
                          }}>
                            пожалуйста, укажите при наличии
                          </p>
                          <textarea
                            value={allergies}
                            onChange={(e) => setAllergies(e.target.value)}
                            placeholder="Укажите при наличии..."
                            rows={3}
                            style={{
                              ...inputStyle,
                              resize: "vertical" as const,
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "15px",
                      color: "#c44",
                      textAlign: "center",
                    }}>
                      {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "white",
                      background: isSubmitting ? "rgba(44,90,138,0.5)" : "#2c5a8a",
                      border: "none",
                      borderRadius: "4px",
                      cursor: isSubmitting ? "default" : "pointer",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                      transition: "background 0.2s",
                    }}
                  >
                    {isSubmitting ? "Отправляю..." : "Отправить"}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
