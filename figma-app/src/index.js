import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Test = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
