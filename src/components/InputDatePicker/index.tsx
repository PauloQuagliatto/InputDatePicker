import { useEffect, useMemo, useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import Calendar from "../../utils/classes/Calendar";
import { dateMask } from "../../utils/masks";

import Container from "./styles";

interface IProps {
  value: string;
  changeEvent: (value: string) => void;
}

const InputDatePicker = ({ value, changeEvent }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [calendar, setCalendar] = useState<Calendar | null>(null);
  const [headerText, setHeaderText] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      const newCalendar = new Calendar(null, null, "pt-br");
      setCalendar(newCalendar);
      setHeaderText(`${calendar!.month.name.toUpperCase()}, ${calendar!.year}`);
    } else {
      setCalendar(null);
      setHeaderText("");
    }
  }, [isOpen]);

  const maskInputOnChange = (e: any) => {
    const maskedValue = dateMask(e);

    changeEvent(maskedValue);
  };

  const handleChangeMonth = (type: string) => {
    console.log(calendar);
    if (type === "previous") calendar!.goToPreviousMonth();
    if (type === "next") calendar!.goToNextMonth();

    setHeaderText(`${calendar!.month.name}, ${calendar!.year}`);
  };

  return (
    <Container>
      <div className="input-wrapper">
        <input
          value={value}
          onChange={(e) => {
            maskInputOnChange(e);
          }}
        ></input>
        <div className="functional-icon" onClick={() => setIsOpen(!isOpen)}>
          <BsFillCalendarFill />
        </div>
      </div>
      {isOpen && calendar && (
        <div className="calendar-wrapper">
          Calendar
          <div className="calendar-header">
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
          </div>
        </div>
      )}
    </Container>
  );
};

export default InputDatePicker;
