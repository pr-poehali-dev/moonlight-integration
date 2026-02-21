interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div
          className="text-sm uppercase tracking-[0.25em]"
          style={{ color: "var(--wedding-blue-pale)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          I & A
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="uppercase text-xs tracking-widest transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            О нас
          </a>
          <a
            href="#details"
            className="uppercase text-xs tracking-widest transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--wedding-white)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Детали
          </a>
        </nav>
      </div>
    </header>
  );
}
