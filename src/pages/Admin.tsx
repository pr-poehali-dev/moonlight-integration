import { useState, useEffect, useCallback } from "react";

const API_URL = "https://functions.poehali.dev/bfb04327-2f98-434b-9017-85467acf0431";

const FOOD_LABELS: Record<string, string> = {
  meat: "Мясо",
  fish: "Рыба",
};

const DRINK_LABELS: Record<string, string> = {
  white_wine: "Белое вино",
  red_wine: "Красное вино",
  sparkling: "Игристое",
  whiskey: "Виски",
  rum: "Ром",
  cognac: "Коньяк",
  vodka: "Водка",
  no_alcohol: "Без алкоголя",
};

interface Survey {
  id: number;
  full_name: string;
  will_attend: boolean;
  food_preference: string;
  drinks: string[];
  allergies: string;
  created_at: string;
}

interface Stats {
  total: number;
  attending: number;
  not_attending: number;
  food: Record<string, number>;
  drinks: Record<string, number>;
}

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem("admin_token") || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setIsLogging(true);
    setLoginError("");
    try {
      const res = await fetch(`${API_URL}?action=login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        sessionStorage.setItem("admin_token", data.token);
      } else {
        setLoginError(data.error || "Ошибка входа");
      }
    } catch {
      setLoginError("Не удалось подключиться к серверу");
    } finally {
      setIsLogging(false);
    }
  };

  const loadSurveys = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?action=surveys`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.surveys) {
        setSurveys(data.surveys);
        setStats(data.stats);
      } else if (data.error) {
        setToken("");
        sessionStorage.removeItem("admin_token");
      }
    } catch {
      console.error("Failed to load surveys");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) loadSurveys();
  }, [token, loadSurveys]);

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить эту анкету?")) return;
    try {
      await fetch(`${API_URL}?action=delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ id }),
      });
      loadSurveys();
    } catch {
      console.error("Failed to delete");
    }
  };

  const handleLogout = () => {
    setToken("");
    sessionStorage.removeItem("admin_token");
  };

  if (!token) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f9f7f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}>
        <div style={{
          maxWidth: "360px",
          width: "100%",
          background: "white",
          borderRadius: "12px",
          padding: "40px 32px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "#2c5a8a",
            textAlign: "center",
            marginBottom: "28px",
            letterSpacing: "0.1em",
          }}>
            Вход в панель
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логин"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              style={{
                padding: "12px 16px",
                border: "1px solid rgba(44,90,138,0.2)",
                borderRadius: "6px",
                fontSize: "16px",
                fontFamily: "'Cormorant Garamond', serif",
                outline: "none",
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              style={{
                padding: "12px 16px",
                border: "1px solid rgba(44,90,138,0.2)",
                borderRadius: "6px",
                fontSize: "16px",
                fontFamily: "'Cormorant Garamond', serif",
                outline: "none",
              }}
            />
            {loginError && (
              <p style={{ color: "#c44", fontSize: "14px", textAlign: "center" }}>
                {loginError}
              </p>
            )}
            <button
              onClick={handleLogin}
              disabled={isLogging}
              style={{
                padding: "12px",
                background: "#2c5a8a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                cursor: isLogging ? "default" : "pointer",
                letterSpacing: "0.08em",
              }}
            >
              {isLogging ? "Вхожу..." : "Войти"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f7f4",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 5vw, 28px)",
            fontWeight: 600,
            color: "#2c5a8a",
            letterSpacing: "0.1em",
          }}>
            Анкеты гостей
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={loadSurveys} style={smallBtnStyle}>
              Обновить
            </button>
            <button onClick={handleLogout} style={{ ...smallBtnStyle, background: "rgba(200,60,60,0.1)", color: "#c44" }}>
              Выйти
            </button>
          </div>
        </div>

        {loading && <p style={{ color: "#2c5a8a", textAlign: "center" }}>Загрузка...</p>}

        {stats && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
            marginBottom: "24px",
          }}>
            <StatCard label="Всего ответов" value={stats.total} />
            <StatCard label="Придут" value={stats.attending} color="#2a7d4f" />
            <StatCard label="Не придут" value={stats.not_attending} color="#c44" />
          </div>
        )}

        {stats && stats.attending > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Еда</h3>
              {Object.entries(stats.food).map(([key, count]) => (
                <div key={key} style={statRowStyle}>
                  <span>{FOOD_LABELS[key] || key}</span>
                  <span style={{ fontWeight: 600 }}>{count}</span>
                </div>
              ))}
              {Object.keys(stats.food).length === 0 && (
                <p style={{ opacity: 0.5, fontSize: "14px" }}>Нет данных</p>
              )}
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Напитки</h3>
              {Object.entries(stats.drinks)
                .sort(([, a], [, b]) => b - a)
                .map(([key, count]) => (
                  <div key={key} style={statRowStyle}>
                    <span>{DRINK_LABELS[key] || key}</span>
                    <span style={{ fontWeight: 600 }}>{count}</span>
                  </div>
                ))}
              {Object.keys(stats.drinks).length === 0 && (
                <p style={{ opacity: 0.5, fontSize: "14px" }}>Нет данных</p>
              )}
            </div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {surveys.map((s) => (
            <div key={s.id} style={{
              ...cardStyle,
              borderLeft: s.will_attend
                ? "3px solid #2a7d4f"
                : "3px solid #c44",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
                flexWrap: "wrap",
              }}>
                <div>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#2c5a8a",
                  }}>
                    {s.full_name}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    color: s.will_attend ? "#2a7d4f" : "#c44",
                    fontWeight: 500,
                    marginTop: "2px",
                  }}>
                    {s.will_attend ? "✓ Придёт" : "✕ Не придёт"}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <p style={{
                    fontSize: "12px",
                    color: "rgba(44,90,138,0.5)",
                    whiteSpace: "nowrap",
                  }}>
                    {s.created_at ? new Date(s.created_at).toLocaleString("ru-RU") : ""}
                  </p>
                  <button
                    onClick={() => handleDelete(s.id)}
                    style={{
                      padding: "4px 10px",
                      fontSize: "12px",
                      color: "#c44",
                      background: "rgba(200,60,60,0.08)",
                      border: "1px solid rgba(200,60,60,0.2)",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>

              {s.will_attend && (
                <div style={{ marginTop: "10px", fontSize: "14px", color: "#2c5a8a" }}>
                  {s.food_preference && (
                    <p>Еда: <b>{FOOD_LABELS[s.food_preference] || s.food_preference}</b></p>
                  )}
                  {s.drinks.length > 0 && (
                    <p>Напитки: <b>{s.drinks.map((d) => DRINK_LABELS[d] || d).join(", ")}</b></p>
                  )}
                  {s.allergies && (
                    <p style={{ color: "#c44" }}>Аллергии: <b>{s.allergies}</b></p>
                  )}
                </div>
              )}
            </div>
          ))}

          {!loading && surveys.length === 0 && (
            <p style={{
              textAlign: "center",
              color: "rgba(44,90,138,0.5)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              padding: "40px 0",
            }}>
              Пока никто не заполнил анкету
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "#2c5a8a" }: { label: string; value: number; color?: string }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "32px",
        fontWeight: 700,
        color,
      }}>
        {value}
      </p>
      <p style={{ fontSize: "13px", color: "rgba(44,90,138,0.6)", marginTop: "4px" }}>
        {label}
      </p>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "16px",
  fontWeight: 600,
  color: "#2c5a8a",
  marginBottom: "8px",
};

const statRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "4px 0",
  fontSize: "14px",
  color: "#2c5a8a",
  borderBottom: "1px solid rgba(44,90,138,0.08)",
};

const smallBtnStyle: React.CSSProperties = {
  padding: "8px 16px",
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "14px",
  fontWeight: 600,
  color: "#2c5a8a",
  background: "rgba(44,90,138,0.08)",
  border: "1px solid rgba(44,90,138,0.15)",
  borderRadius: "6px",
  cursor: "pointer",
};