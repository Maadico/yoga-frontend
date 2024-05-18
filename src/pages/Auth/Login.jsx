import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useAuth } from "../../Context/auth";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const authData = localStorage.getItem("auth");
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      if (parsedAuthData.user && parsedAuthData.user.role === 0) {
        navigate("/dashboard/user");
      } else if (parsedAuthData.user && parsedAuthData.user.role === 1) {
        navigate("/dashboard/admin");
      }
    }
  }, [navigate]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        if (res.data.user.role === 0) {
          navigate("/dashboard/user");
        } else if (res.data.user.role === 1) {
          navigate("/dashboard/admin");
        }
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login Maadico">
      <div className="outer">
        <div className="register">
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
          </div>
          <h2>Login</h2>
          <br></br>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="mb-3">
              <input
                type="email"
                value={email}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Enter Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="form-control"
                id="exampleInputPassword1"
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div style={{ display: "flex" }}>
              <div
                className="navigator"
                onClick={() => {
                  navigate("/register");
                }}
              >
                New user? Register here |{" "}
              </div>
              <div className="navigator">
                <div onClick={() => navigate("/forgot-password")}>
                  | Forgot Password
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
