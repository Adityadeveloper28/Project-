import React, { useEffect, useState } from "react";
import "./Rule.css";
import png1 from "./Team work-rafiki.png";
import png2 from "./Cash Payment-bro.png";
import png3 from "./Forms-amico.png";
import png4 from "./guidelines.png";
import png5 from "./shop.png";
import png6 from "./contact-book.png";
function Rule() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-in-text");
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-fluid mt-5 p-0 " id="rule">
      <br />
      <br />
      <div className="container">
        <div className="fw-bolder text-center rule text-white">RULES</div>
        <p className="text-white text-center para mt-2">
          There are some rules you need to follow..!!!
        </p>
        <div className="row justify-content-center d-flex mt-3">
          <div className="col justify-content-center d-flex mt-2">
            <div
              className="card text-white"
              style={{ width: "30rem", backgroundColor: "#101318" }}
            >
              <img
                src={png1}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "35%" }}
              />
              <div className="card-body">
                <h1 className="card-title fw-bolder text-center fs-3">
                  Team Size
                </h1>
                <p className="card-text text-center fs-5">
                  A team can consist of Maximum 4 members.Bearing a valid
                  college ID mandatory.
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "30rem", backgroundColor: "#101318" }}
            >
              <img
                src={png2}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "35%" }}
              />
              <div className="card-body">
                <h1 className="card-title fw-bolder text-center fs-3">
                  Resgiration Fee
                </h1>
                <p className="card-text m-auto ">
                  <ul style={{}}>
                    <li>
                      {" "}
                      The rates are per group basis Internal (For VCET
                      Students): BE Major Project: ₹ 200/-
                    </li>
                    <li>
                      TE/SE Minor Project: ₹ 150/- External (For NON-VCET
                      Students): BE Major Project: ₹ 300/-{" "}
                    </li>
                    <li>TE/SE Minor Project: ₹ 200/-.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "30rem", backgroundColor: "#101318" }}
            >
              <img
                src={png3}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "35%" }}
              />
              <div className="card-body ">
                <h1 className="card-title fw-bolder text-center fs-3">
                  REGISTRATION
                </h1>
                <button className="btn btn-outline-light m-auto d-flex mt-5 fs-2 fw-bolder">
                  Register Here
                </button>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "30rem", backgroundColor: "#101318" }}
            >
              <img
                src={png3}
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "35%" }}
              />
              <div className="card-body ">
                <h1 className="card-title fw-bolder text-center fs-3">
                  ABSTRACT SUBMISSION DEADLINE
                </h1>
                <p className="card-text text-center">
                  The abstract of project should not exceed 750 words and is to
                  be sent via the mail ids provided 5th March 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4 bg-dark p-2 rounded-3">
          <img src={png4} style={{ width: "5rem" }} />
          <h1 className="text-center text-white p-3">
            Registration Guidelines
          </h1>
          <div className="row-sm p-1 m-auto">
            <p>
              <ol>
                <li>
                  An Abstract of maximum 750 words should be sent before 20th
                  March'24 on the following email addresses with respect to your
                  track:
                  <br />
                  <a href="mailto:track1@vcet.edu.in">Track 1</a> <br />
                  <a href="mailto:track2@vcet.edu.in">Track 2</a> <br />
                  <a href="mailto:track3@vcet.edu.in">Track 3</a> <br />
                  <a href="mailto:track4@vcet.edu.in">Track 4</a> <br />
                  <a href="mailto:track5@vcet.edu.in">Track 5</a>
                </li>
                <li>
                  A sample abstract would look like{" "}
                  <a
                    href="IEEE_Template.doc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    this
                  </a>
                </li>
                <li>
                  The subject of the email should include;{" "}
                  <b style={{ color: "rgb(204 148 202)" }}>
                    college name and track number
                  </b>
                </li>
                <li>
                  These details should be also present in the email along with
                  project title and abstract.
                </li>
                <li>
                  Project will be shortlisted on the basis of the abstract and
                  selected participants will be notified through the emails
                  along with further instructions.
                </li>
                <li>
                  The participants are expected to complete the registration
                  process for the event through the registration link after
                  getting a notification mail from the committee. Registration
                  link is available in the brochure as well as the rule book.
                </li>
                <li>
                  <b style={{ color: "rgb(204 148 202)" }}>Important Dates</b>
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    20th March'24:
                  </b>{" "}
                  Abstract submission deadline
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    23rd March'24:
                  </b>{" "}
                  Acceptance Notification
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    24th March'24:
                  </b>{" "}
                  Full Paper Presentation
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    28th March'24:
                  </b>{" "}
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    7th April'24:
                  </b>{" "}
                  Final presentation competition at VCET Campus, Vasai.{" "}
                </li>
                {/* Registration fee details can be added here */}
                <li>
                  As soon as you receive the confirmation mail, do the payment
                  and save the transaction ID.
                </li>
                <li>
                  Complete the registration procedure by updating project
                  details and payment details.
                </li>
                <br />
                <li>
                  For more info kindly go through the rule book -
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="Rule Book For Oscillations.pdf"
                  >
                    Rulebook
                  </a>
                  <br />
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4 gap-5">
          <div className="col-lg text-white">
            <div className="row">
              <img src={png5} style={{ width: "5rem" }} className="m-auto" />
              <h3 className="text-center">Payment details</h3>
            </div>
            <div className="row  payment">
              <ul>
                <li>Payment should be done by 04th April 2023 itself.</li>
                <li>
                  Track 1:
                  <p>
                    Raj Sanghrajka -
                    <a
                      href="tel:9653278209"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      9653278209
                    </a>
                  </p>
                </li>
                <li>
                  Track 2:
                  <p>
                    Nilesh Jangid -
                    <a
                      href="tel:8454913316"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8454913316{" "}
                    </a>
                  </p>
                </li>
                <li>
                  Track 3:
                  <p>
                    Abhinav Vishwakarma -
                    <a
                      href="tel:8237177660"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8237177660
                    </a>
                  </p>
                </li>
                <li>
                  Track 4:
                  <p>
                    Harsh Sawant -
                    <a
                      href="tel: 7798963544"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      7798963544
                    </a>
                  </p>
                </li>
                <li>
                  Track 5:
                  <p>
                    Hardik Vora -
                    <a
                      href="tel:8600578184 "
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8600578184{" "}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg text-white">
            <div className="row">
              <img src={png6} style={{ width: "5rem" }} className="m-auto" />
              <h3 className="text-center">Contacts</h3>
            </div>
            <div className="row  accord">
              <div
                className="accordion accordion-flush "
                id="accordionFlushExample"
              >
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Track 1{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Aditya Hendre:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 996919962"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 996919962
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Chintan Patel:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 9112355745"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9112355745
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Track 2{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Shikhar Mehta:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8080080780"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8080080780
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Nikhil Kargatia:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 7875856630"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7875856630
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Track 3{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center"> Varun Tatkare :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8928008848"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8928008848
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center"> Siddhant Lokare:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 9594370381
                          "
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9594370381
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header ">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Track 4{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center"> Aditi Sawant -</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91  9623265606"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9623265606
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Vedant Golap:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 +91 9623265606"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9623265606
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark-subtle">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Track 5{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center">Deeksha Shetty: </dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 80974 70510"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 80974 70510
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Gaurang Thakur :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 88052 73185"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 88052 73185{" "}
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white prize ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          Prize Pool
        </div>
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white prize ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          ₹80,000
        </div>
      </div>
    </div>
  );
}

export default Rule;
