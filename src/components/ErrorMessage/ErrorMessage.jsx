import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Something went wrong.</p>
      <p className={css.text}>Pls try reloading the page.</p>
    </div>
  );
};

export default ErrorMessage;
