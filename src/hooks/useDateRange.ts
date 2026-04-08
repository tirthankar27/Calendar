import { useState } from "react";
import { isBefore } from "../utils/dateUtils";

export const useDateRange = () => {
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const select = (date: Date) => {
    if (!start || (start && end)) {
      setStart(date);
      setEnd(null);
      return;
    }

    if (isBefore(date, start)) {
      setStart(date);
      setEnd(start);
    } else {
      setEnd(date);
    }
  };

  const inRange = (date: Date) => {
    if (!start || !end) return false;
    return date >= start && date <= end;
  };

  return { start, end, select, inRange };
};