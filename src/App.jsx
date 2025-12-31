import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Albums from "./pages/Albums";
import EventDetail from "./pages/EventDetail";
import Highlights from "./pages/Highlights";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  );
}
