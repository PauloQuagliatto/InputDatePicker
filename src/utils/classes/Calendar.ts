import Day from "./Day";
import Month from "./Month";

import isLeapYear from "../isLeapYear";

class Calendar {
  lang: string;
  today: Day;
  month: Month;
  year: number;
  weekDays: string[] = Array.from({ length: 7 });
  [Symbol.iterator]: any;

  constructor(
    year: number | null = null,
    monthNumber: number | null = null,
    lang: string = "default"
  ) {
    this.today = new Day(null, lang);
    this.year = year ?? this.today.year;
    this.month = new Month(
      new Date(this.year, monthNumber || this.today.monthNumber),
      lang
    );
    this.lang = lang;

    this[Symbol.iterator] = function* (): Iterable<Month> {
      let number = 1;
      yield this.getMonth(number);

      while (number < 12) {
        ++number;
        yield this.getMonth(number);
      }
    };

    this.weekDays.forEach((_, i) => {
      const day = this.month.getDay(i);
      if (!this.weekDays.includes(day.day)) {
        this.weekDays[day.dayNumber - 1] = day.day;
      }
    });
  }

  getLeapYear() {
    return isLeapYear(this.year);
  }

  getMonth(monthNumber: number) {
    return new Month(new Date(this.year, monthNumber), this.lang);
  }

  getPreviousMonth() {
    console.log(this.month.number);
    if (this.month.number === 0) {
      return new Month(new Date(this.year - 1, 11), this.lang);
    }

    return new Month(new Date(this.year, this.month.number - 1), this.lang);
  }

  getNextMont() {
    if (this.month.number === 0) {
      return new Month(new Date(this.year + 1, 0), this.lang);
    }

    return new Month(new Date(this.year, this.month.number + 2), this.lang);
  }

  goToDate(monthNumber: number, year: number) {
    this.month = new Month(new Date(year, monthNumber - 1), this.lang);
    this.year = year;
  }

  goToPreviousYear() {
    this.year -= 1;
    this.month = new Month(new Date(this.year, 11), this.lang);
  }

  goToNextYear() {
    this.year += 1;
    this.month = new Month(new Date(this.year, 0), this.lang);
  }

  goToPreviousMonth() {
    if (this.month.number === 0) return this.goToPreviousYear();

    this.month = new Month(
      new Date(this.year, this.month.number - 1),
      this.lang
    );
  }

  goToNextMonth() {
    if (this.month.number === 11) return this.goToNextYear();

    this.month = new Month(
      new Date(this.year, this.month.number + 1),
      this.lang
    );
  }
}

export default Calendar;
