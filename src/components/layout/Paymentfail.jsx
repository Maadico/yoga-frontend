import React from "react";
import Header from "./Header";
import "./Success.css";
import { useNavigate } from "react-router-dom";

function Paymentfail() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="pf-container">
        <div className="pf-content">
          <h1 className="pf-title">Payment Failed</h1>
          <p className="pf-message">
            We're sorry, but your payment could not be processed.
          </p>
          <button
            className="ps-copy-button"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Paymentfail;
