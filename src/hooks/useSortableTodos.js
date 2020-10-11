import { useState, useMemo } from "react";

const useSortableTodos = (todos, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedTodos = useMemo(() => {
    let sortableTodos = todos.map((todo, index) => ({
      ...todo,
      initialIndex: index,
    }));

    if (sortConfig !== null) {
      sortableTodos.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableTodos;
  }, [todos, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { sortedTodos, requestSort, sortConfig };
};

export default useSortableTodos;
