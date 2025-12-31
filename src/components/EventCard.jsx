import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const isUpcoming = event.status === "upcoming";
  const cover = Array.isArray(event.cover) ? event.cover[0] : event.cover;

  return (
    <div
      className="event-card"
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: "linear-gradient(180deg, #ffffff, #f8f9ff)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "all 0.35s ease",
      }}
    >
      {/* ===== COVER ===== */}
      <div
        style={{
          position: "relative",
          height: 190,
          background: "#0b0f24",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={cover}
          alt={event.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // QUAN TRỌNG: không cắt ảnh
            objectPosition: "center",
            filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.45))",
          }}
        />

        {/* overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div style={{ padding: 14 }}>
        {/* TITLE + STATUS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              background:
                "linear-gradient(90deg, #00f5ff, #7cffc4, #c77dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 12px rgba(0,245,255,0.35)",
            }}
          >
            {event.title}
          </h3>

          <span
            style={{
              fontSize: 12,
              padding: "4px 10px",
              borderRadius: 999,
              fontWeight: 600,
              color: isUpcoming ? "#00f5ff" : "#999",
              border: isUpcoming
                ? "1px solid rgba(0,245,255,0.6)"
                : "1px solid #ddd",
              background: isUpcoming
                ? "rgba(0,245,255,0.12)"
                : "#f1f1f1",
              boxShadow: isUpcoming
                ? "0 0 12px rgba(0,245,255,0.35)"
                : "none",
              whiteSpace: "nowrap",
            }}
          >
            {isUpcoming ? "Sắp diễn ra" : "Đã diễn ra"}
          </span>
        </div>

        {/* INFO */}
        <p style={{ margin: "10px 0", color: "#444", lineHeight: 1.6 }}>
          🗓️ {event.date} • ⏰ {event.time}
          <br />
          📍 {event.location}
        </p>

        {/* LINK */}
        <Link
          to={`/events/${event.id}`}
          style={{
            display: "inline-block",
            marginTop: 6,
            textDecoration: "none",
            fontWeight: 600,
            background: "linear-gradient(90deg, #00f5ff, #7cffc4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Xem chi tiết →
        </Link>
      </div>

      {/* hover effect */}
      <style>
        {`
          .event-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0,245,255,0.25);
          }
        `}
      </style>
    </div>
  );
}
