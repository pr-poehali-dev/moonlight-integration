export default function Featured() {
  const details = [
    {
      icon: "📍",
      label: "Место",
      value: "Ресторан «Антихрупкость»",
      sub: "Москва, ул. Садовая, 12",
    },
    {
      icon: "🕔",
      label: "Начало торжества",
      value: "16:00",
      sub: "Сбор гостей с 15:30",
    },
    {
      icon: "🥂",
      label: "Дресс-код",
      value: "Голубые и белые тона",
      sub: "Приветствуются пастельные оттенки",
    },
  ];

  return (
    <div
      id="details"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-20 lg:py-0"
      style={{ backgroundColor: "var(--wedding-white)" }}
    >
      <div className="flex-1 h-[480px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/aaede4b6-2f4c-439f-99c0-8b1d4f651454.jpg"
          alt="Иван и Алёна"
          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div
        id="about"
        className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:pr-16 lg:order-1"
      >
        <p
          className="uppercase tracking-[0.3em] text-xs mb-6"
          style={{ color: "var(--wedding-blue)", fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          Дорогие друзья и родные
        </p>

        <h2
          className="text-4xl lg:text-6xl mb-8 leading-tight italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--wedding-text)",
          }}
        >
          Мы хотим разделить{" "}
          <span style={{ color: "var(--wedding-blue)" }}>
            этот особенный день
          </span>{" "}
          с вами
        </h2>

        <p
          className="text-sm leading-relaxed mb-12 max-w-md"
          style={{ color: "#6b7d8c", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          Этот день — начало нашей общей истории. Истории о любви, которая стала
          сильнее от испытаний и ярче от времени.{" "}
          <em>Антихрупкость</em> — это когда всё, что нас не ломает,
          делает нас крепче. Именно так мы чувствуем нашу любовь.
        </p>

        <div className="flex flex-col gap-6">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
                style={{ backgroundColor: "var(--wedding-blue-pale)" }}
              >
                {d.icon}
              </div>
              <div>
                <p
                  className="uppercase tracking-widest text-xs mb-1"
                  style={{ color: "var(--wedding-blue-light)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {d.label}
                </p>
                <p
                  className="text-base font-medium"
                  style={{ color: "var(--wedding-text)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
                >
                  {d.value}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#8fa3b3", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {d.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
