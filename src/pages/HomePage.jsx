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
function HomePage() {
  const navigate = useNavigate();

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
      <Testimonials />
      <ContactHome />
      <Footer />
    </div>
  );
}

export default HomePage;
