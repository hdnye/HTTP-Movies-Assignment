import React from 'react';
import UpdateMovie from './UpdateMovie';

const MovieCard = props => {
  const { id, title, director, metascore, image, stars } = props.movie;
 
  return (
    <div className="movie-card">
      <UpdateMovie id={id}/>
      <h2>{title}</h2>
      <div className='background-img'>{image}</div>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars && stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
