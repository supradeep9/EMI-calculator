import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { contex } from "../App";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function BasicSelect({
  chooseCurrency,
  setChooseCurrency,
  setEMI,
}) {
  const { darkMode } = useContext(contex);
  const inputStyles = {
    m: 1,

    maxWidth: 120,
    input: { color: darkMode ? "#fff" : "#000" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: darkMode ? "#333" : "#fff",
      minWidth: 150,
      "& fieldset": {
        borderColor: darkMode ? "#aaa" : "#ccc",
      },
      "&:hover fieldset": {
        borderColor: darkMode ? "#fff" : "#000",
      },
    },

    label: {
      color: darkMode ? "#ccc" : "#000",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "",
      }}
    >
      <Box sx={inputStyles}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chooseCurrency}
            label="Age"
            onChange={(e) => setChooseCurrency(e.target.value)}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          sx={{
            color: "pink",
            borderColor: "pink",
            "&:hover": {
              backgroundColor: "pink",
              color: "white",
              borderColor: "pink",
            },
          }}
          onClick={() => setEMI(0)}
        >
          Reset
        </Button>
      </Stack>
    </div>
  );
}
