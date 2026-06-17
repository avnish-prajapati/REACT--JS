import React from 'react'

export default function About() {
  return (
    
    <section className="container-fluid py-5">
  <div className="container d-flex justify-content-center">
    <div className="card mb-3 p-4 shadow-lg border-0" style={{ maxWidth: 980 }}>
      <div className="row g-0 align-items-center">
        
       
        <div className="col-md-4 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
            className="img-fluid"
            alt="Developer Illustration"
            style={{ maxHeight: "300px" }}
          />
        </div>

        
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title fw-bold mb-3">👨‍💻 About Me</h2>

            <p className="card-text">
              <span className="fs-3 fw-bold">
                Hi, I'm Avnish Kumar Prajapati!
              </span>
              <br />
              I am a passionate <strong>Full Stack Developer</strong> and an
              enthusiastic <strong>MongoDB Learner</strong> who enjoys building
              modern, responsive, and user-friendly web applications. I love
              transforming ideas into real-world digital solutions using
              technologies like React.js, Node.js, Express.js, and MongoDB.
            </p>

            <p className="card-text">
              🚀 My focus is on creating clean, scalable, and efficient
              applications while continuously improving my development skills.
              I enjoy learning new technologies, solving challenging problems,
              and writing maintainable code that delivers great user
              experiences.
            </p>

            <p className="card-text">
              💡 I believe in continuous learning, teamwork, and innovation.
              Whether it's developing a full-stack project, optimizing
              performance, or exploring new backend concepts, I'm always eager
              to grow as a developer and contribute to impactful projects.
            </p>

            <p className="card-text">
              🎯 Currently, I'm expanding my expertise in MongoDB, backend
              architecture, and modern web technologies while building projects
              that strengthen my problem-solving and development skills.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}
