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
        <div className="row justify-content-center d-flex mt-3" style={{fontFamily:'Anta'}}>
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
                  <ul style={{ fontSize:'15px'}}>
                 
                  
                    <li>
                      {" "}
                      The rates are per group per Project: ₹ 200/-
                    </li><li>
                      {" "}
                      The rates are per group per Project <code style={{color:'rgb(206 217 5)'}}> ( member of professional bodies)</code>: ₹ 150/-
                    </li>
                    <li>
                      TE/SE Minor Project: ₹ 150/- External (For NON-VCET
                      Students): BE Major Project: ₹ 300/-{" "}
                    </li>
                    
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
                <button className="btn btn-outline-warning m-auto d-flex mt-5 fs-2 fw-bolder" >
                  <a href="https://forms.gle/KKyhYHF8pGzL6ETTA" style={{textDecoration:'none'}}>
                  Register Here
                  </a>
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
        <div className="row justify-content-center d-flex mt-4 bg-dark p-2 rounded-3" style={{fontFamily:'Anta'}}>
          <img src={png4} style={{ width: "5rem" }} />
          <h1
            className="text-center text-white p-3"
            style={{
              fontFamily: "Anta",
            }}
          >
            Registration Guidelines
          </h1>
          <div className="row-sm p-1 m-auto">
            <p>
              <ol>
                <li >
                  An Abstract of maximum 750 words should be sent before 20th
                  March'24 on the following email addresses with respect to your
                  track:
                  <br />
                  <a href="mailto:track1@vcet.edu.in" style={{textDecoration:'none'}}>Track 1</a> <br />
                  <a href="mailto:track2@vcet.edu.in" style={{textDecoration:'none'}}>Track 2</a> <br />
                  <a href="mailto:track3@vcet.edu.in"style={{textDecoration:'none'}}>Track 3</a> <br />
                  <a href="mailto:track4@vcet.edu.in"style={{textDecoration:'none'}}>Track 4</a> <br />
                  <a href="mailto:track5@vcet.edu.in"style={{textDecoration:'none'}}>Track 5</a>
                </li>
                <li>
                  A sample abstract would look like{" "}
                  <a
                    href="https://docs.google.com/document/d/1lbLyTVEGZyAo7-V1M1Bh0me6vvb-ulcz/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-warning"
                    style={{textDecoration:'none'}}
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
                    26th March'24:
                  </b>{" "}
                  Abstract submission deadline
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    28rd March'24:
                  </b>{" "}
                  Acceptance Notification
                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    23th March'24:
                  </b>{" "}
                  Full Paper Presentation

                  <br />
                  <b style={{ color: "rgb(204 148 202)" }}>
                    5th April'24:
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
                    className="link "
                    target="_blank"
                    rel="noopener noreferrer"
                    href="Rule Book For Oscillations.pdf"
                    style={{textDecoration:'none'}}
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
              <h3
                className="text-center"
                style={{
                  fontFamily: "Anta",
                }}
              >
                Payment details
              </h3>
            </div>
            <div className="row  payment"style={{fontFamily:'Anta'}}>
              <ul>
                <li>Payment should be done by 4th April 2024 itself.</li>
                <li>
                  Track 1:
                  <p>
                    Abhigya Hazra -
                    <a
                      href="tel:9604297830"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9604297830
                    </a>
                  </p>
                </li>
                <li>
                  Track 2:
                  <p>
                    Yash Biranje -
                    <a
                      href="tel:9763999221"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9763999221
                    </a>
                  </p>
                </li>
                <li>
                  Track 3:
                  <p>
                    Shubham Shah -
                    <a
                      href="tel:9226797391"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9226797391
                    </a>
                  </p>
                </li>
                <li>
                  Track 4:
                  <p>
                    Ayush Churi -
                    <a
                      href="tel:8421419425"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;8421419425
                    </a>
                  </p>
                </li>
                <li>
                  Track 5:
                  <p>
                    Aditya Kute -
                    <a
                      href="tel:9769738332"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9769738332
                    </a>
                  </p>
                </li>
                <li>
                  Track 6:
                  <p>
                  Ninad Palkar -
                    <a
                      href="tel:9769997743"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      &nbsp;9769997743
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg text-white"style={{fontFamily:'Anta'}}>
            <div className="row">
              <img src={png6} style={{ width: "5rem" }} className="m-auto" />
              <h3
                className="text-center"
                style={{
                  fontFamily: "Anta",
                }}
              >
                Contacts
              </h3>
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
                        <dt class="col-sm-4 text-center">Tisha Paul:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel: +91 8999184127"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8999184127
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Omkar Malusare: </dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:  +91 8605590713"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8605590713
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
                        <dt class="col-sm-4 text-center">Rashmi Mote:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel: +91 8169734612"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8169734612
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Omkar Bhikle:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:   +91 8879135446"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8879135446
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
                        <dt class="col-sm-5 text-center">Reena Vaidya :</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel: +91 7506759126"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7506759126
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Pia Purohit :</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel: +91 7620411027
                          "
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7620411027
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
                        <dt class="col-sm-4 text-center">Aditya Lawate:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:  +91 9860678418"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9860678418
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Kartik Poojary:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:+91 7507355838"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7507355838
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
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:  +91 8097470510"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            +91 8097470510
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Amey Mahajan:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:   +91 8657557690"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8657557690
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
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      Track 6{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center">Lakshya : </dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:  +91 7738786485"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            +91 7738786485
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Sejal Mukane:</dt>
                        <dd class="col-sm text-center ">
                          <a
                            href="tel:   +91 8857086720"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8857086720
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
      <div className="container-fluid " style={{backgroundColor:'#D6701B'}}>
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
