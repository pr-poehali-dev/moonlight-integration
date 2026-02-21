interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 flex justify-center py-5 ${className ?? ""}`}>
      <p
        style={{
          color: "#3a6186",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.45em",
        }}
      >
        Иван &amp; Алёна
      </p>
    </header>
  );
}