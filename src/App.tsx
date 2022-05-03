import { useState } from "react";

import InputDatePicker from "./components/InputDatePicker";

import GlobalStyle from "./styles/global";

function App() {
  const [input, setInput] = useState("");
  console.log("deu certo");
  return (
    <>
      <GlobalStyle />
      <InputDatePicker value={input} changeEvent={setInput} />
    </>
  );
}

export default App;
