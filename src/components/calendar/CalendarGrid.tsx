import DayCell from "./DayCell";

interface Props {
  days: (Date | null)[];
  start: Date | null;
  end: Date | null;
  inRange: (d: Date) => boolean;
  onSelect: (d: Date) => void;
}

export default function CalendarGrid({ days, start, end, inRange, onSelect }: Props) {
  return (
    <div className="calendar-grid">
      {days.map((d, i) =>
        d ? (
          <DayCell
            key={i}
            date={d}
            start={start}
            end={end}
            inRange={inRange}
            onSelect={onSelect}
          />
        ) : (
          <div key={i} className="empty-cell" />
        )
      )}
    </div>
  );
}