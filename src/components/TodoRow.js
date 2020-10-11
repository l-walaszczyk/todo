import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoRow = ({
  index,
  todo: { taskName, taskPriority, taskDone, initialIndex },
  setTodos,
  activeRow,
  setActiveRow,
}) => {
  const handleDelete = () => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(initialIndex, 1);
      return newTodos;
    });
    setActiveRow(null);
  };

  const handleChecked = (event) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[initialIndex].taskDone = event.target.checked;
      return newTodos;
    });
    setActiveRow(null);
  };

  return (
    <tr
      className={index === activeRow ? "active" : "inactive"}
      onFocus={() => setActiveRow(index)}
      onMouseEnter={() => setActiveRow(index)}
      onTouchStart={() => setActiveRow(index)}
      onMouseLeave={() => setActiveRow(null)}
    >
      <td>{taskName}</td>
      <td>{["Low", "Medium", "High"][taskPriority]}</td>
      <td>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={taskDone || false}
            onChange={handleChecked}
          />
          <span className="checkmark"></span>
        </label>
      </td>
      <td>
        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default TodoRow;
