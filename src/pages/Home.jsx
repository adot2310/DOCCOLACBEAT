import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { homeFeatured } from "../data/home";
import { comboHighlights, videoHighlights } from "../data/highlights";

function getMaxCombo(list) {
  if (!list || list.length === 0) return null;
  return list.reduce((best, cur) => (cur.combo > best.combo ? cur : best), list[0]);
}

export default function Home() {
  const slides = homeFeatured.bannerImages || [];
  const [idx, setIdx] = useState(0);

  const topCombo = useMemo(() => getMaxCombo(comboHighlights), []);
  const top3Combos = useMemo(() => {
    return [...comboHighlights].sort((a, b) => b.combo - a.combo).slice(0, 3);
  }, []);

  const latestVideos = useMemo(() => {
    if (!videoHighlights) return [];
    return [...videoHighlights].slice(0, 2);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="container">
      {/* HERO BANNER SLIDESHOW */}
      <div className="card cardGlow heroWrap" style={{ marginBottom: 14, height: 360 }}>
        {/* Slides */}
        {slides.map((url, i) => (
          <div
            key={`${i}-${url}`}
            className={`heroSlide ${i === idx ? "heroSlideActive" : ""}`}
            style={{ backgroundImage: `url(${url})` }}
            aria-hidden={i !== idx}
          />
        ))}

        {/* Strong FX layers */}
        <div className="heroGlowStrong" />
        <div className="heroShimmer" />
        <div className="heroNoise" />
        <div className="heroVignette" />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 18, maxWidth: 780 }}>
            <div className="badge" style={{ marginBottom: 10 }}>
              ✨ Quẩy Audition cùng Độc Cô Lạc Beat
            </div>

            <div className="heroTitleRow">
              {homeFeatured.logoUrl ? (
                <img className="heroLogo" src={homeFeatured.logoUrl} alt="FAM logo" />
              ) : null}

              <h1
                style={{
                  margin: 0,
                  fontSize: 25,
                  letterSpacing: 0.4,
                  lineHeight: 1.1,
                }}
              >
                {homeFeatured.slogan}
              </h1>
            </div>

            <p style={{ margin: "12px 0 0 0", color: "var(--muted)", fontSize: 16 }}>
              {homeFeatured.subtitle}
            </p>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/highlights" style={{ textDecoration: "none" }}>
                <button className="btn" type="button">
                  Xem Highlights ⚡
                </button>
              </Link>

              <Link to="/events" style={{ textDecoration: "none" }}>
                <button
                  className="btn"
                  type="button"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    boxShadow: "none",
                  }}
                >
                  Xem Sự kiện 🎮
                </button>
              </Link>
            </div>

            {/* STAT: TOP COMBO */}
            {topCombo && (
              <div
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  gap: 10,
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 16,
                  border: "1px solid rgba(0,245,255,0.22)",
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "0 0 22px rgba(0,245,255,0.10)",
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 18 }}>🔥 Top Combo</div>
                <div className="badge">{topCombo.combo} combo</div>
                <div style={{ color: "var(--muted)" }}>
                  {topCombo.player} • {topCombo.mode}
                  {topCombo.keys ? ` • ${topCombo.keys}` : ""} • {topCombo.song}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dots */}
        {slides.length > 1 && (
          <div className="heroDots">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                className={`heroDot ${i === idx ? "heroDotActive" : ""}`}
                onClick={() => setIdx(i)}
                type="button"
                aria-label={`slide-${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* MAIN SECTIONS */}
      <div className="grid" style={{ marginBottom: 14 }}>
        {/* Quick Info */}
        <div className="card cardGlow" style={{ padding: 16 }}>
          <h2 style={{ margin: 0 }}>Thông báo nhanh</h2>
          <p className="sub" style={{ marginTop: 6 }}>
            Nội quy nhẹ và cách nhóm mình hay hoạt động trong Audition
          </p>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <div className="badge">🕒 Giờ hoạt động chính: 17h - 23h</div>
            <div className="badge">🎮 Kênh đấu FAM: Đẳng cấp 105, Đẳng cấp 106</div>
            <div className="badge">✅ Tinh thần: vui nhưng không toxic</div>
          </div>

          <p style={{ marginTop: 12, color: "var(--muted)" }}>
            Quy định: Không sử dụng phần mềm thứ 3, không hack, không gây war
          </p>
        </div>

        {/* Activities */}
        <div className="card cardGlow" style={{ padding: 16 }}>
          <h2 style={{ margin: 0 }}>Hoạt động của nhóm</h2>
          <p className="sub" style={{ marginTop: 6 }}>
            Tụi mình chơi theo event, có kỉ luật nhẹ, nhưng ưu tiên quẩy vui
          </p>

          <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
            <div className="card" style={{ padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <b>⚔️ Đấu FAM</b>
                <span className="badge">Best of 3</span>
              </div>
              <p className="smallMuted" style={{ marginTop: 8 }}>
                Hẹn kèo, pick mode, chơi nghiêm túc vừa đủ để “đã”.
              </p>
            </div>

            <div className="card" style={{ padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <b>🔥 Đấu live</b>
                <span className="badge">FAM 4K - 8K</span>
              </div>
              <p className="smallMuted" style={{ marginTop: 8 }}>
                Giao lưu, Thi đấu, Học hỏi cùng các FAM lớn khác 😅
              </p>
            </div>

            <div className="card" style={{ padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <b>🎲 Mini game</b>
                <span className="badge">Random</span>
              </div>
              <p className="smallMuted" style={{ marginTop: 8 }}>
                Sự kiện noel, Danke nhạc random lấy combo, ai gà thì chịu nha kkk.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <button className="btn" type="button">
                Xem lịch sự kiện →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* TOP COMBOS */}
      <div className="card cardGlow" style={{ padding: 16, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0 }}>Bảng combo nổi bật</h2>
            <p className="sub" style={{ marginTop: 6 }}>
              Top 3 combo cao nhất (demo) để trang chủ nhìn “có thành tích”
            </p>
          </div>

          <Link to="/highlights" style={{ textDecoration: "none", height: "fit-content" }}>
            <button className="btn" type="button">
              Xem tất cả Highlights ⚡
            </button>
          </Link>
        </div>

        <div style={{ marginTop: 14 }} className="grid">
          {top3Combos.map((c, rank) => (
            <div key={c.id} className="card" style={{ padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <b>🏆 Top {rank + 1}</b>
                <span className="badge">🔥 {c.combo} combo</span>
              </div>

              <p style={{ margin: "10px 0 0 0" }}>
                <b>{c.player}</b> • {c.mode} {c.keys ? `• ${c.keys}` : ""}
              </p>
              <p className="smallMuted">🎵 {c.song} • 🗓️ {c.date}</p>

              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {(c.tags || []).slice(0, 3).map((t) => (
                  <span className="badge" key={t}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST VIDEOS */}
      {latestVideos.length > 0 && (
        <div className="card cardGlow" style={{ padding: 16, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0 }}>Clip mới lên sóng</h2>
              <p className="sub" style={{ marginTop: 6 }}>
                Vài đoạn highlight nhảy mượt, timing gọn, hoặc “ngã sấp mặt” cũng có
              </p>
            </div>

            <Link to="/highlights" style={{ textDecoration: "none", height: "fit-content" }}>
              <button className="btn" type="button">
                Qua mục Clip →
              </button>
            </Link>
          </div>

          <div style={{ marginTop: 14 }} className="grid">
            {latestVideos.map((v) => (
              <div className="card" key={v.id} style={{ padding: 12 }}>
                <b>{v.title}</b>
                <p className="smallMuted" style={{ marginTop: 6 }}>
                  👤 {v.player} • 🗓️ {v.date}
                </p>

                <div style={{ marginTop: 10, position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    title={v.title}
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                      borderRadius: 14,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mini footer quote */}
      <div className="card" style={{ padding: 14, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span className="smallMuted">
            “Combo gãy không sao, quan trọng là gãy xong vẫn cười và nhảy tiếp.” 😭🔥
          </span>
          <span className="badge">Doc Co Lac Beat</span>
        </div>
      </div>

      {/* FEATURED IMAGES */}
      <div className="card cardGlow" style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0 }}>Ảnh nổi bật</h2>
            <p className="sub" style={{ marginTop: 6 }}>
              Các pha combo đi vào lòng đất của thành viên Độc Cô Lạc Beat
            </p>
          </div>

          <Link to="/albums" style={{ textDecoration: "none", height: "fit-content" }}>
            <button className="btn" type="button">
              Xem Thư viện 📸
            </button>
          </Link>
        </div>

        <div style={{ marginTop: 14 }} className="grid">
          {(homeFeatured.featuredImages || []).map((url, i) => (
            <div key={`${i}-${url}`} className="card" style={{ overflow: "hidden" }}>
              <img
                src={url}
                alt={`featured-${i}`}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
