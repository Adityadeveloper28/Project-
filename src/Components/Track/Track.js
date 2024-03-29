import React from "react";
import "./track.css";
import gif from "./Time machine-bro.png";
import gif1 from "./Firmware-amico.png";
import gif3 from "./Real-time Sync-cuate.png";
import gif4 from "./House restyling-bro.png";
import png1 from "./people using robots-amico.png";
import png2 from "./Stamp collecting-bro.png";

function Track() {
  return (
    <div className="container-fluid p-3 mt-5" id="track">
      <br />
      <div className="container">
        <div className="fw-bolder text-center text-white track ">TRACKS</div>
        <p className="text-white text-center para mt-2">
          The following tracks refers to the categories in which your project
          belong Entries are not restricted to these topics only.
        </p>
        <div className="row justify-content-md-center">
          <div className="col p-2 d-flex justify-content-center">
            <div className="card border-5 track1" style={{ width: "23rem" }}>
              <img
                src={gif}
                alt="Your GIF"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="rounded-3  mt-1 Imn"
              />

              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 1</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered rounded-2 p-2">
                <li className="list-group-item track2">
                  Mechanical System Design and Development{" "}
                </li>
                <li className="list-group-item track2">
                  Renewable & Non Renewable Energy
                </li>
                <li className="list-group-item track2">Industry 4.0</li>
                <li className="list-group-item track2">Electric Vehicle</li>
                <li className="list-group-item track2">
                  AI and ML application to Mechanical Systems
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-2  d-flex justify-content-center">
            <div className="card border-5  track1" style={{ width: "23rem" }}>
              <img
                src={gif1}
                alt="Your GIF"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="rounded-3  mt-1 Imn"
              />

              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 2</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered p-2">
                <li className="list-group-item track2">
                  Microcontroller and Embedded Systems
                </li>
                <li className="list-group-item track2">IoT and Industry 4.0</li>
                <li className="list-group-item track2">
                  Signal,Image, Speech & Video Processing
                </li>
                <li className="list-group-item track2">
                  Emerging Wireless Communication Technologies
                </li>
                <li className="list-group-item track2"> VLSI Application</li>
                <li className="list-group-item track2">
                  {" "}
                  Automation using PLC,SCADA and DCS
                </li>

                <li className="list-group-item track2">
                  {" "}
                  Biomedical Instrumentation
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-2  d-flex justify-content-center rounded-3">
            <div className="card border-5 track1" style={{ width: "23rem" }}>
              <img
                src={png1}
                alt="Your GIF"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="rounded-3  mt-1 Imn "
              />
              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 3</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered p-2">
                <li className="list-group-item track2">Data Science</li>
                <li className="list-group-item track2">
                  Artificial Intelligence{" "}
                </li>
                <li className="list-group-item track2">Machine Learning</li>
                <li className="list-group-item track2">Robotics</li>
                <li className="list-group-item track2">Deep Learning</li>
                <li className="list-group-item track2">
                  ⁠Natural Language Processing
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-2  d-flex justify-content-center ">
            <div className="card border-5  track1 " style={{ width: "23rem" }}>
              <img
                src={gif3}
                alt="Your GIF"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="rounded-3  mt-1 Imn"
              />

              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 4</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered p-2">
                <li className="list-group-item track2">
                  Cloud computing & Big Data Analytics{" "}
                </li>
                <li className="list-group-item track2">
                  Cyber security & Blockchain
                </li>
                <li className="list-group-item track2">Web Of Things</li>
                <li className="list-group-item track2">
                  Mobile & Web Application{" "}
                </li>
                <li className="list-group-item track2">Soft computing</li>
              </ul>
            </div>
          </div>
          <div className="col p-2  d-flex justify-content-center">
            <div className="card border-5  track1" style={{ width: "23rem" }}>
              <img
                src={gif4}
                alt="Your GIF"
                className="rounded-3  mt-1 Imn"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />

              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 5</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered p-2">
                <li className="list-group-item track2">
                  {" "}
                  Concrete Technology and Structural Engg.
                </li>
                <li className="list-group-item track2">
                  Construction Management and Urban Planning
                </li>
                <li className="list-group-item track2">
                  Transportation Engg. and Geotechnical Engg.
                </li>
                <li className="list-group-item track2">
                  Environmental and Water Resources Engg.
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-2  d-flex justify-content-center">
            <div className="card border-5  track1" style={{ width: "23rem" }}>
              <img
                src={png2}
                alt="Your GIF"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="rounded-3  mt-1 Imn"
              />

              <div className="card-header mt-2">
                <h5 className="card-title fw-bolder trc">Track 6</h5>
              </div>
              <ul className="list-group list-group-flush  list-group-numbered p-2">
                <li className="list-group-item track2">
                  IKS based Approaches in Maths, and Physical Sciences.
                </li>
                <li className="list-group-item track2">
                  Indian Perspectives on maintaining Physical and Psychological
                  Health.
                </li>
                <li className="list-group-item track2">
                  Ancient Indian Traditions of Architecture and Its Application
                  to Modern Civil Engineering
                </li>
                <li className="list-group-item track2">
                  Indian Traditions of Sustainable Agriculture and Food
                  Preservation.
                </li>
                <li className="list-group-item track2">
                  {" "}
                  The Promotion of IKS through the medium of Indian Languages.
                </li>
                <li className="list-group-item track2">
                  {" "}
                  Traditional Indian Practices of Conserving Water and
                  Environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
