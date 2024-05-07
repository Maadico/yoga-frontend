import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container ">
        <div className="row ">
          <div className=" d-flex justify-content-between align-items-baseline atSmallFooter">
            <div className="foot ">
              <div className="row footHeading">
                <h1>MaaDico</h1>
              </div>
              <div className="footDescription row">
                <p>
                  Doctors will be assisting you throughout your journey of
                  reversal and help achieve your goal of healthy wellbeing.
                </p>
              </div>
              <div className="socialFoot row">
                <p>
                  <span>
                    <MdEmail color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span>maadicohealthcare@gmail.com</span>
                </p>
                <p>
                  <span>
                    <MdLocationOn color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span>
                    E - 103 , Ramkutir Complex Surat, Gujurat - 395009
                  </span>
                </p>
              </div>
            </div>
            <div className="foot  ">
              <div className="footSecondHeading row ">
                <h4>Quick Links</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>

              <div className="footMenu row">
                <a href="#about">
                  <p>About us</p>
                </a>
                <a href="#instructors">
                  <p>Our instructors</p>
                </a>
                <a href="/contact">
                  <p>Contact</p>
                </a>
                <a href="/contact">
                  <p>Review</p>
                </a>
              </div>
            </div>
            <div className="foot">
              <div className="footSecondHeading row">
                <h4>Our Services</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>
              <div className="row footMenu2">
                <a href="/terms-and-conditions">
                  <p>Terms and Conditions</p>
                </a>
                <a href="/privacy-policy">
                  <p>Privacy policy</p>
                </a>
                <a href="/contact">
                  <p>Contact support</p>
                </a>
              </div>
            </div>
            <div className="foot ">
              <div className="footSecondHeading row">
                <h4>Quick Links</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>
              <div className="row lastDescription">
                <p>
                  Connect with MaaDico on socials. Stay healthy, stay informed!"
                </p>
              </div>
              <div className="row btnFoot">
                <a href="/contact" className="btn btn-outline-light">
                  <span>
                    <IoCall fontSize={20} color="rgb(129,240,224)" />
                  </span>
                  <span className="mx-2">Book An Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center developer">
        <p>
          Copyright ©️ 2024 Maadico | Developed by{" "}
          <a href="https://ishanaudichya.netlify.app">Ishan Audichya</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
