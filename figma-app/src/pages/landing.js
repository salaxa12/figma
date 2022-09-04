import React, { useCallback } from "react";
import "./styles/landing.css";
import banner from "../media/banner.png";
import phoneBanner from "../media/mobile-banner.png";
import logo from "../media/LOGO.png";
import { useNavigate } from "react-router-dom";

function Landing(props) {
  const navigate = useNavigate();
  const linkEmployee = useCallback(
    () => navigate("/employee", { replace: true }),
    [navigate]
  );

  const linkList = useCallback(() => navigate("/list", { replace: true }), [
    navigate,
  ]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center container main">
      <img src={logo} alt="logo" className="col-5 landing-logo"></img>

      <picture>
        <source srcset={phoneBanner} media="(max-width: 390px)" />
        <source srcset={banner} media="(min-width: 391px)" />
        <img
          src={banner}
          alt="banner"
          className="col-lg-12 col-md-12 col-sm-11 landing-banner"
        ></img>
      </picture>
      <div className="d-flex flex-column col-lg-3 col-md-5 col-sm-12 col-xs-12 landing-button-area">
        <button type="button" className="landing-button" onClick={linkEmployee}>
          ჩანაწერის დამატება
        </button>

        <button type="button" className="landing-button" onClick={linkList}>
          ჩანაწერების სია
        </button>
      </div>
    </div>
  );
}

export default Landing;
