import { useState } from "react";

import Calendar from "../../../../../utils/classes/Calendar";

import CalendarTitle from "../../components/CalendarTitle";
import CalendarHeader from "../../blocks/CalendarHeader";
import DaysOfTheWeek from "../../blocks/DaysOfTheWeek";
import DaysOfTheMonth from "../../blocks/DaysOfTheMonth";

import Container from "./styles";

interface IProps {
  calendar: Calendar;
  value: string;
  changeEvent: (value: string) => void;
}

const CalendarWrapper = ({ calendar, value, changeEvent }: IProps) => {
  const [headerText, setHeaderText] = useState(
    `${calendar!.month.name.toUpperCase()}, ${calendar!.year}`
  );
  
  const daysOfTheWeek = [...calendar.weekDays];

  const handleChangeMonth = (type: string) => {
    if (type === "previous") {
      calendar.goToPreviousMonth();
    }

    if (type === "next") {
      calendar.goToNextMonth();
    }
    
    setHeaderText(`${calendar!.month.name.toUpperCase()}, ${calendar!.year}`);
  };

  return (
    <Container>
      <CalendarTitle />
      <CalendarHeader
        headerText={headerText}
        handleChangeMonth={handleChangeMonth}
      />
      <DaysOfTheWeek daysOfTheWeek={daysOfTheWeek} />
      <DaysOfTheMonth
        calendar={calendar}
        value={value}
        changeEvent={changeEvent}
      />
    </Container>
  );
};

export default CalendarWrapper;
