import { useState } from "react";
import Inputbox from "./components/Inputbox";
import usecurrencyinfo from "./hooks/Usecurrencyinfo";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);

  const currencyinfo = usecurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amount);
  };

  const convert = () => {
    if (!currencyinfo[to]) return;
    setconvertedamount(amount * currencyinfo[to]);
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover text-2xl bg-center relative"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3635539/pexels-photo-3635539.jpeg")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Card */}
      <div className="relative z-10 w-200 bg-gray-900/85 backdrop-blur-xl 
        rounded-2xl shadow-2xl p-6 border border-white/10"
      >
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
          Currency Converter 💱
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          <Inputbox
            label="From"
            amount={amount}
            onAmountchange={(value) => setamount(value)}
            currencyoptions={options}
            oncurrencychange={(currency) => setfrom(currency)}
            selectcurrency={from}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="px-9 py-2 rounded-full bg-gray-800 text-gray-200 
              hover:bg-gray-700 text-2xl transition shadow-md border border-white/10"
            >
              🔁 Swap
            </button>
          </div>

          <Inputbox
            label="To"
            amount={convertedamount}
            currencyoptions={options}
            oncurrencychange={(currency) => setto(currency)}
            selectcurrency={to}
            amountdisable
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 text-white 
            font-semibold text-lg hover:bg-emerald-700 transition shadow-lg"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;