interface Props {
  value: Date;
  onChange: (dir: number) => void;
}

export default function CalendarHeader({ value, onChange }: Props) {
  return (
    <div className="calendar-header">
      <button className="nav-btn" onClick={() => onChange(-1)}>
        ‹
      </button>

      <div className="header-title">
        {value.toLocaleString("default", { month: "long" })}{" "}
        {value.getFullYear()}
      </div>

      <button className="nav-btn" onClick={() => onChange(1)}>
        ›
      </button>
    </div>
  );
}