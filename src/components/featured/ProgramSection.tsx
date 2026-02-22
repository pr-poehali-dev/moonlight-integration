export default function ProgramSection() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundColor: "#3a6186",
        padding: "0 12px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "6px",
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10px",
          bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "6px",
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "10px",
          bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
        }}
      />

      <div style={{ padding: "40px 20px 48px" }}>
        <p
          className="uppercase text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 5.5vw, 26px)",
            color: "#ffffff",
            letterSpacing: "0.22em",
            marginBottom: "36px",
          }}
        >
          Программа дня
        </p>

        <div className="flex flex-col gap-0">
          {[
            { time: "15:00", title: "Сбор гостей", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/14bcd6c8-1e63-4e50-9017-46de9e418db6.jpg" },
            { time: "16:00", title: "Церемония", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/115b0ca5-45e8-4a64-864e-be786b27fd37.jpg" },
            { time: "17:00", title: "Ужин", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/73784bc6-b6cd-4b7a-8bde-df7902354aa2.jpg" },
            { time: "21:00", title: "Вечеринка", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/51522cd4-5f1c-495c-a323-adbd51dede89.jpg" },
            { time: "23:00", title: "Финал", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/187963a0-9fc6-4158-85b9-292bbe325bb3.jpg" },
          ].map((item, i) => (
            <div key={i} className="flex items-center" style={{ minHeight: "130px" }}>
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "33%" }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div style={{ width: "16px", flexShrink: 0 }} />
              <div
                className="flex-shrink-0"
                style={{
                  width: "1px",
                  alignSelf: "stretch",
                  backgroundColor: "rgba(255,255,255,0.25)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
              <div style={{ flex: 1, paddingLeft: "20px" }}>
                <p
                  className="uppercase"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 5vw, 24px)",
                    color: "#ffffff",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(14px, 3.8vw, 17px)",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: "4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
