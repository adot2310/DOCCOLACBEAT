// src/data/home.js

// ✅ Import ảnh theo cách A (Vite sẽ tự build đúng khi deploy)
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";

import logo from "../assets/fam-logo.png";

import featured1 from "../images/highlight2.jpg";

export const homeFeatured = {
  slogan: "Độc Cô Lạc Beat",
  subtitle: "ĐỘC CÔ LẠC BEAT - DỊ ỨNG FINISH - KHÔNG BIẾT COMBO",
  // ✅ bannerImages giờ là url thật do Vite build
  bannerImages: [banner1, banner2],

  // ✅ logoUrl cũng là import
  logoUrl: logo,

  // ✅ featuredImages cũng là import
  featuredImages: [featured1, featured1, featured1, featured1, featured1,featured1],
};
