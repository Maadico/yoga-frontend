import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
function PageNotFound() {
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <h1>Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
