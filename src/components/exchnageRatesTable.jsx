import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Typography,
} from "@mui/material";
import useFetchExchangeRates from "../fetchExchangeRates";
import { useContext } from "react";
import { contex } from "../App";

export default function ExchangeRatesTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const { result } = useFetchExchangeRates("USD");
  const { darkMode } = useContext(contex);
  console.log(result?.data?.data?.conversion_rates);
  let finalData = result?.data?.data?.conversion_rates;

  const rows = Object.entries(finalData || {}).map(([currency, value]) => ({
    currency,
    value,
  }));

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  let customStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "white" : "black",
  };
  return (
    <div>
      {finalData ? (
        <Box sx={{ maxWidth: "100%", mx: "auto", mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Currency Rates Table
          </Typography>
          <TableContainer component={Paper} style={customStyle}>
            <Table size="small" style={customStyle}>
              <TableHead style={customStyle}>
                <TableRow style={customStyle}>
                  <TableCell style={customStyle}>Currency</TableCell>
                  <TableCell align="right" style={customStyle}>
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={customStyle}>
                {paginatedRows.map((row, index) => (
                  <TableRow key={index} style={customStyle}>
                    <TableCell style={customStyle}>{row.currency}</TableCell>
                    <TableCell align="right" style={customStyle}>
                      {row.value.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              style={customStyle}
              component="div"
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Limit:"
              labelDisplayedRows={({ from, to, count }) =>
                `Page ${page + 1} — ${from}-${to} of ${count}`
              }
            />
          </TableContainer>
        </Box>
      ) : (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          {" "}
          "Loading...."
        </div>
      )}
    </div>
  );
}
