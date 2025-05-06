import "./App.css";
import React from "react";

import { Stack } from "@mui/material";
import { createContext } from "react";
import SecondHome from "./pages/secondHome.jsx";
import ExchangeRates from "./pages/exchangeRates.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
export const contex = createContext();

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <contex.Provider value={{ darkMode, setDarkMode }}>
      <Stack spacing={10}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SecondHome />} />
            <Route path="/live_rates" element={<ExchangeRates />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Stack>
    </contex.Provider>
  );
}

export default App;
