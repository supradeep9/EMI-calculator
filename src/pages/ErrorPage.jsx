import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Something went wrong in the application.</h2>
      <Stack spacing={2} direction="row">
        <NavLink to="/">
          {" "}
          <Button variant="outlined">Go Home</Button>{" "}
        </NavLink>
      </Stack>
    </div>
  );
}

export default ErrorPage;
