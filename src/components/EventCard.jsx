import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        overflow: "hidden",
        background: "white",
      }}
    >
      <img
        src={event.cover}
        alt={event.title}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />

      <div style={{ padding: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h3 style={{ margin: 0 }}>{event.title}</h3>
          <span
            style={{
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 999,
              border: "1px solid #ddd",
              height: "fit-content",
            }}
          >
            {event.status === "upcoming" ? "Sắp diễn ra" : "Đã diễn ra"}
          </span>
        </div>

        <p style={{ margin: "8px 0", color: "#444" }}>
          🗓️ {event.date} • ⏰ {event.time}
          <br />
          📍 {event.location}
        </p>

        <p style={{ margin: "8px 0", color: "#555" }}>{event.description}</p>

        <p style={{ margin: "8px 0", color: "#666", fontSize: 14 }}>
          📸 {event.photosCount} ảnh • 🎬 {event.videosCount} video
        </p>

        <Link to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
}
