import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./resetpassword.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(false);
  const { id, token } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/reset_password/${id}/${token}`,
        { password }
      );
      if (res.data.Status === "Success") {
        toast.success("Password updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsMatching(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    setIsMatching(newPassword === password);
  };

  return (
    <div className="outer">
      <Toaster />
      <div className="reset-password">
        <div>
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isMatching}
            >
              Update
            </button>
          </form>
          <div>
            <a href="/">Back to login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
