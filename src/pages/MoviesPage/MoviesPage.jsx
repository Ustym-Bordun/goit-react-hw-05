import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { fetchSearchedMovies } from '../../service/moviesApi';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { PaginationLoader } from '../../components/Loaders/Loaders';

import MovieSearchForm from '../../components/MovieSearchForm/MovieSearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Pagination from '../../components/Pagination/Pagination';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [urlParams, setUrlParams] = useSearchParams();
  const searchQuery = urlParams.get('query') ?? '';

  useEffect(() => {
    // if (!searchQuery) return;
    const asyncWrapper = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const searchedMoviesData = await fetchSearchedMovies(searchQuery, curentPage);
        const { results, total_pages } = searchedMoviesData;

        setSearchedMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [curentPage, searchQuery, urlParams]);

  const updateSearchParam = (key, value) => {
    const updatedParams = new URLSearchParams(urlParams);
    if (value !== '') {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }
    setUrlParams(updatedParams);
  };

  return (
    <div className={css.wrapper}>
      {searchQuery ? (
        <p className={css.searchedText}>
          Searching movies by request: <span className={css.spanText}>{searchQuery}</span>
        </p>
      ) : (
        <p className={css.searchedText}>Search your favotite movies here.</p>
      )}
      <MovieSearchForm onUpdateSearchParam={updateSearchParam} />
      {error ? (
        <ErrorMessage />
      ) : isLoading ? (
        <PaginationLoader />
      ) : (
        searchedMovies.length > 0 && (
          <>
            <MovieList movies={searchedMovies} />
            <Pagination
              setPage={setCurentPage}
              curentPage={curentPage}
              totalPages={totalPages}
            />
          </>
        )
      )}
    </div>
  );
};

export default MoviesPage;
