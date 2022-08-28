import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing";
import Employee from "./pages/employee-info";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>
);
