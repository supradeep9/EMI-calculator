import { useState, useEffect } from "react";
import axios from "axios";

function useFetchExchangeRates(chooseCurrency) {
  //console.log(chooseCurrency);
  const [result, setResult] = useState();

  useEffect(() => {
    axios(
      "https://v6.exchangerate-api.com/v6/332e433df64ae6f9b0c9bc52/latest/USD"
    ).then((data) => {
      //console.log(data.data.base_code, data.data.conversion_rates, data);
      setResult({
        currency: chooseCurrency && chooseCurrency,
        currentCurrencyValue: data?.data?.conversion_rates?.[chooseCurrency],
        data: data,
      });
    });
  }, [chooseCurrency]);
  return { result, setResult };
}
export default useFetchExchangeRates;
