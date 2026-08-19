import React, { useState } from "react";

const Navbar = ({ setMovie }) => {
  const [search, setSearch] = useState("");

  const searchMovie = () => {
    if (search.trim() === "") {
      alert("Movie name enter karo");
      return;
    }

    fetch(`https://www.omdbapi.com/?t=${search}&apikey=aecd2442`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          alert("Movie nahi mili");
        }
      });
  };

  return (
    <nav className="bg-dark text-white p-3">
      <h2>CYRO.SE 🎬</h2>

      <input
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="btn btn-light ms-2" onClick={searchMovie}>
        Search
      </button>
    </nav>
  );
};

export default Navbar;
