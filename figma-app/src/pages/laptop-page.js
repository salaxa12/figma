import React from "react";
import "./styles/laptop-page.css";
import back from "../media/back-icon.png";
import laptopPhoto from "../media/laptop-photo-ex.png";

const Entry = (props) => {
  return (
    <div className="d-flex row laptop-content-entry">
      <p className="col-6 laptop-entry-field">{props.field + ":"}</p>
      <p className="col-6 laptop-entry-value">{props.value}</p>
    </div>
  );
};

export default function LaptopPage() {
  return (
    <div>
      <nav className="justify-content-center col-12">
        <button className="btn back-button">
          <img src={back} alt="back icon" width="9.21px" height="16px"></img>
        </button>
        <h2 className="text-center laptop-page-title">ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h2>
      </nav>

      <div className="container laptop-page-content">
        <div className="aptop-page-upper">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 laptop-content-photo">
              <img
                src={laptopPhoto}
                className=" laptop-content-image"
                alt="laptop photo"
              ></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 laptop-content-info">
              <Entry field="სახელი" value="აკაკი წერეთელი" />
              <Entry field="თიმი" value="დიზაინერები" />
              <Entry field="პოზიცია" value="ილუსტრატორი" />
              <Entry field="მეილი" value="ako@redberry.ge" />
              <Entry field="ტელ. ნომერი" value="+995 583 45 28 33" />
            </div>
          </div>
        </div>
        <hr className="laptop-content-line" />
        <div className="aptop-page-mid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 row">
              <div className="col-12 laptop-content-info">
                <Entry field="ლეპტოპის სახელი" value="Razor Bla Bla" />
                <Entry field="ლეპტოპის ბრენდი" value="HP" />
                <Entry field="პოზიცია" value="16" />
                <Entry field="მეხსიერების ტიპი" value="SSD" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 row">
              <div className="col-12 laptop-content-info info-second">
                <Entry field="CPU" value="intel 5" />
                <Entry field="CPU-ს ბირთვი" value="დიზაინერები" />
                <Entry field="CPU-ს ნაკადი" value="ილუსტრატორი" />
              </div>
            </div>
          </div>
        </div>
        <hr className="laptop-content-line" />
        <div className="laptop-page-lower">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 row">
              <div className="col-12 laptop-content-info">
                <Entry field="ლეპტოპის მდგომარეობა" value="მეორადი" />
                <Entry field="ლეპტოპის ფასი" value="1500 ₾" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 row">
              <div className="col-12 laptop-content-info info-second">
                <Entry field="შეძენის რიცხვი" value="12/06/2130" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
