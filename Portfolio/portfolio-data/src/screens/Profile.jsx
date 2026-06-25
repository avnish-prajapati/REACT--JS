import React from "react";
import DP from "../assets/img.webp";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      {/* <div className="text-center gap-2">
        <h1>Welcome To My Portfolio</h1>
      </div> */}
      <div className="container gap-2">
        <div
          className="card border-0 shadow-none mb-3"
          style={{ maxWidth: 1220 }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={DP} className="img-fluid rounded-start" alt="..." />
            </div>

            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h2 className="fw-bold mb-3">Avnish Kumar Prajapati</h2>

                <h5 className="fw-bold text-secondary mb-4">
                  Full Stack Web Developer
                </h5>

                <p
                  className="text-secondary fs-5"
                  style={{ lineHeight: "1.8" }}
                >
                  Hello, I'm <strong>Avnish Kumar Prajapati</strong>, a
                  dedicated
                  <strong> Full Stack Web Developer</strong> with a passion for
                  building scalable, responsive, and user-centric web
                  applications. I have experience working with modern
                  technologies including
                  <strong>
                    {" "}
                    React, JavaScript, Node.js, HTML, CSS, and Database Systems
                  </strong>
                  . My goal is to develop efficient digital solutions that
                  combine functionality, performance, and exceptional user
                  experiences. I enjoy solving complex problems, learning
                  emerging technologies, and contributing to projects that
                  create real value for users and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="tech-stack mt-5 mb-5">
          <h1 className="text-center">Tech-Stack</h1>
        </div> */}
      </div>
      
      {/* Project */}
      
    <section className="container py-5 my-5">
      <h1 className="text-center fw-bold mb-5">My Projects</h1>

<<<<<<< HEAD
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLm1OhCc7qLUgeCF_YnTXqJtmBB5nAz8xs8o5Ag8onjtTIsdHkAVfuRQ1o&s=10"
                alt="E-Commerce"
                className="img-fluid rounded-4 mb-3"
                style={{ height: "220px", width: "100%", objectFit: "cover" }}
              />
=======
      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-lg-4">
          <div className="p-4 border rounded-4 h-100 bg-light">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLm1OhCc7qLUgeCF_YnTXqJtmBB5nAz8xs8o5Ag8onjtTIsdHkAVfuRQ1o&s=10"
              alt="E-Commerce"
              className="img-fluid rounded-4 mb-3"
              style={{ height: "220px", width: "100%", objectFit: "cover" }}
            />
>>>>>>> ec2d5a2bad72eb6be95d64394196cb75d78bd2f9

            <h4 className="fw-bold">🛒 E-Commerce</h4>

            <p className="text-secondary mt-3">
              A responsive shopping application built using JavaScript with
              product listing, cart management, and interactive UI.
            </p>

<<<<<<< HEAD
              <a
                href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/JAVASCRIPT%20REVISION/DAY%20-%201/Ecart%20list"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-pill mt-2"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zGttlaL87k_zOcdy3VRM63qwV2EUXoz4Uglu0KN2oEflBkCoarPUOcxy&s=10"
                alt="Quiz App"
                className="img-fluid rounded-4 mb-3"
                style={{ height: "220px", width: "100%", objectFit: "cover" }}
              />

              <h4 className="fw-bold">🧠 Quiz App</h4>

              <p className="text-secondary mt-3">
                An interactive quiz application featuring multiple questions,
                score calculation, and dynamic JavaScript functionality.
              </p>

              <a
                href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/JAVASCRIPT%20REVISION/DAY%20-%201/QUIZZ%20APP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-pill mt-2"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjH5pTJcBU7_oj-E4bmHb_fzaZbJFmcTxwoDeBaeeZzcFeUPfkOyCl7U&s=10"
                alt="Book API Store"
                className="img-fluid rounded-4 mb-3"
                style={{ height: "220px", width: "100%", objectFit: "cover" }}
              />

              <h4 className="fw-bold">📚 Book API Store</h4>

              <p className="text-secondary mt-3">
                A book browsing application powered by APIs that allows users to
                discover and explore books with a clean interface.
              </p>

              <a
                href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/BOOK%20API%20-%20APPLICATION"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-pill mt-2"
              >
                View Project
              </a>
            </div>
=======
            <a
              href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/JAVASCRIPT%20REVISION/DAY%20-%201/Ecart%20list"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-pill mt-2"
            >
              View Project
            </a>
>>>>>>> ec2d5a2bad72eb6be95d64394196cb75d78bd2f9
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-lg-4">
          <div className="p-4 border rounded-4 h-100 bg-light">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zGttlaL87k_zOcdy3VRM63qwV2EUXoz4Uglu0KN2oEflBkCoarPUOcxy&s=10"
              alt="Quiz App"
              className="img-fluid rounded-4 mb-3"
              style={{ height: "220px", width: "100%", objectFit: "cover" }}
            />

            <h4 className="fw-bold">🧠 Quiz App</h4>

            <p className="text-secondary mt-3">
              An interactive quiz application featuring multiple questions,
              score calculation, and dynamic JavaScript functionality.
            </p>

            <a
              href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/JAVASCRIPT%20REVISION/DAY%20-%201/QUIZZ%20APP"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-pill mt-2"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-lg-4">
          <div className="p-4 border rounded-4 h-100 bg-light">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjH5pTJcBU7_oj-E4bmHb_fzaZbJFmcTxwoDeBaeeZzcFeUPfkOyCl7U&s=10"
              alt="Book API Store"
              className="img-fluid rounded-4 mb-3"
              style={{ height: "220px", width: "100%", objectFit: "cover" }}
            />

            <h4 className="fw-bold">📚 Book API Store</h4>

            <p className="text-secondary mt-3">
              A book browsing application powered by APIs that allows users to
              discover and explore books with a clean interface.
            </p>

            <a
              href="https://github.com/avnish-prajapati/JAVASCRIPT/tree/main/BOOK%20API%20-%20APPLICATION"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-pill mt-2"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

      {/* skills */}
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
      {/*About section*/}
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
      {/* contact */}
      <div>
        <section className="container my-3">
          <h1 className="text-center fs-1 text-black fw-bold">Contact</h1>

          <div className="container col-6">
            <div className="mb-3 text-start fw-bold">
              <label htmlFor="exampleFormControlInput1" className="form-label ">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name here..."
              />
            </div>
            <div className="mb-3 text-start fw-bold">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3 text-start fw-bold">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
      ;
    </>
  );
}
