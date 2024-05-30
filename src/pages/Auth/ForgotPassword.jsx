import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./forgotpassword.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return; // Prevent form submission
    }

    try {
      setSubmitted(true); // Set submitted state to true
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email }
      );
      if (res.data.Status === "Success") {
        // Assuming Status is "Success" from backend
        toast.success("Email sent successfully.");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setSubmitted(false); // Reset submitted state to false
    }
  };

  return (
    <>
      <Toaster />
      <div className="login-bg">
        <div className="outer">
          <div className="forgot-password">
            <div className="heading">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="logo-container"
              >
                <img src={logo} alt="Maadico Logo" className="logo" />
                <h1 className="heading-text">Maadico</h1>
              </div>
            </div>{" "}
            <h2>Forgot Password</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitted}
              >
                {submitted ? "Submitting..." : "Submit"}
              </button>
            </form>
            <div
              className="navigator"
              onClick={() => {
                navigate("/login");
              }}
            >
              Back to Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
