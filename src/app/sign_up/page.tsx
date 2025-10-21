import React, { useState } from "react";
import "./../styles/SignUp.scss";
import { FaUser, FaKey, FaEnvelope } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="logo">
          <Image src="/logo.png" alt="FarmBros logo" />
          <h1>FarmBros</h1>
        </div>

        <h2>Create your account</h2>

        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email address" required />
          </div>

          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
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

          <div className="input-group">
            <FaKey className="icon" />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <span
              className="toggle"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <div className="google-signin">
          <Image src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
        </div>

        <p className="footer">
          Already have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
