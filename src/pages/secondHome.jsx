import { useState, useEffect } from "react";
import useFetchExchangeRates from "../fetchExchangeRates";
import CustomTable from "../components/CustomTable";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import "../home.css";

const SecondHome = () => {
  const [state, setState] = useState({
    amount: 1183,
    intrest: 8,
    years: 1,
  });

  const [emi, setEMI] = useState(0);
  const [chooseCurrency, setChooseCurrency] = useState("USD");
  let { result } = useFetchExchangeRates(chooseCurrency);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    table();
  }, [emi, result]);

  function table() {
    let r = state.intrest / 12 / 100;

    console.log(r);
    let intrest = parseFloat(
      (state.amount * result?.currentCurrencyValue * r).toFixed(2)
    );
    let principal = parseFloat(
      (emi * result?.currentCurrencyValue - intrest).toFixed(2)
    );
    let balance = parseFloat(
      (state.amount * result?.currentCurrencyValue - principal).toFixed(2)
    );
    let arr1 = [{ intrest, principal, balance }];

    for (let i = 2; i <= state.years * 12; i++) {
      if (i !== state.years * 12) {
        intrest = parseFloat((balance * r).toFixed(2));
        principal = parseFloat(
          (emi * result?.currentCurrencyValue - intrest).toFixed(2)
        );
        balance = parseFloat((balance - principal).toFixed(2));
        arr1.push({ intrest, principal, balance });
      } else {
        intrest = parseFloat((balance * r).toFixed(2));
        principal = parseFloat(
          (emi * result?.currentCurrencyValue - intrest).toFixed(2)
        );
        balance = 0;
        arr1.push({ intrest, principal, balance });
      }
    }

    setTableData(arr1);
  }

  return (
    <div className="homeDiv">
      <Navbar />
      <InputField
        state={state}
        setState={setState}
        emi={emi}
        setEMI={setEMI}
        chooseCurrency={chooseCurrency}
        setChooseCurrency={setChooseCurrency}
      />
      <div>
        {emi ? (
          <CustomTable
            data={(tableData && tableData) || []}
            chooseCurrency={chooseCurrency}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default SecondHome;
