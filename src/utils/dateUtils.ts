export const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

export const isBefore = (a: Date, b: Date) => a.getTime() < b.getTime();

export const generateMonth = (year: number, month: number) => {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const cells: (Date | null)[] = [];
  const offset = first.getDay();

  for (let i = 0; i < offset; i++) cells.push(null);

  for (let d = 1; d <= last.getDate(); d++) {
    cells.push(new Date(year, month, d));
  }

  return cells;
};