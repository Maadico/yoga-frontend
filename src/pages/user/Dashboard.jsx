import React from "react";
import Header from "../../components/layout/Header";
import UserHomepageHero from "../../components/layout/UserHomepageHero";
import Footer from "../../components/layout/Footer";
import ContactHome from "../../components/layout/ContactHome";
import Doctor from "../../components/layout/Doctors";
import About from "../../components/layout/About";
import Programs from "../../components/layout/Programs";
import Gallery from "../../components/layout/Gallery";
import Faques from "../../components/layout/Faques";
import Testimonials from "../../components/layout/Testimonials";
import Requirements from "../../components/layout/Requirements";
import { useState, useEffect } from "react";

import { MdAddIcCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

function Dashboard() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    // Add scroll event listener to determine when to show the button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <UserHomepageHero />
      <About />
      <Programs />
      <Doctor />
      <Gallery />
      <Requirements />
      <Faques />
      <Testimonials />
      <ContactHome />
      <Footer />
      {showButton && (
        <div className="fixIcon">
          <div className="icon1">
            <a href="tel:+919833429932">
              <MdAddIcCall fontSize={25} color="white" />
            </a>
          </div>

          <div className="icon1">
            <a href="https://chat.whatsapp.com/GNOwENb2FmoL1tMem8Hddl">
              <IoLogoWhatsapp fontSize={25} color="white" />
            </a>
          </div>
          {/* <div className="icon1">
            <a href=" https://www.instagram.com/maadico_1?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
              <AiFillInstagram fontSize={25} color="white" />
            </a>
          </div> */}
          <div className="icon1">
            <a href="#navbarColor">
              <FaArrowUp fontSize={26} color="white" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
