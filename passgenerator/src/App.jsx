import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [pass, setpass] = useState("");
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [length, setlength] = useState(8);

  const passwordref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let password = "";
    let str =
      "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";

    if (numberallowed) str += "1234567890";
    if (charallowed) str += "!@#$%^&*()_+=-{}[]|\":><?';/.,";
    
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setpass(password);
  }, [length, numberallowed, charallowed]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charallowed, passwordgenerator]);

  const copyPassword = () => {
    passwordref.current.select()
    passwordref.current?.setSelectionRange(0,99)
    navigator.clipboard.writeText(pass);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#12213d] to-[#6b8ecf]">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[420px] bg-[#212111] rounded-3xl p-8">

          <div className="flex mb-8">
            <input
              type="text"
              value={pass}
              readOnly
              ref={passwordref}
              className="flex-1 h-12 px-4 rounded-l-xl bg-white tracking-wide italic font-bold outline-none"
            />
            <button
              onClick={copyPassword}
              className="w-20 h-12 bg-blue-500 hover:bg-blue-300 text-white rounded-r-xl transition"
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={2}
                max={100}
                value={length}
                onChange={(e) => setlength(Number(e.target.value))}
                className="w-full cursor-pointer accent-orange-500"
              />
              <label>Length {length}</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={numberallowed}
                onChange={() => setnumberallowed((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={charallowed}
                onChange={() => setcharallowed((prev) => !prev)}
              />
              <label>Characters</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;