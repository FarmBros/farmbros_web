'use client'

import React, { useState } from "react";
import "./styles.scss";
import { FaUser, FaKey } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import google from "../assets/images/google.png"
import brosLogo from "../assets/images/farm_bros_icon.png"
import Link from "next/link";
import Navbar from "../Components/Navbar/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <Navbar/>
      <div className="login-card">
        <div className="logo">
          <Image src={brosLogo} alt="FarmBros logo" width={150} />
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
            <Link href="/reset_password">Forgot password?</Link>
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
            src={google}
            alt="Google"
            width={50}
          />
        </div>

        <p className="footer">
          Do not have an account? <Link href="/sign_up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

