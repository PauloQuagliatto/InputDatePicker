import DayOfTheWeek from "../../components/DayOfTheWeek";

import Container from "./styles";

interface IProps {
  daysOfTheWeek: string[];
}

const DaysOfTheWeek = ({ daysOfTheWeek }: IProps) => {
  return (
    <Container>
      {daysOfTheWeek.map((weekDay, index) => (
        <DayOfTheWeek key={index} weekDay={weekDay} />
      ))}
    </Container>
  );
};

export default DaysOfTheWeek;
