import { isSameDay } from "../../utils/dateUtils";

interface Props {
  date: Date;
  start: Date | null;
  end: Date | null;
  inRange: (d: Date) => boolean;
  onSelect: (d: Date) => void;
}

export default function DayCell({
  date,
  start,
  end,
  inRange,
  onSelect,
}: Props) {
  const today = new Date();

  const isStart = start && isSameDay(date, start);
  const isEnd = end && isSameDay(date, end);
  const isToday = isSameDay(date, today);

  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;

  return (
    <div
      onClick={() => onSelect(date)}
      className={`calendar-day
        ${isStart ? "day-start" : ""}
        ${isEnd ? "day-end" : ""}
        ${inRange(date) ? "day-range" : ""}
        ${isToday ? "day-today" : ""}
        ${isWeekend ? "day-weekend" : ""}
      `}
    >
      {date.getDate()}
    </div>
  );
}