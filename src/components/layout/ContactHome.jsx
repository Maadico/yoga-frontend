import React from "react";
import { useNavigate } from "react-router-dom";
function ContactHome() {
  const navigate = useNavigate();
  return (
    <div>
      <header
        onClick={() => {
          navigate("/contact");
        }}
        className="contact-hero"
      >
        <div className="contact-content"></div>
      </header>
    </div>
  );
}

export default ContactHome;
