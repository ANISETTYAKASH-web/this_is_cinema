function MovieCard({ movie }) {
  function onFavouriteClicked() {
    alert("clicked");
  }
  return (
    <div>
      <div className="movie-poster">
        <img src="movie.url" alt={movie.title} />
        <div className="favourites">
          <button className="fav-button" onClick={onFavouriteClicked}>
            😍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.release_year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
