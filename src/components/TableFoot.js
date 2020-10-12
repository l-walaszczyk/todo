import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TableFoot = ({
  rowsPerPage,
  startIndex,
  endIndex,
  handleChangeRowsPerPage,
  handleNext,
  handlePrev,
  todosLength,
}) => {
  return (
    <tr>
      <td colSpan="4">
        <div className="table-footer">
          <div className="rows-per-page-container">
            <label htmlFor="rows-per-page">Rows per page:</label>
            <select
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <p className="rows-out-of">{`${
            todosLength === 0 ? 0 : startIndex + 1
          } - ${endIndex} of ${todosLength}`}</p>
          <div className="page-nav">
            <button
              disabled={startIndex === 0}
              type="button"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              disabled={endIndex === todosLength}
              type="button"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableFoot;
