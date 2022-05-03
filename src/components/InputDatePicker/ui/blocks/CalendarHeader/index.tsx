import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import Container from "./styles";

interface IProps {
  headerText: string;
  handleChangeMonth: (type: string) => void;
}

const CalendarHeader = ({ headerText, handleChangeMonth }: IProps) => {
  return (
    <Container>
      <div
        className="functional-icon"
        onClick={() => handleChangeMonth("previous")}
      >
        <IoMdArrowDropleft />
      </div>
      <p>{headerText}</p>
      <div className="functional-icon">
        <IoMdArrowDropright onClick={() => handleChangeMonth("next")} />
      </div>
    </Container>
  );
};

export default CalendarHeader;
