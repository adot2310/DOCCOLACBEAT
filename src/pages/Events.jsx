import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function Events() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const done = events.filter((e) => e.status === "done");

  return (
    <div>
      <h1>Sự kiện</h1>
      <p>Danh sách event của Doc Co Lac Beat</p>

      <h2 style={{ marginTop: 24 }}>Sắp diễn ra</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {upcoming.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <h2 style={{ marginTop: 24 }}>Đã diễn ra</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {done.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
