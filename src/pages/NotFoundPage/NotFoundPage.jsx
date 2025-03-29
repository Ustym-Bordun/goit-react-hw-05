import { Link } from 'react-router';
import clsx from 'clsx';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Page not found</p>
      <Link className={clsx(css.text, css.link)} to="/">
        Back to Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
