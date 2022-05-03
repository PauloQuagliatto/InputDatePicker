import Calendar from "../../../../../utils/classes/Calendar";
import { getDaysOfTheMonth } from "../../../../../utils/getDaysOfTheMonth";

import MonthDay from "../../components/MonthDay";

import Container from "./styles";

interface IProps {
  value: string;
  calendar: Calendar;
  changeEvent: (value: string) => void;
}

const DaysOfTheMonth = ({ calendar, value, changeEvent }: IProps) => {
  const monthDaysList = getDaysOfTheMonth(calendar);

  return (
    <Container>
      {monthDaysList.map((monthDay) => (
        <MonthDay day={monthDay} value={value} changeEvent={changeEvent} />
      ))}
    </Container>
  );
};

export default DaysOfTheMonth;
