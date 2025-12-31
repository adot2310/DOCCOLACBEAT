import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div>
        <h1>Không tìm thấy event</h1>
        <Link to="/events">← Quay lại</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/events">← Quay lại</Link>
      <h1>{event.title}</h1>
      <p>{event.date} • {event.time}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
    </div>
  );
}
