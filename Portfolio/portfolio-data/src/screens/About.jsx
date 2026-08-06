import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <section className="container py-5">
        <h1 className="text-center fw-bold mb-5">About</h1>

        <div
          className="border border-secondary-subtle rounded-4 p-4 p-lg-5"
          style={{
            borderWidth: "1px",
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        >
          <div className="row align-items-center g-5">
            {/* Animation */}
            <div className="col-lg-5 text-center">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Developer Animation"
                className="img-fluid"
                style={{
                  maxHeight: "350px",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* Content */}
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">Hi, I'm Avnish Kumar Prajapati</h2>

              <p className="fs-5 text-secondary lh-lg">
                I’m a passionate <strong>Full Stack Developer</strong> and an
                enthusiastic <strong>MongoDB Learner</strong> who loves building
                modern, responsive, and user-friendly web applications.
              </p>

              <p className="fs-5 text-secondary lh-lg">
                My primary technologies include{" "}
                <strong>React.js, Node.js, Express.js, and MongoDB</strong>. I
                enjoy turning ideas into real-world digital products while
                focusing on clean code and scalable architecture.
              </p>

              <p className="fs-5 text-secondary lh-lg">
                I believe in continuous learning and constantly challenge myself
                to improve my development skills, explore new technologies, and
                solve real-world problems through code.
              </p>

              <p className="fs-5 text-secondary lh-lg">
                Currently, I'm deepening my knowledge of backend development,
                database design, and full-stack application architecture while
                building projects that strengthen my problem-solving abilities.
              </p>

              {/* Tech Stack */}
              <div className="mt-4">
                <span className="badge bg-dark fs-6 me-2 p-2">React.js</span>
                <span className="badge bg-dark fs-6 me-2 p-2">Node.js</span>
                <span className="badge bg-dark fs-6 me-2 p-2">Express.js</span>
                <span className="badge bg-dark fs-6 p-2">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
