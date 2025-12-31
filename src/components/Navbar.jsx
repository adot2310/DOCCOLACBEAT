import { NavLink, Link } from "react-router-dom";
import famLogo from "../assets/fam-logo.png";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  borderRadius: 12,
  textDecoration: "none",
  color: isActive ? "#fff" : "#a8b3d6",
  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
  border: isActive ? "1px solid rgba(0,245,255,0.28)" : "1px solid transparent",
  transition: "background 160ms ease, border-color 160ms ease, color 160ms ease",
  whiteSpace: "nowrap",
});

export default function Navbar() {
  return (
    <div className="neonNav">
      <div className="navRow">
        {/* Brand: bấm để về Trang chủ */}
        <Link to="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={famLogo} alt="FAM Logo" className="brandLogo" />
          <span>ĐỘC CÔ LẠC BEAT</span>
        </Link>

        <div className="navLinks" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to="/" style={linkStyle} end>
            Trang chủ
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            Giới thiệu
          </NavLink>
          <NavLink to="/events" style={linkStyle}>
            Sự kiện
          </NavLink>
          <NavLink to="/highlights" style={linkStyle}>
            Highlights
          </NavLink>
          <NavLink to="/albums" style={linkStyle}>
            Thư viện
          </NavLink>
        </div>
      </div>
    </div>
  );
}
