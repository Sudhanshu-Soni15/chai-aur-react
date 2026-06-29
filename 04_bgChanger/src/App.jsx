import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className=" fixed flex justify-center flex-wrap inset-x-0 px-2 top-5">
        <div className="bg-white flex gap-3 shadow-2xl rounded-3xl px-3 py-2 ">
          <button
            className="text-white bg-red-500 rounded-full px-4 py-1 outline-none "
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>

          <button
            className="text-white bg-yellow-400 rounded-full px-4 py-1 focus:outline-none
    focus:ring-2
    focus:ring-blue-500 "
            onClick={() => {
              setColor("Yellow");
            }}
          >
            Yellow
          </button>

          <button
            className="text-white bg-blue-500 rounded-full px-4 py-1 outline-none "
            onClick={() => {
              setColor("Blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
