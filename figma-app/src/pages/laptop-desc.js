import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./styles/laptop-desc.css";
import logo from "../media/LOGO-2.png";
import success from "../media/success.png";
import camera from "../media/camera.png";
import back from "../media/back-icon.png";
import confetti from "../media/confetti.png";

export default function LaptopDesc(props) {
  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }

  const [dropZone, setDropZone] = useState("");
  const [isDissapeared, setIsDissapeared] = useState("");
  const [isAppeared, setIsAppeared] = useState("d-none");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (file) => {
      setIsDissapeared("d-none");
      setIsAppeared("");
      setDropZone("drop-zone--submited");
      console.log(file);
      setFileName(file[0].name);
      setFileSize(file[0].size);
    },
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-column align-items-center justify-content-center container">
      <nav className="justify-content-center col-12">
        <button className="btn back-button">
          <img src={back} alt="back icon" width="9.21px" height="16px"></img>
        </button>
        <a href="#" className="nav-link text-center inactive-page">
          თანამშრომლის ინფო
        </a>

        <a href="#" className="nav-link text-center laptop-desc">
          ლ<span>ეპტოპის მახასიათებელ</span>ი
        </a>

        <p
          className="align-item-center text-center page-marker"
          style={{ color: "gray" }}
        >
          2/2
        </p>
      </nav>

      <div className="col-lg-9 col-md-8 col-sm-12 main">
        <form>
          <div className="col-12">
            <div className="col-12 imagedrop">
              {/* iamge drop section */}
              <div
                {...getRootProps()}
                className={`d-flex justify-content-center align-items-center col-12 drop-zone ${dropZone}`}
              >
                <input {...getInputProps()} />

                <div className="dropzone-content-mobile">
                  <div
                    className={`d-flex justify-content-center align-items-center dropzone-pic-mobile ${isDissapeared}`}
                  >
                    <img
                      src={camera}
                      alt="camera photo"
                      width="45px"
                      height="40px"
                      style={{ marginBottom: "30px" }}
                    ></img>
                  </div>
                  <p className={`dropzone-hint-mobile ${isDissapeared}`}>
                    ლეპტოპის ფოტოს <br /> ატვირთვა
                  </p>
                </div>

                <div className="dropzone-content">
                  <p className={`dropzone-hint ${isDissapeared}`}>
                    ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
                  </p>
                  {/* image drop button */}
                  <button
                    className={`btn form-button dropzone-submit ${isDissapeared}`}
                  >
                    ატვირთე
                  </button>
                </div>
                <div className="col-12 image-preview">{images}</div>
              </div>
              <div
                className={`d-flex col-12 justify-content-between align-items-center ${isAppeared}`}
                style={{ marginTop: "20px" }}
              >
                <div className="d-flex row col-8 photo-content">
                  <div className="d-flex col-lg-2 col-sm-4 justify-content-center align-items-center photo-icon ">
                    <img
                      src={success}
                      width="20px"
                      height="20px"
                      className="photo-icon"
                    ></img>
                  </div>
                  <p className="col-5  d-flex justify-content-center  align-items-center photo-name ">
                    {fileName}
                  </p>

                  <p className="col-2  d-flex justify-content-center  align-items-center photo-size ">
                    {bytesToSize(fileSize)}
                  </p>
                </div>

                <div className="col-5  drop-zone-resubmit-div">
                  <button
                    {...getRootProps()}
                    className="col-12 btn form-button drop-zone-resubmit"
                  >
                    თავიდან ატვირთე
                  </button>
                </div>

                <div className="col-5 photo-content-mobile row">
                  <div className="d-flex col-4 justify-content-center align-items-center photo-icon-mobile">
                    <img src={success} width="20px" height="20px"></img>
                  </div>
                  <div className="d-block col-8 photo-info-mobile">
                    <p className="col-12 photo-name-mobile">{fileName}</p>
                    <p className="photo-size-mobile">{bytesToSize(fileSize)}</p>
                  </div>
                </div>

                <div className="col-7  drop-zone-resubmit-div-mobile">
                  <button
                    {...getRootProps()}
                    className="col-12 btn form-button drop-zone-resubmit"
                  >
                    თავიდან ატვირთე
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 row form-segment">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  ლეპტოპის სახელი
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="HP"
                  />
                  <div id="emailHelp" className="form-text">
                    ლათინური ასოები, ციფრები, !@#$%^&*()_+=
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="col-12 ">
                  <select
                    class="form-select emp-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled hidden>
                      ლეპტოპის ბრენდი
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="col-12 row form-segment">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <select
                  class="form-select emp-select"
                  aria-label="Default select example"
                >
                  <option selected disabled hidden>
                    CPU
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  CPU-ს ბირთვი
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="14"
                  />
                  <div id="emailHelp" className="form-text">
                    მხოლოდ ციფრები
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  CPU-ს ნაკადი
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="365"
                  />
                  <div id="emailHelp" className="form-text">
                    მხოლოდ ციფრები
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 row form-segment">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  ლეპტოპის RAM (GB)
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="16"
                  />
                  <div id="emailHelp" className="form-text">
                    მხოლოდ ციფრები
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="exampleInputEmail1"
                  className="d-block form-label"
                >
                  მეხსიერების ტიპი
                </label>
                <div className="col-12 hard-drive-select">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" htmlFor="inlineRadio1">
                      SSD
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      HDD
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="col-12 row form-segment">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  შეძენის რიცხვი (არჩევითი)
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="დდ / თთ / წწწწ"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  ლეპტოპის ფასი
                </label>
                <div className="mb-3 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0000"
                  />
                  <div id="emailHelp" className="form-text">
                    მხოლოდ ციფრები
                  </div>
                </div>
              </div>
              <div className="col-12 form-segment">
                <label
                  htmlFor="exampleInputEmail1"
                  className="d-block form-label"
                >
                  ლეპტოპის მდგომარეობა
                </label>
                <div className="col-12 hard-drive-select">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" htmlFor="inlineRadio1">
                      ახალი
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      მეორადი
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse justify-content-between col-12 form-segment">
            <button
              type="button"
              className="btn form-button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              შემდეგი
            </button>
            <button type className="btn form-button-back">
              უკან
            </button>
          </div>
        </form>
      </div>
      <footer>
        <img src={logo} alt="logo" width="85" height="85"></img>
      </footer>
      {/* modal */}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex flex-column justify-content-center align-items-center modal-main">
                <div className="upper-modal">
                  <img
                    src={confetti}
                    alt="confetti image"
                    width="230px"
                    height="258px"
                  ></img>
                  <h5>ჩანაწერი დამატებულია!</h5>
                </div>
                <div className="d-flex flex-column lower-modal">
                  <button className="btn form-button">სიაში გადაყვანა</button>
                  <button type className="btn form-button-back">
                    მთავარი
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
