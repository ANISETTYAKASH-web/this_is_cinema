import { use_movie_context } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isfav, remfav, addfav } = use_movie_context();
  const fav = isfav(movie.id);
  function onFavouriteClicked(e) {
    e.preventDefault();
    if (fav) remfav(movie.id);
    else addfav(movie);
  }
  return (
    <div>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="favourites">
          <button className="fav-button" onClick={onFavouriteClicked}>
            😍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
