import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import banner from "../src/media/banner.png";
import phoneBanner from "../src/media/mobile-banner.png";
import logo from "../src/media/LOGO.png";

const Test = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center container main">
      <img src={logo} alt="logo" className="col-5 landing-logo"></img>

      <picture>
        <source srcset={phoneBanner} media="(max-width: 390px)" />
        <img
          src={banner}
          alt="banner"
          className="col-lg-5 col-md-8 col-sm-11 landing-banner"
        ></img>
      </picture>
      <div className="d-flex flex-column col-lg-3 col-md-5 col-sm-12 col-xs-12 landing-button-area">
        <button type="button" class="landing-button">
          ჩანაწერის დამატება
        </button>
        <button type="button" class="landing-button">
          ჩანაწერების სია
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
