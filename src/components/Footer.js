import React from "react";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";

export default function Footer() {
  return (
    <div>
      <div className="row d-flex justify-content-center m-5">
        <div
          className="d-flex justify-content-center col-lg-8 mx-5 my-5"
          style={{ width: "20%" }}
        >
          <img
            src={bootstrap}
            alt="bootstrap"
            className="img-fluid rounded mx-2"
          />
          <img src={react} alt="react" className="img-fluid rounded mx-2" />
          <img
            src={javascript}
            alt="javascript"
            className="img-fluid rounded mx-2"
          />
          <img src={html} alt="html" className="img-fluid rounded mx-2" />
        </div>
      </div>
      <i
        className="fa fa-copyright primary d-flex justify-content-center fs-5"
        aria-hidden="true"
      >
        Made by AKM 👨‍💻
      </i>
    </div>
  );
}
