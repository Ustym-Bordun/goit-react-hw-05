import { lazy } from 'react';
import { Outlet } from 'react-router';

import css from './MovieDetailsPage.module.css';

const Loader = lazy(() => import('../components/Loader/Loader'));

const MovieDetailsPage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>MovieDetailsPage</p>
      <p className={css.text}>Lorem ipsum dolor sit amet.</p>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
