import React from "react";

export default function project() {
  return (
    <section className="container py-5 my-5">
      <h1 className="text-center fw-bold mb-5">My Projects</h1>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-lg-4">
          <div className="p-4 border rounded-4 h-100 bg-light">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI6_T9T0ZLCcwG4FVr4DSWT4OlzVUvTqwbw&s"
              alt="E-Commerce"
              className="img-fluid rounded-4 mb-3"
              style={{ height: "220px", width: "100%", objectFit: "cover" }}
            />

            <h4 className="fw-bold">🛒 E-Commerce</h4>

            <p className="text-secondary mt-3">
              A responsive shopping application built using JavaScript with
              product listing, cart management, and interactive UI.
            </p>

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
              src="https://img.magnific.com/free-vector/modern-stylish-problem-solving-faq-symbol-background-design_1017-58258.jpg?semt=ais_hybrid&w=740&q=80"
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
              src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop"
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
