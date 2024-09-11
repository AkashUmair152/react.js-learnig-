import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className=" w-full h-screen"
        style={{ backgroundColor: color }}
      ></div>
      <div className=" fixed flex flex-wrap justify-center bottom-72 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("black")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("grey")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "grey" }}
          >
            grey
          </button>
          <button
            onClick={() => setColor("maroon")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "maroon" }}
          >
            maroon
          </button>
          <button
            onClick={() => setColor("tan")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "tan" }}
          >
            tan
          </button>
          <button
            onClick={() => setColor("olive")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("brown")}
            className=" outline-none px-4 py-2 rounded-xl shadow-lg text-white font-semibold"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
