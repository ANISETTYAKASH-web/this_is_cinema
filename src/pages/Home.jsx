import { useState } from "react";
import MovieCard from "../components/MovieCards";

function Home() {
  const movies = [
    {
      id: 1,
      title: "RRR",
      release_date: 2023,
    },
    {
      id: 2,
      title: "Bahubali",
      release_date: 2018,
    },
    {
      id: 3,
      title: "Khaleja",
      release_date: 2009,
    },
  ];
  const [moviestate, setmoviestate] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    alert(moviestate);
  };

  return (
    <>
      <div className="search-bar">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="enter a movie name..."
            className="search-input"
            value={moviestate}
            onChange={(e) => setmoviestate(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>

      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(moviestate) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </>
  );
}
export default Home;
