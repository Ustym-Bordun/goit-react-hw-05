import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  // console.log(movies);

  return (
    <ul className={css.list}>
      {movies.map(({ id, ...movie }) => {
        // console.log(movie);
        return (
          <li key={id}>
            <MovieCard movieId={id} movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
