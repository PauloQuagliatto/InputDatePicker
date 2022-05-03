import { useEffect, useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import InputWrapper from "./ui/partials/InputWrapper";

import Calendar from "../../utils/classes/Calendar";
import { dateMask } from "../../utils/masks";

import Container from "./styles";
import CalendarWrapper from "./ui/partials/CalendarWrapper";

interface IProps {
  inputValue: string;
  changeEvent: (value: string) => void;
}

const InputDatePicker = ({ inputValue, changeEvent }: IProps) => {
  let calendar = new Calendar(null, null, "pt-br");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenOrClose = () => {
    setIsOpen((currState) => !currState);
  };

  return (
    <Container>
      <InputWrapper
        value={inputValue}
        changeEvent={changeEvent}
        handleOpenOrClose={handleOpenOrClose}
      />
      {isOpen && (
        <CalendarWrapper
          calendar={calendar}
          value={inputValue}
          changeEvent={changeEvent}
        />
      )}
    </Container>
  );
};

export default InputDatePicker;
