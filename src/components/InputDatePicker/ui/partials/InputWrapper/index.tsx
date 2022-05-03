import { BsFillCalendarFill } from "react-icons/bs";

import { dateMask } from "../../../../../utils/masks";

import Container from "./styles";

interface IProps {
  value: string;
  changeEvent: (value: string) => void;
  handleOpenOrClose: () => void;
}

const InputWrapper = ({ value, changeEvent, handleOpenOrClose }: IProps) => {
  const maskInputOnChange = (inputValue: string) => {
    const maskedValue = dateMask(inputValue);

    typeof maskedValue === "string" && changeEvent(maskedValue);
  };

  return (
    <Container className="input-wrapper">
      <input
        value={value}
        onChange={(e) => {
          maskInputOnChange(e.target.value);
        }}
      ></input>
      <div className="functional-icon" onClick={handleOpenOrClose}>
        <BsFillCalendarFill />
      </div>
    </Container>
  );
};

export default InputWrapper;
