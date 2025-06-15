import {
  useState,
  createContext,
  useContext,
  useEffect,
  Children,
} from "react";

const moviecontext = createContext();
export const use_movie_context = () => useContext(moviecontext);

export const Movieprovider = ({ children }) => {
  const [favourites, setfavourites] = useState([]);
  useEffect(() => {
    const getfav = localStorage.getItem("favourites");
    if (getfav) setfavourites(JSON.parse(getfav));
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addfav = (movie) => {
    setfavourites((prev) => [...prev, movie]);
  };
  const remfav = (movieId) => {
    setfavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isfav = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    isfav,
    remfav,
    addfav,
  };
  return (
    <moviecontext.Provider value={value}>{children}</moviecontext.Provider>
  );
};
