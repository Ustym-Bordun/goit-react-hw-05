import MovieList from '../../components/MovieList/MovieList';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>HomePage</p>
      <p className={css.text}>Lorem ipsum dolor sit amet.</p>

      <MovieList />
    </div>
  );
};

export default HomePage;
