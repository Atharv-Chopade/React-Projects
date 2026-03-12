import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpass] = useState("");
  const passwordref = useRef(null);

  
  const passwordgenerator = useCallback(() => {
    let password = "";
    let str = "QWERTYUIO[LKJHGFDSAMNBVCXZqwertyuioplkjhgfdsazxcvbnm";
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "@#$&|\{[}]qwertyuioplkjhgfdsazxcvbnm";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setpass(password);
  }, [length, numberallowed, charallowed, setpass]);
  
  
  const copypasstoclipboard = useCallback(() => {
    passwordref.current.select()
    passwordref.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  
  useEffect(() => {
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])
 
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="w-full max-w-2xl rounded-2xl bg-gray-900 shadow-2xl border border-gray-700 p-8 space-y-6">

          {/* Password Box */}
          <div className="flex items-center rounded-xl overflow-hidden bg-white focus-within:ring-4 focus-within:ring-orange-500 transition">
            <input
              type="text"
              value={password}
              className="w-full bg-transparent text-orange-500 placeholder-gray-600 px-6 py-4 outline-none text-2xl tracking-wide"
              placeholder="Generated Password"
              readOnly
              ref={passwordref}
            />
            <button
              onClick={copypasstoclipboard}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 text-lg font-semibold transition shrink-0">
              Copy
            </button>
          </div>


          {/* Controls */}
          <div className="flex flex-col gap-5 text-lg text-white">

            {/* Length Slider */}
            <div className="flex items-center justify-between gap-6">
              <label className="font-medium">
                Length : <span className="text-orange-400">{length}</span>
              </label>
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className="cursor-pointer w-full accent-orange-500"
                onChange={(e) => setlength(e.target.value)}
              />
            </div>


            {/* Checkboxes */}
            <div className="flex gap-10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={numberallowed}
                  className="w-5 h-5 accent-orange-500"
                  onChange={() => setnumberallowed(prev => !prev)}
                />
                Numbers
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={charallowed}
                  className="w-5 h-5 accent-orange-500"
                  onChange={() => setcharallowed(prev => !prev)}
                />
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
