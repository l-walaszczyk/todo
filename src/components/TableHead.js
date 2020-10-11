import React from "react";

const TableHead = ({ requestSort, getClassNamesFor }) => {
  return (
    <tr>
      <th>
        <button
          type="button"
          onClick={() => requestSort("taskName")}
          className={getClassNamesFor("taskName")}
        >
          Task name
        </button>
      </th>
      <th>
        <button
          type="button"
          onClick={() => requestSort("taskPriority")}
          className={getClassNamesFor("taskPriority")}
        >
          Priority
        </button>
      </th>
      <th colSpan="2">
        <button
          type="button"
          onClick={() => requestSort("taskDone")}
          className={getClassNamesFor("taskDone")}
        >
          Done
        </button>
      </th>
    </tr>
  );
};

export default TableHead;
