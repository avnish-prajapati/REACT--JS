import React from "react";

import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
          <div className="container">
            <Link to="/home" className="navbar-brand fw-bold fs-4">
              AvnishKumar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav gap-lg-5 fw-bold">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Project" className="nav-link">
                    Project
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Skills" className="nav-link">
                    Skills
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
