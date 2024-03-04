import React from "react";
import "../Main/Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container-fluid  text-white p-0 " id="new">
      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="text-center p-0 ">
          <h1 className="p-0 m-auto fw-bolder intro">Oscillations'24</h1>
          <hr className="hr border-5  justify-item-center" />
        </div>
        <div className=" text-center">
          <h1 className="fw-bolder sub">
            Technical Paper Presentation{" "}
          </h1>
          <h1 className="fw-bolder sub">On 7th April 2024</h1>
          <hr className="hr border-5" />
        </div>
        <div className="sty text-center animated-text">
          Showcase your innovate research work and win exciting prizes
        </div>

        <div className="text-center m-auto mt-5">
          <Link className="btn btn-light fs-3 sub rounded-pill" type="button">
            Registeration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;