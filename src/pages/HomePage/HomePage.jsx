import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from '../../service/moviesApi';

import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Pagination from '../../components/Pagination/Pagination';
import { PaginationLoader } from '../../components/Loaders/Loaders';

import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const trendingMoviesData = await fetchTrendingMovies(curentPage);
        const { results, total_pages } = trendingMoviesData;

        setTrendingMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [curentPage]);

  return (
    <div className={css.wrapper}>
      {error ? (
        <ErrorMessage />
      ) : isLoading ? (
        <PaginationLoader />
      ) : (
        trendingMovies.length > 0 && (
          <>
            <MovieList movies={trendingMovies} />
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

export default HomePage;
