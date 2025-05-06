import React from "react";
import { Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useContext } from "react";
import { contex } from "../App";
const CustomTable = ({ data, chooseCurrency }) => {
  const { darkMode } = useContext(contex);
  console.log(data);
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Amortization Schedule {chooseCurrency}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 370, overflow: "auto", minWidth: 700, maxWidth: 1200 }}
        style={{
          backgroundColor: darkMode ? "#333" : "#fff",
          color: darkMode ? "white" : "black",
        }}
      >
        <Table sx={{ width: "100%" }} stickyHeader>
          <TableHead style={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
            <TableRow style={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
              <TableCell
                sx={{ width: "25%" }}
                style={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "white" : "black",
                }}
              >
                <strong>Month</strong>
              </TableCell>
              <TableCell
                sx={{ width: "25%" }}
                style={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "white" : "black",
                }}
              >
                <strong>Principal</strong>
              </TableCell>
              <TableCell
                sx={{ width: "25%" }}
                style={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "white" : "black",
                }}
              >
                <strong>Intrest</strong>
              </TableCell>
              <TableCell
                sx={{ width: "25%" }}
                style={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "white" : "black",
                }}
              >
                <strong>Remaining Balance</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: darkMode ? "white" : "black" }}>
                  {index + 1}
                </TableCell>
                <TableCell style={{ color: darkMode ? "white" : "black" }}>
                  {" "}
                  {item.principal} {"\u00A0"}
                  {chooseCurrency && chooseCurrency}
                </TableCell>
                <TableCell style={{ color: darkMode ? "white" : "black" }}>
                  {item.intrest} {"\u00A0"}
                  {chooseCurrency && chooseCurrency}
                </TableCell>
                <TableCell style={{ color: darkMode ? "white" : "black" }}>
                  {item.balance}
                  {"\u00A0"}
                  {chooseCurrency && chooseCurrency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
