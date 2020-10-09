import React, { useState } from "react";
import TodoRow from "./TodoRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Table({ todos }) {
  const [activeRow, setActiveRow] = useState(null);
  const [sortedField, setSortedField] = useState(null);

  const todoRows = todos.map((todo, index) => (
    <TodoRow
      key={index}
      index={index}
      todo={todo}
      activeRow={activeRow}
      setActiveRow={setActiveRow}
    />
  ));

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => setSortedField("name")}>
                Task name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => setSortedField("priority")}>
                Priority
              </button>
            </th>
            <th colSpan="2">
              <button type="button" onClick={() => setSortedField("done")}>
                Done
              </button>
            </th>
          </tr>
        </thead>
        <tbody
        // onBlur={() => setActiveRow(null)}
        >
          {todoRows}
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
