// import { NavLink } from 'react-router';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Loader</p>
      <p className={css.text}>Loading ...</p>
    </div>
  );
};

export default Loader;
