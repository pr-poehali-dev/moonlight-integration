export default function CalendarSection() {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        backgroundColor: "#f9f7f4",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(28px, 8vw, 38px)",
          color: "#2c5a8a",
          marginBottom: "24px",
        }}
      >
        Август 2026
      </p>

      <div
        className="grid grid-cols-7 w-[90%]"
        style={{ maxWidth: "380px", marginBottom: "12px" }}
      >
        {["Mon", "Tue", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].slice(0, 7).map((day, i) => {
          const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
          return (
            <span
              key={i}
              className="text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(13px, 3.5vw, 16px)",
                color: "#2c5a8a",
              }}
            >
              {days[i]}
            </span>
          );
        })}
      </div>

      <div
        className="grid grid-cols-7 w-[90%]"
        style={{ maxWidth: "380px" }}
      >
        {[17, 18, 19, 19, 20, 21, 22, 23].slice(0, 7).map((num, i) => {
          const nums = [17, 18, 19, 20, 21, 22, 23];
          const isWedding = nums[i] === 19;
          return (
            <div key={i} className="flex justify-center items-center" style={{ padding: "6px 0" }}>
              {isWedding ? (
                <div className="relative flex items-center justify-center">
                  <svg width="40" height="38" viewBox="0 0 40 38" fill="none">
                    <path
                      d="M20 36C20 36 2 24 2 13C2 6.4 7.4 2 13 2C16.4 2 19.2 3.8 20 6C20.8 3.8 23.6 2 27 2C32.6 2 38 6.4 38 13C38 24 20 36 20 36Z"
                      fill="#2c5a8a"
                    />
                  </svg>
                  <span
                    className="absolute"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "clamp(14px, 3.5vw, 17px)",
                      color: "#ffffff",
                      marginTop: "-2px",
                    }}
                  >
                    {nums[i]}
                  </span>
                </div>
              ) : (
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(15px, 4vw, 19px)",
                    color: "#2c5a8a",
                  }}
                >
                  {nums[i]}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
