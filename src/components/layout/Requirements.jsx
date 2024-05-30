import React from "react";
// import doctor from "../Images/Online Doctor-bro.png";
// import doctor2 from "../Images/Online Doctor-bro.png";
// import { IoCall } from "react-icons/io5";
import req from "../../assets/req.jpg";
import "./Requirements.css";
const Requirements = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="row pt-1">
          <div className="col-md-6 mt-5 pt-4 atSmall">
            <div className="row heroColor">
              <p> What do I need for online yoga class? </p>
            </div>

            <div className="row subtitle heroTitle  flex-wrap-reverse"></div>
            <div className="row heroColor mt-2">
              <p className="descriptions1">
                • A Yoga Mat
                <br /> • Water Bottle <br />
                • A refreshing Ventilated room /open area <br /> • A good
                Internet connection <br /> • A Web Camera, working audio and
                built-in microphone (mobile/laptop) <br /> • A Whatsapp Account
                (free) <br /> • Anything else that makes your practise more
                enjoyable
              </p>
            </div>
            <div className="row heroColor m-0 p-0 ">
              <div className="btnHero m-0 p-0 ">
                <a
                  href="/contact"
                  className="btn AppointmentCall mx-3 px-4 btn-outline-light"
                >
                  <span
                    className="mx-2 "
                    style={{ fontSize: "small", fontWeight: "400" }}
                  >
                    Start Today
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6   imgDoctor">
            <img src={req} alt="doctor" className="firstDoctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
