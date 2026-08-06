import React from "react";
import Navbar from "../components/Navbar";

export default function Skills() {
  return (
    <>
      {" "}
      <section className="container py-5">
        <h1 className="text-center fw-bold mb-5">
          My <span className="text">Skills</span>
        </h1>

        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">HTML5</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">CSS3</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">JavaScript</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">React.js</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">Node.js</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">Express.js</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">MongoDB</h5>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card text-center border-0 shadow-sm rounded-4 py-4">
              <h5 className="fw-semibold mb-0">Git & GitHub</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
