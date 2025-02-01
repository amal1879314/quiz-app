import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!email || !password) {
      return setError("Both email and password are required.");
    }
  
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {

  

          navigate("/qwerty");
        
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Error connecting to the server:", err);
      setError("Error connecting to the server.");
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="circle circle-one"></div>
        <div className="form-container">

          <h1 className="opacity" align="center" class="head">LOGIN</h1>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="opacity" >Login</button>
          </form>

          <div className="register-forget opacity">
            <p>New here? <Link to="/reg">Sign Up</Link></p>

          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
    </div>
  );
}

export default Login;