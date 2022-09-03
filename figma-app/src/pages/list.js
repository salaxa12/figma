import React from "react";
import "./styles/list.css";
import lsitPhoto from "../media/list-photo-ex.png";
import back from "../media/back-icon.png";

const ListItem = () => {
  return (
    <div className="col-lg-5 col-md-5 col-sm-11 d-flex row list-card">
      <div className="col-6 d-flex justify-content-center align-items-center list-card-photo">
        <img
          src={lsitPhoto}
          className="col-12 list-card-image"
          alt="list photo"
          height="178px"
        ></img>
      </div>
      <div className="col-6 list-card-content">
        <p className="list-card-owner">ირინე ჩანქსელიანი</p>
        <p className="list-card-CPU">Pentium II</p>
        <a className="list-card-link">მეტის ნახვა</a>
      </div>
    </div>
  );
};

export default function List() {
  return (
    <div className="container">
      <nav className="justify-content-center col-12">
        <button className="btn back-button">
          <img src={back} alt="back icon" width="9.21px" height="16px"></img>
        </button>
        <h2 className="text-center list-title">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h2>
      </nav>

      <div className="d-flex justify-content-center  list-content row">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
