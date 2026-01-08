import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function Events() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const done = events.filter((e) => e.status === "done");

  return (
    <div>
      <h1>Sự kiện</h1>
      <p>Danh sách event của Độc Cô Lạc Beat</p>

      <h2 style={{ marginTop: 24 }}>Sắp diễn ra</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",  // Sắp xếp các sự kiện theo cột (mỗi sự kiện là một dòng riêng biệt)
          gap: 16,  // Khoảng cách giữa các sự kiện
        }}
      >
        {upcoming.map((event) => (
          <div key={event.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Hiển thị thông tin sự kiện */}
            <EventCard event={event} />
            
            {/* Hiển thị video nếu có */}
            {event.videoUrl && (
              <div style={{ marginTop: 16 }}>
                <h3>Video sự kiện</h3>
                <video width="50%" height="auto" controls>
                  <source src={event.videoUrl} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              </div>
            )}

            {/* Chèn link TikTok */}
            <p>
              <a href="https://www.tiktok.com/@doccolacbeat" target="_blank" rel="noopener noreferrer" style={{ color: "#00f5ff", textDecoration: "none" }}>
                Ấn vào đây để xem trực tiếp trên kênh TikTok
              </a>
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 24 }}>Đã diễn ra</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",  // Sắp xếp các sự kiện theo cột
          gap: 16,  // Khoảng cách giữa các sự kiện
        }}
      >
        {done.map((event) => (
          <div key={event.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Hiển thị thông tin sự kiện */}
            <EventCard event={event} />
            
            {/* Hiển thị video nếu có */}
            {event.videoUrl && (
              <div style={{ marginTop: 16 }}>
                <h3>Video sự kiện</h3>
                <video width="100%" height="auto" controls>
                  <source src={event.videoUrl} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              </div>
            )}

            {/* Chèn link TikTok */}
            <p>
              <a href="https://www.tiktok.com/@doccolacbeat" target="_blank" rel="noopener noreferrer" style={{ color: "#00f5ff", textDecoration: "none" }}>
                Tiktok Độc Cô Lạc Beat
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
