import React, { useState } from "react";
import TodoRow from "./TodoRow";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import useSortableTodos from "../hooks/useSortableTodos";

const Table = ({ todos, setTodos }) => {
  const [activeRow, setActiveRow] = useState(null);

  const { sortedTodos, requestSort, sortConfig } = useSortableTodos(todos);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const todoRows = sortedTodos.map((todo, index) => (
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
          // requestSort={requestSort}
          // getClassNamesFor={getClassNamesFor}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
