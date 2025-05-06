import React from "react";
import Navbar from "../components/Navbar";

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>404 Page NotFound</h2>
      </div>
    </div>
  );
}

export default PageNotFound;
