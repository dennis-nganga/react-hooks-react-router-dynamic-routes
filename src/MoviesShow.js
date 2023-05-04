import React from 'react';

const MovieShow = ({ match }) => {
  return (
    <div>
      <h3>{ match.params.movieId }</h3>
    </div>
  );
}

export default MovieShow;
