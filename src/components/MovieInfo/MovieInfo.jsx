import { Link } from 'react-router';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie, backLink }) => {
  const {
    title,
    overview,
    release_date,
    runtime,
    vote_average,
    poster_path,
    genres,
    tagline,
    production_companies,
  } = movie;

  const formatWatchTime = () => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}:${minutes}`;
  };

  const persentageRating = () => {
    return Math.round(vote_average * 10);
  };

  return (
    <div className={css.wrapper}>
      <Link to={backLink.state} className={css.backLink}>
        Go back
      </Link>
      <h3 className={css.title}>{title}</h3>
      <div className={css.topPart}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className={css.info}>
          <p className={css.infoTitle}>{tagline}</p>

          <div className={css.topPartInfoWrappers}>
            <p className={css.text}>Rating:</p>
            <p className={css.text}>{persentageRating()}%</p>
          </div>
          <div className={css.topPartInfoWrappers}>
            <p className={css.text}>Watch time:</p>
            <p className={css.text}>{formatWatchTime()}</p>
          </div>
          <div className={css.topPartInfoWrappers}>
            <p className={css.text}>Relised:</p>
            <p className={css.text}>{release_date}</p>
          </div>
          <div className={css.topPartInfoWrappers}>
            <p className={css.text}>Ganres: </p>
            <ul className={css.ganresList}>
              {genres.map(ganre => {
                return (
                  <li className={css.ganresItem} key={ganre.id}>
                    <p className={css.ganreText}>{ganre.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className={css.overviewTitle}>Overview:</p>
          <p className={css.overview}>{overview}</p>
        </div>
      </div>
      <div className={css.bottomPart}>
        <p className={css.bottomTitle}>Production companies</p>
        <ul className={css.companiesList}>
          {production_companies.map(company => {
            const { id, logo_path, name, origin_country } = company;
            return (
              <li className={css.companiesItem} key={id}>
                <div className={css.companiesInfo}>
                  <p className={css.companiesText}>{name}</p>
                  <p className={css.companiesText}>Origin country: {origin_country}</p>
                </div>
                {logo_path && (
                  <img
                    className={css.companiesImg}
                    src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                    alt={name}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
