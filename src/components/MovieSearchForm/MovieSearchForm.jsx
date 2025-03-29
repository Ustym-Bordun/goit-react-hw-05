import { MdOutlineSearch } from 'react-icons/md';

import css from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onUpdateSearchParam }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchedMovies = evt.target.elements.movieSearch.value;
    // console.log(searchedMovies);

    onUpdateSearchParam('query', searchedMovies);
    evt.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="movieSearch" />
      <button className={css.btn} type="submit">
        <MdOutlineSearch className={css.icon} size={28} />
      </button>
    </form>
  );
};

export default MovieSearchForm;
