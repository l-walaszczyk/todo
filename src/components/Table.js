import React, { useState } from "react";
import TodoRow from "./TodoRow";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import useSortableTodos from "../hooks/useSortableTodos";
import usePagination from "../hooks/usePagination";

const Table = ({ todos, setTodos }) => {
  const [activeRow, setActiveRow] = useState(null);

  const { sortedTodos, requestSort, sortConfig } = useSortableTodos(todos);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const {
    rowsPerPage,
    startIndex,
    endIndex,
    handleChangeRowsPerPage,
    handleNext,
    handlePrev,
  } = usePagination(todos.length, 5);

  const paginatedSortedTodos = sortedTodos.slice(startIndex, endIndex);

  const todoRows = paginatedSortedTodos.map((todo, index) => (
    <TodoRow
      key={index}
      index={index}
      todo={todo}
      setTodos={setTodos}
      activeRow={activeRow}
      setActiveRow={setActiveRow}
    />
  ));

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <TableHead
            requestSort={requestSort}
            getClassNamesFor={getClassNamesFor}
          />
        </thead>
        <tbody>{todoRows}</tbody>
        <tfoot>
          <TableFoot
            rowsPerPage={rowsPerPage}
            startIndex={startIndex}
            endIndex={endIndex}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleNext={handleNext}
            handlePrev={handlePrev}
            todosLength={todos.length}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
