import React, { useState } from "react";
import { useNavigate } from "react-router";

// ...

// ../
////
export const dummyUser = {
  email: "admin123",
  password: 123,
};

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const getEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const getPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handlerLogin = () => {
    if (dummyUser.email == user.email && dummyUser.password == user.password) {
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
      navigate("/Home");
    } else {
      alert("enter the valid email and password");
    }
  };

  return (
    <>
      <div className="container w-25 mt-5 border border-dark rounded-4 p-5 bg-white">
        <h2 className="text-center fw-bold mb-4">Login</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Email Address
          </label>

          <input
            onChange={getEmail}
            type="email"
            className="form-control border-dark"
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />

          <div id="emailHelp" className="form-text text-secondary">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>

          <input
            onChange={getPassword}
            type="password"
            className="form-control border-dark"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input border-dark"
            id="exampleCheck1"
          />
        </div>

        <button
          onClick={handlerLogin}
          type="submit"
          className="btn btn-dark w-100 fw-bold py-2"
        >
          Login
        </button>
      </div>
    </>
  );
}
