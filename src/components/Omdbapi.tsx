import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "../assets/search.svg";

const API_URL = "http://www.omdbapi.com?apikey=aa9cec1b";

const Omdbapi = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("searchTerm");
  }, []);
  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Chercher des films"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {searchTerm === "" ? (
        <div className="search-message">
          <h2>Cherchez un film</h2>
        </div>
      ) : movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Omdbapi;
