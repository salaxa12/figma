import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing";
import Employee from "./pages/employee-info";
import LaptopDesc from "./pages/laptop-desc";
import List from "./pages/list";
import LaptopPage from "./pages/laptop-page";
import Test from "./test";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="list" element={<List />} />
        <Route path="test" element={<Test />} />
        <Route path="employee" element={<Employee />} />
        <Route path="laptop" element={<LaptopPage />} />
        <Route path="addLaptop" element={<LaptopDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
