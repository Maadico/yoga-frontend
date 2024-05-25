import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import HeroCarousel from "../components/layout/HeroCarousel";
import Footer from "../components/layout/Footer";
import Gallery from "../components/layout/Gallery";
import Testimonials from "../components/layout/Testimonials";
import ContactHome from "../components/layout/ContactHome";
import Doctor from "../components/layout/Doctors";
import About from "../components/layout/About";
import Programs from "../components/layout/Programs";
import { useState } from "react";
import Faques from "../components/layout/Faques";
import { MdAddIcCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();
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

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.user) {
      if (auth.user.role === 0) {
        navigate("/dashboard/user");
      } else if (auth.user.role === 1) {
        navigate("/dashboard/admin");
      }
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <HeroCarousel />
      <About />
      <Programs />
      <Doctor />
      <Gallery />
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

export default HomePage;
