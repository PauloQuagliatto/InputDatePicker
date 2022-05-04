import moment from "moment";

import Day from "../../../../../utils/classes/Day";

import Container from "./styles";

interface IProps {
  day: Day;
  value: string;
  changeEvent: (value: string) => void;
}

const MonthDay = ({ day, value, changeEvent }: IProps) => {
  const isSelected = moment(value, "DD/MM/YYYY").valueOf() === day.timestamp;

  const selectDate = () => {
    console.log(moment(day.timestamp).format("DD/MM/YYYY"));
    changeEvent(moment(day.timestamp).format("DD/MM/YYYY"));
  };

  return (
    <Container isSelected={isSelected} onClick={selectDate}>
      {day.date}
    </Container>
  );
};

export default MonthDay;
