import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountchange,
  oncurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountdisable = false,
  currencydisable = false,
  className = "",
}) {
  const amountinputid = useId();

  return (
    <div
      className={`bg-gray-800/90 p-5 rounded-xl shadow-md 
      border border-white/10 w-full ${className}`}
    >
      {/* Amount */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor={amountinputid}
          className="text-lg font-medium text-gray-300 mb-1"
        >
          {label}
        </label>

        <input
          id={amountinputid}
          type="number"
          placeholder="Enter amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
          className="w-full px-4 text-2xl py-9 rounded-lg bg-gray-900 text-gray-100 
          placeholder-gray-500 border border-white/10
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          transition disabled:bg-gray-800-800 disabled:cursor-not-allowed"
        />
      </div>

      {/* Currency */}
      <div className="flex flex-col">
        <p className="text-lg font-medium text-gray-300 mb-1">
          Currency
        </p>

        <select
          value={selectcurrency}
          onChange={(e) =>
            oncurrencychange && oncurrencychange(e.target.value)
          }
          disabled={currencydisable}
          className="w-full px-4 py-9 rounded-lg bg-gray-900 text-gray-100 
          border border-white/10 focus:outline-none 
          focus:ring-2 focus:ring-emerald-500 transition"
        >
          {currencyoptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="text-white"
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;