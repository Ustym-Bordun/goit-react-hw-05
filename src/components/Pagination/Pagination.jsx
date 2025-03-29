import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import css from './Pagination.module.css';

const Pagination = ({ setPage, curentPage, totalPages }) => {
  const handlePrevPage = () => {
    if (curentPage === 1) return;
    setPage(prevPage => prevPage - 1);
  };
  const handleNextPage = () => {
    if (curentPage === totalPages) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={handlePrevPage} disabled={curentPage === 1}>
        <MdKeyboardArrowLeft className={css.icon} size={40} />
      </button>
      <button
        className={css.btn}
        onClick={handleNextPage}
        disabled={curentPage === totalPages}
      >
        <MdKeyboardArrowRight className={css.icon} size={40} />
      </button>
    </div>
  );
};

export default Pagination;
