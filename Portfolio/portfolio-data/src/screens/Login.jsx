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
      <div className="container w-25 mt-5 border p-5 pt-0">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={getEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={getPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          onClick={handlerLogin}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}
