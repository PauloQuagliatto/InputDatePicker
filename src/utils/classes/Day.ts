class Day {
    Date: Date;
    date: number;
    day: string;
    dayShort: string;
    dayNumber: number;
    year: number;
    yearShort: number;
    month: string;
    monthShort: string;
    monthNumber: number;
    timestamp: number;
  
    constructor(date: Date | null = null, lang: string = "default") {
      date = date ?? new Date();
  
      this.Date = date;
      this.date = date.getDate();
      this.day = date.toLocaleString(lang, { weekday: "long" });
      this.dayShort = date.toLocaleString(lang, { weekday: "short" });
      this.dayNumber = date.getDay() + 1;
      this.year = date.getFullYear();
      this.yearShort = Number(date.toLocaleString(lang, { year: "2-digit" }));
      this.month = date.toLocaleString(lang, { month: "long" });
      this.monthShort = date.toLocaleString(lang, { month: "short" });
      this.monthNumber = Number(date.getMonth());
      this.timestamp = date.getTime();
    }
  
    format(formatStr: string) {
      return formatStr
        .replace(/\bYYYY\b/, this.year.toString())
        .replace(/\bYYY\b/, this.yearShort.toString())
        .replace(/\bMMMM\b/, this.month)
        .replace(/\bMMM\b/, this.monthShort)
        .replace(/\bMM\b/, this.monthNumber.toString().padStart(2, "0"))
        .replace(/\bM\b/, this.monthNumber.toString())
        .replace(/\bDDDD\b/, this.day)
        .replace(/\bDDD\b/, this.dayShort)
        .replace(/\bDD\b/, this.date.toString().padStart(2, "0"))
        .replace(/\bD\b/, this.dayNumber.toString());
    }
  }
  
  export default Day;
  