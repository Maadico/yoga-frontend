import React from "react";
import "./Programs.css";
import programImage from "../../assets/gallery/1.jpg"; // Importing the image URL

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
                  <h5>DIABETES REVERSAL</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />
                <div className="row SubHeading m-0 p-0">
                  <p>
                    MaaDico's Diabetes Harmony: Naturopathy, personalized diets,
                    yoga fusion.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>WEIGHT MANAGEMENT</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Tailored plans, expert consultations, and yoga for
                    sustainable weight control.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>THYROID REVERSAL</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Naturopathy, diets, and yoga to restore thyroid health
                    naturally.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>PCOD/PCOS REVERSAL</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Integrated approach targeting symptoms and hormonal balance.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>Personalised Yoga Sessions</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Certified instructors for mental, emotional balance and
                    flexibility.
                  </p>
                </div>
                <div className="row readMore m-0 p-0"></div>
              </div>
            </div>
            <div className="col-md-4 space">
              <div className="box m-1 text-center">
                <div className="row m-0 p-0 heading">
                  <h5>1-1 Doctor Consultation for Personalised Diet Plans</h5>
                </div>
                <img
                  src={programImage}
                  alt="Diabetes Reversal"
                  className="programImage"
                />

                <div className="row SubHeading m-0 p-0">
                  <p>
                    Personalized diet plans with doctor consultations for
                    lasting well-being.
                  </p>
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
