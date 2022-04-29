import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "./api/movie-api";

export const MoviesContext = createContext(null);


const MoviesContextProvider = props => {
  const [movies, setMovies] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authenticated) {
      getMovies().then(result => {
        console.log(result);
        setMovies(result);
      });
    }
  }, [authenticated]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider