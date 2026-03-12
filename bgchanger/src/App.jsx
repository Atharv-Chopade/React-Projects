import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div className="w-full min-h-screen text-white flex justify-center items-center"><div
          className=" flex w-full h-190 rounded-2xl border-black border-3 shadow-xl justify-center items-center transition-colors duration-500"
          style={{ backgroundColor: color }}
        >
          <button
            className="w-50 w-150 h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="w-50 w-150 h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="w-50 w-150   h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "darkorange" }}
            onClick={() => setcolor("darkorange")}
          >
            Orange
          </button>
          <button
            className="w-50 w-150   h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "darkolivegreen" }}
            onClick={() => setcolor("darkolivegreen")}
          >
            Olivegreen
          </button>
          <button
            className="w-50 w-150   h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="w-50 w-150   h-50 m-10 rounded-2xl border-black border-3 text-xl shadow-2xl transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95"
            style={{ backgroundColor: "silver" }}
            onClick={() => setcolor("silver")}
          >
            Silver
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
