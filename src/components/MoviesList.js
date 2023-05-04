import React from "react";
import { Link, Route } from "react-router-dom";
import MovieShow from "../MoviesShow";

function MoviesList({ movies }) {
  const renderMovies = Object.values(movies).map((movie) => (
    <Link key={movie.id} to={`/movies/${movie.id}`}>
      <p>{movie.title}</p>
    </Link>
  ));

  return (
    <div>
      {renderMovies}
      <Route path="/movies/:movieId">
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesList;

