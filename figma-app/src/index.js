import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing";
import Employee from "./pages/employee-info";
import LaptopDesc from "./pages/laptop-desc";
import List from "./pages/list";
import LaptopPage from "./pages/laptop-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LaptopPage />
  </React.StrictMode>
);
