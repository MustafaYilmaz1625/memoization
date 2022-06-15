import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

//useMemo
// function calculateObject(number) {
//   console.log("Calculating Object...");
//   for (let i = 0; i < 100000000; i++) {}
//   console.log("Calculating completed!!");
//   return { name: "mustafa", number };
// }

export default App;
