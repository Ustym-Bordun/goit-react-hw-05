import MovieList from '../../components/MovieList/MovieList';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>MoviesPage</p>
      <p className={css.text}>Lorem ipsum dolor sit amet.</p>

      <MovieList />
    </div>
  );
};

export default MoviesPage;
