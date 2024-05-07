import React from "react";
import "./Programs.css";
import GeneralYogaSession from "../../assets/programs/GeneralYogaSession.jpg"; // Importing the image URL
import LifestyleDisorder from "../../assets/programs/LifestyleDisorder.jpg"; // Importing the image URL
import PregnancyYoga from "../../assets/programs/PregnancyYoga.jpg"; // Importing the image URL
import Personalized from "../../assets/programs/Personalized.jpg"; // Importing the image URL
import Consultation from "../../assets/programs/Consultation.jpg"; // Importing the image URL
const Programs = () => {
  return (
    <div className="service py-5 " id="programs">
      <div className="container ">
        <div className="row ">
          <div className="row m-0 py-3 g-0 serviceSubHeading text-center">
            <h2>Our Programs</h2>
          </div>
          <div className="row m-0 p-0 g-0 ourServices">
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>GENERAL YOGA SESSION</h5>
                </div>
                <img
                  src={GeneralYogaSession}
                  alt="Diabetes Reversal"
                  className="programImage"
                />
                <div className="row SubHeading m-0 p-0">
                  <p>
                    Practical, impactful daily exercises and asanas create a
                    thoughtful program for a healthy body and mind.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>LIFESTYLE DISORDERS SESSIONS</h5>
                </div>
                <img
                  src={LifestyleDisorder}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Lifestyle Diseases like Diabetes,Hypertension,Stroke,Thyroid
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>PREGNANCY YOGA</h5>
                </div>
                <img
                  src={PregnancyYoga}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Pregnancy yoga we have special teacher are available who
                    have very experienced in pregnancy yoga
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>PERSONALISED YOGA SESSIONS</h5>
                </div>
                <img
                  src={Personalized}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    A solution-oriented approach to specific problems like
                    cervical, spondylitis,asthma,back pain,knee pain.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>1-1 DOCTOR'S CONSULTATION</h5>
                </div>
                <img
                  src={Consultation}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>Personalised diet plans with doctor</p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
