import * as React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { contex } from "../App";
import BasicSelect from "./Select";
function InputField({
  state,
  setState,
  emi,
  setEMI,
  chooseCurrency,
  setChooseCurrency,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (event) => {
  //   event.preventDefault();
  // };
  const { darkMode, setDarkMode } = useContext(contex);
  const [error, setError] = React.useState(false);

  const inputStyles = {
    m: 1,
    width: "25ch",
    input: { color: darkMode ? "#fff" : "#000" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: darkMode ? "#333" : "#fff",
      "& fieldset": {
        borderColor: darkMode ? "#aaa" : "#ccc",
      },
      "&:hover fieldset": {
        borderColor: darkMode ? "#fff" : "#000",
      },
    },
    "& input::-webkit-outer-spin-button": {
      display: "none",
    },
    "& input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield", // Firefox
    },
    label: {
      color: darkMode ? "#ccc" : "#000",
    },
  };

  function handleClick(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function calculateEMI() {
    console.log(state);
    let p = state?.amount;
    let r = state?.intrest / 12 / 100;
    console.log(r);
    let n = state?.years * 12;

    let sub = Math.pow(1 + r, n);
    console.log("sub", sub);

    let result = (p * r * sub) / (sub - 1);
    console.log(result);
    setEMI(result);
  }
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", p: 2 }}>
      <div>
        <h1 style={{ color: darkMode ? "#fff" : "#000" }}>
          Loan Calculator Dashboard
        </h1>
        <span>
          <TextField
            label="Loan Amount"
            id="outlined-start-adornment"
            sx={inputStyles}
            name="amount"
            value={state?.amount}
            onChange={(e) => handleClick(e)}
            required
            type="number"
            error={error}
            helperText={
              <Box sx={{ minHeight: "1.2em" }}>
                {error
                  ? state.amount == 0
                    ? "value  must be greater than 0 "
                    : state.amount >= 100000
                    ? "value must be lessthan 100000"
                    : ""
                  : ""}
              </Box>
            }
          />
        </span>
        <TextField
          label="Interest Rate (%)"
          id="outlined-start-adornment"
          sx={inputStyles}
          name="intrest"
          value={state?.intrest}
          onChange={(e) => handleClick(e)}
          error={error}
          type="number"
          required
          helperText={
            <Box sx={{ minHeight: "1.2em" }}>
              {error
                ? state.intrest == 0
                  ? "value  must be greater than 0 "
                  : state.intrest >= 100
                  ? "value must be lessthan 100"
                  : ""
                : ""}
            </Box>
          }
        />

        <TextField
          label="Term (Years)"
          id="outlined-start-adornment"
          sx={inputStyles}
          name="years"
          type="number"
          value={state?.years}
          onChange={(e) => handleClick(e)}
          error={error}
          required
          helperText={
            <Box sx={{ minHeight: "1.2em" }}>
              {error
                ? state.years == 0
                  ? "value  must be greater than 0 "
                  : state.years >= 30
                  ? "value must be lessthan 30"
                  : ""
                : ""}
            </Box>
          }
        ></TextField>

        <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              if (state.amount == 0 || state.intrest == 0 || state.years == 0) {
                setError(true);
              } else if (
                state.amount >= 100000 ||
                state.intrest >= 100 ||
                state.years >= 30
              ) {
                setError(true);
              } else {
                setError(false);
                calculateEMI();
              }
            }}
          >
            Calculate
          </Button>
        </Stack>
        {emi ? (
          <p>
            Monthly EMI:{emi && emi.toFixed(2)}
            USD
          </p>
        ) : (
          ""
        )}
        {emi ? (
          <BasicSelect
            chooseCurrency={chooseCurrency}
            setChooseCurrency={setChooseCurrency}
            setEMI={setEMI}
          />
        ) : (
          ""
        )}
      </div>
    </Box>
  );
}
export default InputField;
