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
            { time: "15:00", title: "Сбор гостей", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/a491489a-a09f-4d7d-81f8-57aa2b5b59a6.jpg" },
            { time: "16:00", title: "Церемония", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/8ff1203c-d547-4934-a37a-759a702eb1ab.jpg" },
            { time: "17:00", title: "Ужин", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/10728be5-3764-403a-91ea-25daa9ee4364.jpg" },
            { time: "21:00", title: "Вечеринка", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/5e81e210-b5cb-461d-bad8-5703ad2affa7.jpg" },
            { time: "23:00", title: "Финал", img: "https://cdn.poehali.dev/projects/da5d93b7-b242-4760-a09d-70b7a28ffd4f/files/659ae092-9174-4d07-bc4c-650d5cbad1d4.jpg" },
          ].map((item, i) => (
            <div key={i} className="flex items-center" style={{ minHeight: "130px" }}>
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "33%" }}
              >
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "140%",
                      height: "140%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      marginLeft: "-20%",
                      marginTop: "-20%",
                    }}
                  />
                </div>
              </div>
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
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>
              <div style={{ width: "67%", paddingLeft: "24px" }}>
                <p
                  className="uppercase"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(15px, 4.2vw, 19px)",
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
                    fontSize: "clamp(13px, 3.5vw, 16px)",
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