import React from "react";
import ExchangeRatesTable from "../components/exchnageRatesTable";
import Navbar from "../components/Navbar";

function ExchangeRates() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <Navbar />
      <ExchangeRatesTable />
    </div>
  );
}

export default ExchangeRates;
