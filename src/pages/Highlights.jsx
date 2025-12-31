import { useMemo, useState } from "react";
import NeonModal from "../components/NeonModal";
import { comboHighlights, videoHighlights } from "../data/highlights";

function uniq(arr) {
  return Array.from(new Set(arr));
}

function formatDate(iso) {
  return iso;
}

export default function Highlights() {
  const [tab, setTab] = useState("combo"); // "combo" | "video"
  const [selected, setSelected] = useState(null); // selected combo item
  const [tag, setTag] = useState("all");

  const allTags = useMemo(() => {
    const tags =
      tab === "combo"
        ? comboHighlights.flatMap((x) => x.tags)
        : videoHighlights.flatMap((x) => x.tags);
    return ["all", ...uniq(tags)];
  }, [tab]);

  const comboList = useMemo(() => {
    const base = comboHighlights.slice().sort((a, b) => b.combo - a.combo);
    if (tag === "all") return base;
    return base.filter((x) => x.tags.includes(tag));
  }, [tag]);

  const videoList = useMemo(() => {
    const base = videoHighlights.slice();
    if (tag === "all") return base;
    return base.filter((x) => x.tags.includes(tag));
  }, [tag]);

  return (
    <div className="container">
      <div className="card cardGlow" style={{ padding: 16, marginBottom: 14 }}>
        <h1 className="title">Highlights Audition</h1>
        <p className="sub">Combo cao và clip highlight của nhóm</p>

        <div className="pillRow">
          <button
            className={`pill ${tab === "combo" ? "pillActive" : ""}`}
            onClick={() => {
              setTab("combo");
              setTag("all");
            }}
            type="button"
          >
            ⚡ Combo cao
          </button>
          <button
            className={`pill ${tab === "video" ? "pillActive" : ""}`}
            onClick={() => {
              setTab("video");
              setTag("all");
            }}
            type="button"
          >
            🎬 Clip highlight
          </button>
        </div>

        <div className="pillRow">
          {allTags.map((t) => (
            <button
              key={t}
              className={`pill ${tag === t ? "pillActive" : ""}`}
              onClick={() => setTag(t)}
              type="button"
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {tab === "combo" ? (
        <div className="grid">
          {comboList.map((item) => (
            <div className="card" key={item.id} style={{ overflow: "hidden" }}>
              <img
                src={item.imageUrl}
                alt={`${item.player} combo ${item.combo}`}
                style={{ width: "100%", height: 180, objectFit: "cover", cursor: "pointer" }}
                onClick={() => setSelected(item)}
              />

              <div style={{ padding: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>{item.player}</div>
                  <span className="badge">🔥 {item.combo} combo</span>
                </div>

                <p className="smallMuted" style={{ marginTop: 8 }}>
                  🎵 {item.song}
                  <br />
                  🕹️ {item.mode} • {item.keys} • {formatDate(item.date)}
                </p>

                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.tags.map((t) => (
                    <span className="badge" key={t}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button className="btn" onClick={() => setSelected(item)} type="button">
                    Xem ảnh lớn ✨
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid">
          {videoList.map((v) => (
            <div className="card" key={v.id} style={{ padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontWeight: 900, fontSize: 16 }}>{v.title}</div>
                <span className="badge">▶ YouTube</span>
              </div>

              <p className="smallMuted" style={{ marginTop: 8 }}>
                👤 {v.player} • {formatDate(v.date)}
              </p>

              <div style={{ marginTop: 10 }}>
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
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
                      boxShadow: "0 0 18px rgba(0,245,255,0.10)",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {v.tags.map((t) => (
                  <span className="badge" key={t}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <NeonModal
          title={`${selected.player} • ${selected.combo} combo • ${selected.song}`}
          onClose={() => setSelected(null)}
        >
          <img className="media" src={selected.imageUrl} alt="combo" />
          <p className="smallMuted">
            🕹️ {selected.mode} • {selected.keys} • {formatDate(selected.date)}
          </p>
        </NeonModal>
      )}
    </div>
  );
}
