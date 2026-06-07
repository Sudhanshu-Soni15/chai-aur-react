import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    setCounter(counter + 1);
  };

  const removevalue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur code </h1>
      <h1>Counter value : {counter} </h1>

      <button onClick={addvalue}>Add value </button>
      <br />
      <button onClick={removevalue}> Remove value </button>
    </>
  );
}

export default App;
