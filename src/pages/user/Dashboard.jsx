import React from "react";
import Header from "../../components/layout/Header";
import UserHomepageHero from "../../components/layout/UserHomepageHero";
import Footer from "../../components/layout/Footer";
import ContactHome from "../../components/layout/ContactHome";

function Dashboard() {
  return (
    <div>
      <Header />
      <UserHomepageHero />
      <ContactHome />
      <Footer />
    </div>
  );
}

export default Dashboard;
