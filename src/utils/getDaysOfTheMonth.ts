import Calendar from "./classes/Calendar";
import Day from "./classes/Day";

const getDaysOfTheMonth = (calendar: Calendar) => {
  const firstDayOfTheMonth = calendar.month.getDay(1);
  const prevMonth = calendar.getPreviousMonth();
  const totalLastMonthFinalDays = firstDayOfTheMonth.dayNumber - 1;
  const totalDays = calendar.month.numberOfDays + totalLastMonthFinalDays;
  const monthList = Array.from({ length: totalDays });

  for (let i = totalLastMonthFinalDays; i < totalDays; i++) {
    monthList[i] = calendar.month.getDay(i + 1 - totalLastMonthFinalDays);
  }

  for (let i = 0; i < totalLastMonthFinalDays; i++) {
    const inverted = totalLastMonthFinalDays - (i + 1);
    monthList[i] = prevMonth.getDay(prevMonth.numberOfDays - inverted);
  }

  return monthList as Day[];
};

export { getDaysOfTheMonth };
