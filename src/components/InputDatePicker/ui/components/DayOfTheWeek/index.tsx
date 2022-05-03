import Container from "./styles";

interface IProps {
  weekDay: string;
}

const DayOfTheWeek = ({ weekDay }: IProps) => (
  <Container>{weekDay.substring(0, 3).toUpperCase()}</Container>
);

export default DayOfTheWeek;
