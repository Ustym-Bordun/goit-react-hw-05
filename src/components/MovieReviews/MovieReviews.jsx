import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';

import { fetchMovieReviews } from '../../service/moviesApi';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { PaginationLoader } from '../Loaders/Loaders';

import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const movieReviewsData = await fetchMovieReviews(movieId);
        setMovieReviews(movieReviewsData.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <>
      {error ? (
        <ErrorMessage />
      ) : isLoading ? (
        <PaginationLoader />
      ) : movieReviews && movieReviews.length > 0 ? (
        <div className={css.reviewsWrapper}>
          <ul className={css.list}>
            {movieReviews.map(movieReview => {
              const { author, content, created_at, id } = movieReview;
              const reviewCreatedOn = () => {
                const [date, time] = created_at.split('T');
                const timeWithoutMiliseconds = time.split('.')[0];
                const result = `Created at: ${date} ${timeWithoutMiliseconds}`;
                return result;
              };

              return (
                <li className={css.item} key={id}>
                  <div className={css.reviewTop}>
                    <p className={css.text}>{author}</p>
                    <p className={css.text}>{reviewCreatedOn()}</p>
                  </div>
                  <p className={clsx(css.text, css.comment)}>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className={css.noReviewsText}>This movie don't have reviews yet.</p>
      )}
    </>
  );
};

export default MovieReviews;
