import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=aecd2442")
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <div>
      <Navbar setMovie={setMovie} />

      <h1>Movie App 🎬</h1>

      {movie && (
        <div>
          <img src={movie.Poster} alt={movie.Title} width="200" />

          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Rating: ⭐ {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
