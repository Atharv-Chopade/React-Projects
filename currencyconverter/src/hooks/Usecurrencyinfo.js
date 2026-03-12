import { useEffect, useState } from "react";

function usecurrencyinfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.rates); // ✅ correct
      })
      .catch((error) => {
        console.error("Currency fetch error:", error);
      });
  }, [currency]);

  return data;
}

export default usecurrencyinfo;