import daulive1 from "../images/daulive1.jpg"
export const events = [
  {
    id: "fam-battle-001",
    type: "FAM_BATTLE",
    title: "Đấu FAM: ĐỘC CÔ LẠC BEAT ⚔️ MVP",
    date: "2026-01-09",
    time: "21:30",
    location: "Bư Audition",
    rules: {
      mode: "FAM 4K K DEL",
      song: "Random Pick Songs",
      bestOf: 3,
      note: "Kèo FAM 4 không del chạm 10",
    },
    status: "upcoming",
    cover: [daulive1],
    recap: null,
    albumId: null,
  },
  {
    id: "training-002",
    type: "FAM_BATTLE",
    title: "Đấu FAM: ĐỘC CÔ LẠC BEAT ⚔️ MVP",
    date: "2025-12-30",
    time: "19:30",
    location: "Ngô Hiệp",
    rules: { mode: "Dance Battle", level: "4K", note: "Kèo 4k không del chạm 10" },
    status: "done",
    cover: [daulive1],
    recap: "Tối nay lên tay timing, có vài combo 2x xin lỗi lag nhẹ 😭",
    albumId: "alb-training-002",
  },
];
