import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Navigation from "../../components/Navigation/Navigation";

const SignIn = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="login-container">
      <Navigation />
      <h2>Sign In</h2>
      <p>to continue to Evenza</p>
      <div className="social-login">
        <button>🔵 Facebook</button>
        <button>🟡 Google</button>
        <button>⚫ GitHub</button>
      </div>
      <hr />
      <div className="input-group">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <button className="login-button">Sign In</button>
      <p>
        Have an account?{" "}
        <strong onClick={() => navigate("/login")} className="login-link">
          Log in
        </strong>
      </p>
    </div>
  );
};

export default SignIn;