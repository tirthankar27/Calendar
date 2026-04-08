import { useState } from "react";
import Calendar from "../calendar/Calendar";
import NotesPanel from "../notes/NotesPanel";
import "./wall.css";

export default function WallLayout() {
  const [current, setCurrent] = useState(new Date());

  return (
    <div className="wall-container">
      <div className="calendar-card">
        
        {/* Top Image Section */}
        <div className="hero-section">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="hero-image"
          />

          <div className="hero-overlay">
            <div className="hero-text">
              <div className="year">{current.getFullYear()}</div>
              <div className="month">
                {current.toLocaleString("default", { month: "long" })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="notes-area">
            <NotesPanel currentDate={current} />
          </div>

          <div className="calendar-area">
            <Calendar current={current} setCurrent={setCurrent} />
          </div>
        </div>

      </div>
    </div>
  );
}