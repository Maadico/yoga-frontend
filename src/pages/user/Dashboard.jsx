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

function Dashboard() {
  return (
    <div>
      <Header />
      <UserHomepageHero />
      <About />
      <Programs />
      <Doctor />
      <Requirements />
      <Gallery />
      <Faques />
      <Testimonials />
      <ContactHome />
      <Footer />
    </div>
  );
}

export default Dashboard;
