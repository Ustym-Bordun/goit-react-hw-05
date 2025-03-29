import { Link, useLocation } from 'react-router';

import css from './MovieCard.module.css';

const MovieCard = ({ movieId, movie: { title, release_date, vote_average, poster_path } }) => {
  let rating = vote_average !== undefined ? Number(vote_average.toFixed(1)) : 0;
  if (rating % 1 === 0) rating = Math.trunc(rating);

  const location = useLocation();

  return (
    <Link className={css.link} to={`/movies/${movieId}`} state={location}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <h3 className={css.title}>{title}</h3>
      <div className={css.bottom}>
        <p>Rating: {rating}</p>
        <p>Released: {release_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
