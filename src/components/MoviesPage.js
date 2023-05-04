import React from "react";
import MoviesList from "./MoviesList";
import { Route } from "react-router-dom";
import MovieShow from "../MoviesShow";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path="/movies/:movieId">
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
