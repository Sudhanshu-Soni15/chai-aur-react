import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "sudhanshu",
    channel: "Code with harry",
    course: "React js",
  };

  let neWArr = [1, 2, 3];

  return (
    <>
      <body className="bg-black ">
        <h1 className="bg-green-500 text-amber-300 p-4 w-sm text-2xl rounded-md text-center mx-auto mb-4">
          Tailwind test
        </h1>

        <Card name="Card_1" btntext="read more" />

        <Card name="Card_2" btntext="visit" />
      </body>
    </>
  );
}

export default App;
