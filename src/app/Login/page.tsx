import React, { useState } from "react";
import "./../styles/Login.scss";
import { FaUser, FaKey } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <Image src="/logo.png" alt="FarmBros logo" />
          <h1>FarmBros</h1>
        </div>

        <h2>Welcome back, login to continue</h2>

        <form>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Username or email address" required />
          </div>

          <div className="input-group">
            <FaKey className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="google-signin">
          <Image
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
        </div>

        <p className="footer">
          Do not have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

