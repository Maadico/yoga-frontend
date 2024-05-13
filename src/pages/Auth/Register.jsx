import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import "./register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [isEmailLocked, setIsEmailLocked] = useState(false); // New state variable

  const navigate = useNavigate();

  const validatePassword = () => {
    // Regular expression to match password containing at least one capital letter and one number
    const regex = /^(?=.*[A-Z])(?=.*\d).{7,}$/;
    return regex.test(password);
  };

  const handleSendOtp = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/email-verification`,
        {
          email,
        }
      );
      if (res.status === 201) {
        toast.success("OTP sent successfully!");
        setShowOtpField(true);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/otp-verification`,
        {
          email,
          otp,
        }
      );
      if (res.status === 200) {
        toast.success("Email verified successfully!");
        setShowOtpField(false);
        setIsEmailLocked(true); // Lock the email input field after successful OTP verification
      } else {
        toast.error("OTP verification failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("OTP verification failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }
    if (!validatePassword()) {
      toast.error(
        "Password must contain at least one capital letter and one number"
      );
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
        }
      );
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register Yoga app">
      <div className="outer">
        <div className="register">
          <div className="heading">
            <div className="logo-container">
              <img src={logo} alt="Maadico Logo" className="logo" />
              <h1 className="heading-text">Maadico</h1>
            </div>
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                value={name}
                className="form-control"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {!isEmailLocked && ( // Conditionally render email input field based on email lock state
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
            )}
            <div className="mb-2">
              <input
                type="text"
                value={phone}
                className="form-control"
                placeholder="Enter Your Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-2 password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="form-control"
                placeholder="Enter Your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-2">
              <input
                type="password"
                value={confirmPassword}
                className="form-control"
                placeholder="Confirm Your Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {showOtpField && !isEmailLocked && (
              <div className="mb-2">
                <input
                  type="text"
                  value={otp}
                  className="form-control"
                  placeholder="Enter OTP"
                  required
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            {!showOtpField && !isEmailLocked && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="btn btn-primary"
              >
                Send OTP
              </button>
            )}
            {showOtpField && !isEmailLocked && (
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="btn btn-primary"
              >
                Verify OTP
              </button>
            )}
            {isEmailLocked && (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
            <div
              className="navigator"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already Registered? Back to login
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
