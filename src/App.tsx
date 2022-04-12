import { useState } from "react";

import InputDatePicker from "./components/InputDatePicker";

import GlobalStyle from "./styles/global";

function App() {
  const [input, setInput] = useState("");
  return (
    <GlobalStyle>
      <InputDatePicker value={input} changeEvent={setInput} />
    </GlobalStyle>
  );
}

export default App;
