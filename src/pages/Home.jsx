import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCards";
import { getPopularMovies, searchMovies } from "../services/app";

function Home() {
  const [movielist, setmovielist] = useState([]);
  const [moviesearch, setmoviesearch] = useState("");
  const [Error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get_movies_from_api = async () => {
      try {
        const get_popular_movies = await getPopularMovies();
        setmovielist(get_popular_movies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies from api");
      } finally {
        setLoading(false);
      }
    };
    get_movies_from_api();
  }, []);
  const handlesearch = async (e) => {
    e.preventDefault();
    if (!moviesearch.trim()) return;
    if (loading) return;
    try {
      const search_results = await searchMovies(moviesearch);
      setmovielist(search_results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to load movies");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="search-bar">
        <form className="search-form" onSubmit={handlesearch}>
          <input
            type="text"
            placeholder="enter a movie name..."
            className="search-input"
            value={moviesearch}
            onChange={(e) => setmoviesearch(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      {Error && <div>{Error}</div>}
      {console.log(Error)}
      {loading ? (
        <div className="loading">loading.....</div>
      ) : (
        <div className="movie-grid">
          {movielist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
