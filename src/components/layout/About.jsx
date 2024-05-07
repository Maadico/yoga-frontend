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
                individuals on their journey towards holistic well-being.Our
                yoga instructors are not those who learnt yoga for a month or
                two for the sake of teaching to earn some extra bucks, without
                having in-depth knowledge and without knowing how to do it the
                right way.
                <br /> That’s why when you start learning yoga from our expert
                instructors, you’ll not just be learning YOGA, but you will also
                learn YOGA THERAPY too.Our unique yoga program crafts practical,
                sustainable plans for building strong, healthy habits, fostering
                positive lifestyle changes.
                <br /> Yoga therapy can even be done by people who can’t move
                their body.
                <br /> So, if you have a specific health problem for which
                you’re looking for a solution, please let us know during your
                trial session. Our expert yoga instructors will work together
                with you.
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
