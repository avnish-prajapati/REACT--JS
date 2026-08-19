import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  const user = {
    name: "Avnish",
    age: 23,
  };

  localStorage.setItem("user", JSON.stringify(user)); //Save

  const user = JSON.parse(localStorage.getItem("user")); // Get

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h1 className="text-primary mb-4 text-center">Avnish</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        {name && <h4 className="mt-4 text-center">Hello, {name} 👋</h4>}
      </div>
    </div>
  );
}
