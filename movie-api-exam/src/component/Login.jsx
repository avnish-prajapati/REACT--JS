import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (email === "Admin@456" && password === "123456") {
      localStorage.setItem("login", "true");

      navigate("/home");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="container mt-5" style={{ width: "400px" }}>
      <h2 className="text-center">Login</h2>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-dark w-100 mt-3" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
