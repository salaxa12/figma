import React from "react";
import "./styles/employee-info.css";
import logo from "../media/LOGO-2.png";

function employeeInfo(props) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center container">
      <nav className="d-flex justify-content-center col-12">
        <a href="#" className="nav-link ">
          თანამშრომლის ინფო
        </a>

        <a href="#" className="nav-link ">
          ლეპტოპის მახასიათებელი
        </a>
      </nav>
      <hr></hr>
      <div className="col-10 main">
        <form>
          <div className="col-12 row form-segment">
            <div className="col-6">
              <div className="mb-3 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  სახელი
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="გრიშა"
                />
                <div id="emailHelp" className="form-text">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  გვარი
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ბაგრატიონი"
                />
                <div id="emailHelp" className="form-text">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 form-segment">
            <select class="form-select" aria-label="Default select example">
              <option selected>თიმი</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-12 form-segment">
            <select class="form-select" aria-label="Default select example">
              <option selected>პოზიცია</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-12 form-segment">
            <div className="mb-3 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                მეილი
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="grish666@redberry.ge"
              />
              <div id="emailHelp" className="form-text">
                უნდა მთავრდებოდეს @redberry.ge-ით
              </div>
            </div>
          </div>

          <div className="col-12 form-segment">
            <div className="mb-3 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                ტელეფონის ნომერი
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="+995 598 00 07 01"
              />
              <div id="emailHelp" className="form-text">
                უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
              </div>
            </div>
          </div>

          <div className="d-flex flex-row-reverse col-12 form-segment">
            <button className="btn form-button">შემდეგი</button>
          </div>
        </form>
      </div>
      <footer>
        <img src={logo} alt="logo" width="85" height="85"></img>
      </footer>
    </div>
  );
}

export default employeeInfo;
