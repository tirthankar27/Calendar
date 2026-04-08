import { generateMonth } from "../../utils/dateUtils";
import { useDateRange } from "../../hooks/useDateRange";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import "./calendar.css";

interface Props {
  current: Date;
  setCurrent: (d: Date) => void;
}

export default function Calendar({ current, setCurrent }: Props) {
  const { start, end, select, inRange } = useDateRange();

  const days = generateMonth(current.getFullYear(), current.getMonth());

  const changeMonth = (dir: number) => {
    const next = new Date(current);
    next.setMonth(current.getMonth() + dir);
    setCurrent(next);
  };

  return (
    <div>
      <CalendarHeader value={current} onChange={changeMonth} />

      {/* Week Days */}
      <div className="calendar-grid text-xs text-gray-500 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <CalendarGrid days={days} start={start} end={end} inRange={inRange} onSelect={select}/>
    </div>
  );
}