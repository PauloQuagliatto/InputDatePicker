import { useState } from "react";

import Calendar from "./utils/classes/Calendar";
import InputDatePicker from "./components/InputDatePicker";

import GlobalStyle from "./styles/global";

function App() {
  const [input, setInput] = useState("");
  let calendar = new Calendar();

  return (
    <>
      <GlobalStyle />
      <InputDatePicker inputValue={input} changeEvent={setInput} />
    </>
  );
}

export default App;
