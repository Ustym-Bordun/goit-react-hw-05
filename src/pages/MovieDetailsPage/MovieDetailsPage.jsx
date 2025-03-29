import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router';
import clsx from 'clsx';

import { fetchMovieDetails } from '../../service/moviesApi';

import { PageLoader, PaginationLoader } from '../../components/Loaders/Loaders';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);

  const location = useRef(useLocation());

  return (
    <div className={css.wrapper}>
      {error ? (
        <ErrorMessage />
      ) : isLoading ? (
        <PaginationLoader />
      ) : (
        movie && (
          <>
            <MovieInfo movie={movie} backLink={location.current} />{' '}
            <div className={css.navigation}>
              <NavLink
                to="reviews"
                className={({ isActive }) => clsx(css.link, isActive && css.active)}
              >
                Reviews
              </NavLink>
              <NavLink
                to="cast"
                className={({ isActive }) => clsx(css.link, isActive && css.active)}
              >
                Cast
              </NavLink>
            </div>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </>
        )
      )}
    </div>
  );
};

export default MovieDetailsPage;
