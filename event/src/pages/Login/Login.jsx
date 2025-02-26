import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Navigation from "../../components/Navigation/Navigation";
import "./Login.css"; // Import CSS file

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="login-container">
      <Navigation /> {/* Navigation Bar */}

      <div className="login-box">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

        {/* Username Input */}
        <div className="input-group">
          <input type="text" placeholder="User Name" />
          <FaUser className="icon" />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <input type={showPassword ? "text" : "password"} placeholder="Password" />
          {showPassword ? (
            <FaEyeSlash className="icon" onClick={() => setShowPassword(false)} />
          ) : (
            <FaEye className="icon" onClick={() => setShowPassword(true)} />
          )}
        </div>

        {/* Forgot Password */}
        <p className="forgot-password">Forgot Password?</p>

        {/* Login Button */}
        <button className="login-button">Login</button>

        {/* Sign Up Link */}
        <p className="signup-link">
          New to Evenza?{" "}
          <span 
            onClick={() => navigate("/signin")} 
            className="signup-text"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
