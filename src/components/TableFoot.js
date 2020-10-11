import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TableFoot = () => {
  return (
    <tr>
      <td colSpan="4">
        <div className="table-footer">
          <div className="rows-per-page-container">
            <label htmlFor="rows-per-page">Rows per page:</label>
            <select id="rows-per-page">
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
          <div className="rows-out-of">1 - 5 of 11</div>
          <div className="page-nav">
            <button type="button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableFoot;
