'use client'

import React, { useState } from "react";
import "./resetPassword.scss";
import { FaUser, FaKey } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>Reset your Password</h2>
        <p>
          Use the <strong>OTP</strong> sent to your email to reset your password
        </p>

        <form>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="OTP (One Time Pin)" required />
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

          <button type="submit" className="reset-btn">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
