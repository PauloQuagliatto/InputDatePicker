import { useState } from "react";
import moment from "moment";

import InputWrapper from "./ui/partials/InputWrapper";

import Calendar from "../../utils/classes/Calendar";

import Container from "./styles";
import CalendarWrapper from "./ui/partials/CalendarWrapper";

interface IProps {
  inputValue: string;
  changeEvent: (value: string) => void;
}

const InputDatePicker = ({ inputValue, changeEvent }: IProps) => {
  const year = moment(inputValue, "DD/MM/YYYY").year();
  const month = moment(inputValue, "DD/MM/YYYY").month();

  const calendar = new Calendar(
    isNaN(year) ? null : year,
    isNaN(month) ? null : month,
    "pt-br"
  );

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
