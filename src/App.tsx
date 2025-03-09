import { useState } from "react";
import "./App.css";
import { ToDO } from "./ToDO";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDO />
    </>
  );
}

export default App;
