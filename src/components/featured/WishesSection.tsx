export default function WishesSection() {
  return (
    <div
      className="w-full relative flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/bucket/41474a79-af81-4e92-899b-69171fe90570.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        padding: "0 28px",
      }}
    >
      <div
        className="absolute left-0 right-0 flex flex-col items-center text-center"
        style={{
          maxWidth: "420px",
          top: "50%",
          transform: "translateY(-50%)",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <p
          className="uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 5vw, 24px)",
            color: "#2c5a8a",
            letterSpacing: "0.22em",
            marginBottom: "24px",
          }}
        >
          Пожелания
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 3.6vw, 15px)",
            lineHeight: 1.65,
            color: "#2c5a8a",
            letterSpacing: "0.03em",
          }}
        >
          Нам очень важно, чтобы наш праздник был наполнен теплом и смыслом.
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 3.6vw, 15px)",
            lineHeight: 1.65,
            color: "#2c5a8a",
            letterSpacing: "0.03em",
            marginTop: "10px",
          }}
        >
          Поэтому вместо букетов и алкоголя мы будем рады корму, пледам, игрушкам
          или другим полезным вещам для приюта.
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "clamp(13px, 3.6vw, 15px)",
            lineHeight: 1.65,
            color: "#2c5a8a",
            letterSpacing: "0.03em",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          Для нас это лучший подарок — знать, что благодаря нашему дню кто-то
          получит миску еды, мягкое место для сна и немного человеческой заботы.
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(12px, 3.4vw, 14px)",
            lineHeight: 1.65,
            color: "rgba(44,90,138,0.7)",
            letterSpacing: "0.05em",
            marginTop: "14px",
          }}
        >
          Иногда маленький жест меняет целую жизнь.
        </p>
      </div>
    </div>
  );
}