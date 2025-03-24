import { NavLink } from 'react-router';
import css from './Navigation.module.css';
import clsx from 'clsx';

const navLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to={'/'} className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to={'/movies'} className={navLinkClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
