import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/Data/Users.json");
      const users = await response.json();

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", matchedUser.username);
        navigate("/Home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="tab-buttons">
          <button className="active-tab">Login</button>
          <button onClick={() => navigate("/register")}>Signup</button>
        </div>
        <h2>Login Form</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot-link">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p>
          Not a member? <a onClick={() => navigate("/register")}>Signup now</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

