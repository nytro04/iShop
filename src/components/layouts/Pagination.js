import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  console.log(pagesCount);

  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;

  return (
    <nav className="p-5">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link
              to=""
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
