import { useEffect, useState } from "react";
import "./notes.css";

interface Props {
  currentDate: Date;
}

export default function NotesPanel({ currentDate }: Props) {
  const [text, setText] = useState("");

  const key = `calendar_notes_${currentDate.getFullYear()}_${currentDate.getMonth()}`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      setText(saved || "");
    } catch {}
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, text);
    } catch {}
  }, [text, key]);

  const clearNotes = () => {
    setText("");
    localStorage.removeItem(key);
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <div className="notes-title">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>

        <button className="clear-btn" onClick={clearNotes}>
          Clear
        </button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="notes-textarea"
        placeholder="Write something for this month..."
      />
    </div>
  );
}