export default function GuestSurveySection() {
  return (
    <div
      className="w-full relative flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/1f48ce64-369e-462b-9a28-e64d64bf627a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        padding: "0 28px",
      }}
    >
      <div
        className="absolute left-0 right-0 flex flex-col items-center text-center"
        style={{
          maxWidth: "380px",
          top: "45%",
          transform: "translateY(-50%)",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(15px, 4.2vw, 18px)",
            lineHeight: 1.7,
            color: "#2c5a8a",
            letterSpacing: "0.03em",
            marginTop: "20px",
          }}
        >
          Нам важно, чтобы в этот день вам было легко и комфортно, поэтому будем
          рады, если вы поделитесь своими предпочтениями в небольшой анкете ниже.
          🤍
        </p>

        <a
          href="#anketa"
          className="relative"
          style={{
            display: "inline-block",
            padding: "16px 48px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(15px, 4vw, 19px)",
            color: "#2c5a8a",
            letterSpacing: "0.15em",
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            textDecoration: "none",
            cursor: "pointer",
            minWidth: "240px",
            marginTop: "32px",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 240 56"
            preserveAspectRatio="none"
            fill="none"
            style={{ overflow: "visible" }}
          >
            <rect
              x="6"
              y="6"
              width="228"
              height="44"
              rx="2"
              stroke="#2c5a8a"
              strokeWidth="1.2"
            />
            <path d="M20 0 L220 0" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M20 56 L220 56" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M0 16 L0 40" stroke="#2c5a8a" strokeWidth="0.8" />
            <path d="M240 16 L240 40" stroke="#2c5a8a" strokeWidth="0.8" />
            <path
              d="M20 0 Q0 0 0 16"
              stroke="#2c5a8a"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M220 0 Q240 0 240 16"
              stroke="#2c5a8a"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M20 56 Q0 56 0 40"
              stroke="#2c5a8a"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M220 56 Q240 56 240 40"
              stroke="#2c5a8a"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
          Анкета гостя
        </a>
      </div>
    </div>
  );
}