import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoRow = ({
  todo: { taskName, taskPriority, taskDone, initialIndex },
  setTodos,
}) => {
  const handleDelete = () => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(initialIndex, 1);
      return newTodos;
    });
  };

  const handleChecked = (event) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[initialIndex].taskDone = event.target.checked;
      return newTodos;
    });
  };

  return (
    <tr>
      <td>{taskName}</td>
      <td>{["Low", "Medium", "High"][taskPriority]}</td>
      <td>
        <label className="checkbox-container">
          <input type="checkbox" checked={taskDone} onChange={handleChecked} />
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
