import React, { useCallback, useState, useEffect } from "react";
import "./styles/employee-info.css";
import logo from "../media/LOGO-2.png";
import back from "../media/back-icon.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// d107d58f5242df18f15449e27be4989d - redberry token

function EmployeeInfo(props) {
  useEffect(() => {
    fetchData();
  }, []);

  let currentTeamsId;
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [possiblePositions, setPossiblePositions] = useState([]);
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);

  async function fetchData() {
    let teamsData;
    let positionsData;
    await axios
      .get("https://pcfy.redberryinternship.ge/api/teams")
      .then((res) => {
        teamsData = res.data.data;
      });
    setTeams(teamsData);

    await axios
      .get("https://pcfy.redberryinternship.ge/api/positions")
      .then((res) => {
        positionsData = res.data.data;
      });
    setPositions(positionsData);
  }

  function validateData() {}

  console.log(teams);
  console.log(positions);

  const linkLanding = useCallback(() => navigate("/", { replace: true }), [
    navigate,
  ]);

  const linkLaptopDesc = useCallback(
    () => navigate("/addLaptop", { replace: true }),
    [navigate]
  );

  return (
    <div className="d-flex flex-column align-items-center justify-content-center container">
      <nav className="justify-content-center col-12">
        <button className="btn back-button" onClick={linkLanding}>
          <img src={back} alt="back icon" width="9.21px" height="16px"></img>
        </button>

        <Link to="/employee" className="nav-link text-center">
          თ<span>ანამშრომლის ინფ</span>ო
        </Link>

        <Link to="/addLaptop" className="nav-link text-center inactive-page">
          ლეპტოპის მახასიათებელი
        </Link>

        <p
          className="align-item-center text-center page-marker"
          style={{ color: "gray" }}
        >
          1/2
        </p>
      </nav>
      <div className="col-lg-8 col-md-8 col-sm-12 main">
        <form>
          <div className="col-12 row form-segment">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3 col-12">
                <label htmlFor="inputFirstName" className="form-label">
                  სახელი
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputfirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="გრიშა"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <div id="firstNameHelp" className="form-text">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mb-3 col-12">
                <label htmlFor="inputLastName" className="form-label">
                  გვარი
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="ბაგრატიონი"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <div id="lastNameHelp" className="form-text">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 form-segment">
            <select
              className="form-select emp-select"
              aria-label="Default select"
              onChange={(e) => {
                //sets team value
                setTeam(e.target.value);

                //finds out the id
                teams.forEach((item) => {
                  if (item.name === e.target.value) {
                    currentTeamsId = item.id;
                    console.log(currentTeamsId);
                  }
                });

                //creates temporary array of positions based on already found out ID
                let arr = [];
                positions.forEach((item) => {
                  if (item.team_id === currentTeamsId) {
                    arr.push(item);
                  }
                });

                // appends temporary array with target hook
                setPossiblePositions(arr);
              }}
            >
              <option selected disabled hidden>
                თიმი
              </option>
              {teams.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-12 form-segment">
            <select
              className="form-select emp-select"
              aria-label="Default select"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            >
              <option selected disabled hidden>
                პოზიცია
              </option>
              {possiblePositions.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-12 form-segment">
            <div className="mb-3 col-12">
              <label htmlFor="inputEmail" className="form-label">
                მეილი
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="grish666@redberry.ge"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                უნდა მთავრდებოდეს @redberry.ge-ით
              </div>
            </div>
          </div>

          <div className="col-12 form-segment">
            <div className="mb-3 col-12">
              <label htmlFor="inputPhoneNumber" className="form-label">
                ტელეფონის ნომერი
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPhoneNumber"
                aria-describedby="phoneHelp"
                placeholder="+995 598 00 07 01"
              />
              <div id="phoneHelp" className="form-text">
                უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
              </div>
              <div id="phoneHelpMobile" className="form-text d-none">
                ქართული მობ-ნომრის ფორმატი
              </div>
            </div>
          </div>

          <div className="d-flex flex-row-reverse col-12 form-segment">
            <button className="btn form-button" onClick={linkLaptopDesc}>
              შემდეგი
            </button>
          </div>
        </form>
      </div>
      <footer>
        <img src={logo} alt="logo" width="85" height="85"></img>
      </footer>
    </div>
  );
}

export default EmployeeInfo;
