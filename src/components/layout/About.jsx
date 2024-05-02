import React from "react";
import profile from "../../assets/doctors/doctorAbout2.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row aboutSubheading">
              <h1>Why People Have Faith In Us</h1>
            </div>
            <div className="row aboutDescription">
              <p className="mt-2">
                At MaaDico Healthcare, we are dedicated to empowering
                individuals on their journey towards holistic well-being.
                Established with a profound commitment to reversing lifestyle
                disorders, including diabetes, thyroid issues, obesity,
                PCOD/PCOS, and more, we stand as a beacon of health and hope.
              </p>
            </div>

            <div className="bookAppointMentBtn mt-2">
              <div className="btnHero m-0 p-0">
                <a
                  href="/contact"
                  className="m-auto mt-2 btn Appointment2 aboutBtnSmall"
                >
                  Get a Callback
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 noneAtSmallAbout ">
            <div className="row h-100">
              <div className="row rightShift">
                <div className="imgCont w-75 px-5">
                  <div className="imgContainer  ">
                    <img src={profile} alt={"doctor"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
