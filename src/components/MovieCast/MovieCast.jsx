import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import clsx from 'clsx';

import { fetchMovieCredits } from '../../service/moviesApi';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { PaginationLoader } from '../Loaders/Loaders';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();

  const [movieCredits, setMovieCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const movieCreditsData = await fetchMovieCredits(movieId);
        setMovieCredits(movieCreditsData);
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
      ) : movieCredits ? (
        <div className={css.creditsWrapper}>
          {movieCredits.cast ? (
            <div className={css.castWrapper}>
              <h4 className={css.castTitle}>Actors</h4>
              <div className={css.scrollWrapper}>
                <ul className={css.castList}>
                  {movieCredits.cast.map(actor => {
                    const { cast_id, character, known_for_department, name, profile_path } =
                      actor;
                    return (
                      <li className={css.castItem} key={cast_id}>
                        <img
                          className={css.castImg}
                          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                          alt={name}
                        />
                        <div className={css.castInfoBlock}>
                          <div className={css.castInfoWrapper}>
                            <p className={css.castText}>Role:</p>
                            <p className={css.castText}>{character}</p>
                          </div>
                          <div className={css.castInfoWrapper}>
                            <p className={css.castText}>Name:</p>
                            <p className={css.castText}>{name}</p>
                          </div>
                          <div className={css.castInfoWrapper}>
                            <p className={css.castText}>Specialty:</p>
                            <p className={css.castText}>{known_for_department}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <p className={css.noCastText}>We don't have cast info for this movie.</p>
          )}
          {movieCredits.crew ? (
            <div className={css.crewWrapper}>
              <h4 className={css.crewTitle}>Crew</h4>
              <div className={css.scrollWrapper}>
                <ul className={css.crewList}>
                  {movieCredits.crew.map(worker => {
                    const { credit_id, known_for_department, name, profile_path } = worker;
                    return (
                      <li className={css.crewItem} key={credit_id}>
                        <img
                          className={css.crewImg}
                          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                          alt={name}
                        />
                        <div className={css.crewInfoBlock}>
                          <div className={css.crewInfoWrapper}>
                            <p className={css.crewText}>Name:</p>
                            <p className={css.crewText}>{name}</p>
                          </div>
                          <div className={css.crewInfoWrapper}>
                            <p className={css.crewText}>Specialty:</p>
                            <p className={css.crewText}>{known_for_department}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <p className={css.noCrewText}>We don't have crew info for this movie.</p>
          )}
        </div>
      ) : (
        <p className={css.noCreditsText}>We don't have credits info for this movie.</p>
      )}
    </>
  );
};

export default MovieCast;
