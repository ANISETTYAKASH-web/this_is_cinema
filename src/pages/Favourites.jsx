import { use_movie_context } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCards";

function Favourites() {
  const { favourites } = use_movie_context();
  console.log(favourites);
  if (Favourites) {
    return (
      <div className="movie-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>No favourites found</h1>
      <h3>Please add your favourite movies</h3>
    </div>
  );
}

export default Favourites;
