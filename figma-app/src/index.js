import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing";
import Employee from "./pages/employee-info";
import LaptopDesc from "./pages/laptop-desc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LaptopDesc />
  </React.StrictMode>
);
